import Stripe from 'stripe';
import type { Request, Response } from 'express';
import express from 'express';
import { User } from '../../models/index.js';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

// 🔹 1. Crear Stripe Customer al registrar usuario
router.post("/create-stripe-customer", async (req: Request, res: Response) => {
  const { email, userId } = req.body;

  try {
    const customer = await stripe.customers.create({
      email,
      metadata: { userId },
    });


    const user = await User.update(
      { stripeCustomerId: customer.id },
      {
        where: {
          id: userId
        }
      }
    );

    if (user) {
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ success: false, message: 'User not found' })
    };
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating stripe customer" });
  }
});


// 🔹 2. Crear Checkout Session
router.post("/create-checkout-session", async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findOne(
      { 
        attributes: ['stripeCustomerId'],
        where: { 
          id: userId
        }
      }
    );

    if (!user) {
      res.status(404).json({ message: 'User not found' })
    } else {
      const customerId = user.stripeCustomerId

      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price: 'price_1Rb6U8R1BUTQCWWp6E5u1Hso', // tu price ID
            quantity: 1,
          },
        ],
        success_url: `https://idex-backend-8rw0.onrender.com/login`,
        cancel_url: `https://idex-backend-8rw0.onrender.com/signup`,
      });

      res.status(200).json({ url: session.url });
    };
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating checkout" });
  }
});


// 🔹 3. WEBHOOK (EL MÁS IMPORTANTE)
router.post("/webhook", async (req, res) => {
  const sigHeader = req.headers["stripe-signature"];
  const sig = Array.isArray(sigHeader) ? sigHeader[0] : sigHeader;

  if (!sig) {
    return res.status(400).json({ error: "Missing stripe-signature header" });
  }

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    );

    // ✅ Cuando el pago se completa
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const customerId = session.customer as string;
      const subscriptionId = session.subscription as string ;

      if (!customerId || !subscriptionId && typeof subscriptionId === "string") {
        console.warn("checkout.session.completed received without customer/subscription", {
          eventId: event.id,
          customerId,
          subscriptionId,
        });
        return res.status(200).json({ received: true, skipped: true, reason: "Missing customer/subscription" });
      }

      await User.update(
        { 
          stripeSubscriptionId: subscriptionId, 
          membresia: 'pro'
        },
        {
          where: {
            stripeCustomerId: customerId
          }
        }
      );
    }

    // ❌ Cuando se cancela suscripción
    if (event.type === "customer.subscription.deleted") {
      const subscription = event.data.object as Stripe.Subscription;

      if (!subscription?.id) {
        console.warn("customer.subscription.deleted received without subscription id", {
          eventId: event.id,
        });
        return res.status(200).json({ received: true, skipped: true, reason: "Missing subscription id" });
      }

      await User.update(
        { 
          membresia: 'gratis'
        },
        {
          where: {
            stripeSubscriptionId: subscription.id
          }
        }
      );
    }

    return res.json({ received: true });
  } catch (err: any) {
    console.log("Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
});


// // 🔹 4. Middleware para proteger rutas
// router.get("/protected-route/:userId", async (req, res) => {
//   const { userId } = req.params;

//   const result = await pool.query(
//     "SELECT membership_status FROM users WHERE id=$1",
//     [userId]
//   );

//   if (result.rows[0].membership_status !== "active") {
//     return res.status(403).json({ error: "Subscription required" });
//   }

//   return res.json({ message: "Access granted" });
// });

export default router
