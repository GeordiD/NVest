import { Request, Response } from 'express';
import { _accountsService } from '../services/TDA/accounts.service';
import { _userService } from '../services/user.service';

class PositionsController {
    async getAllPositions(req: Request, res: Response) {
        const user = await _userService.getUser(req.body.userId);
        const account = await _accountsService.getAccount(user);

        res.status(200).send(account);
    }
}

export const _positionsController = new PositionsController();
