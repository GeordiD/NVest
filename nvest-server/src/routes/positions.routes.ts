import express from 'express';
import { PositionsController } from '../controllers/positionsController';

export const positionsRouter = express.Router();
const controller = new PositionsController();

positionsRouter.route('/').get(controller.getAllPositions);
