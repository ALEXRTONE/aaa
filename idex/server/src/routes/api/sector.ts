import { Router } from 'express';
import type { Request, Response } from 'express';
import { Sector } from '../../models/index.js';
import { json } from 'sequelize';

const router = Router();

// Get api/sector
router.get('/', async (_req: Request, res: Response) => {
    try {
        const sector = await Sector.findAll({});

        if (!sector) {
            res.status(500).json({message: "Empty"})
        };
        
        res.status(200).json(sector);
    } catch (error: any) {
        res.status(500),json({message: error.message})
    }
});

export { router as sectorRouter }



