import { Router } from 'express';
import { comRouter } from './commodities.js'
import { userRouter } from './user-routes.js'

const router = Router();

router.use('/commodities', comRouter);

router.use('/users', userRouter)

export default router;
