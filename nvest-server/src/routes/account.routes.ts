import express from 'express';
import { _accountController } from '../controllers/account.controller';

export const accountsRouter = express.Router();

accountsRouter.route('/sync').post(_accountController.syncAccountData);
