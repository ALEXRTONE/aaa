import apiRoutes from './api/index.js'
import authRoutes from './auth-routes.js'
import signupRoutes from './signup-routes.js'
import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
const router = express.Router();

router.use('/api', authenticateToken, apiRoutes);
router.use('/auth', authRoutes);
router.use('/signuser', signupRoutes);


export default router;
