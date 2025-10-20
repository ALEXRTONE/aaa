import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';  // Import the User model

// Create a new router instance
const router = Router();

// POST signup/users - Create a new user
const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await User.create({ username, email, password });
    res.status(201).json({username: newUser.username, email: newUser.email, membresia: newUser.membresia});
    
  } catch (error: any) {
    const err = error.errors.map((e:any) => e.message)
    res.status(400).json({ message: error.message, errors: err });
  }
};

// POST signup-api/users - Sign a user
router.post('/users', createUser);  // Define the user route

export default router;  // Export the router instance