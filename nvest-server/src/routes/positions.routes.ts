import express from 'express';
import { _positionsController } from '../controllers/positions.controller';

export const positionsRouter = express.Router();

positionsRouter.route('/').get(_positionsController.getAllPositions);
