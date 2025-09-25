import { Router } from 'express';
import type { Request, Response } from 'express';
import { Commodity } from '../../models/index.js';
import { json, Op } from 'sequelize';

const router = Router();

// Get api/commodities
router.get('/', async (_req: Request, res: Response) => {
    try {
        const commodities = await Commodity.findAll({});

        if (!commodities) {
            res.status(500).json({message: "Empty"})
        };
        
        res.status(200).json(commodities);
    } catch (error: any) {
        res.status(500),json({message: error.message})
    }
});

// Get api/commodities/{id}
router.get('/commoditiy/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const commodity = await Commodity.findByPk(id);
        if (!commodity) {
            res.status(404).json({error: "Not found"});
        } else {
            res.status(200).json(commodity);
        }
    } catch (error:any) {
        res.status(500),json({message: error.message})
        
    }
})

// Get api/commodities/products
router.get('/products', async (_req: Request, res: Response) => {
    try {

        const commodity = await Commodity.findAll({
            attributes: ['PRODUCTO'],
            group: 'PRODUCTO',
            order: ['PRODUCTO']
        });

        if (!commodity) {
            res.status(404).json({error: "Not found"});
        };

        res.status(200).json(commodity);
    } catch (error: any) {
        res.status(500),json({message: error.message});
    }
})

// Get api/commodities/meses
router.get('/meses', async (_req: Request, res: Response) => {
    try {

        const meses = await Commodity.findAll({
            attributes: ['FECHA'],
            group: 'FECHA',
            order: ['FECHA']
        });

        if (!meses) {
            res.status(404).json({error: "Not found"});
        };

        res.status(200).json(meses);
    } catch (error: any) {
        res.status(500),json({message: error.message});
    }
})

// Get api/commodities/date
router.post('/date', async (req: Request, res: Response) => {
    try {
        const startDate = new Date(req.body.startDate)
        const endDate = new Date(req.body.endDate)
        console.log(startDate,endDate)

        const commodity = await Commodity.findAll({
            where: {
                FECHA: {
                    [Op.between]: [startDate, endDate]
                }
            },
            order: ["PRODUCTO"]
        })

        if (!commodity) {
            res.status(404).json({error: "Not found"});
        }

        res.status(200).json(commodity)
    } catch (error: any) {
        res.status(500),json({message: error.message})
    }
})

export { router as comRouter }



