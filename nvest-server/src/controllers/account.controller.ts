import { Request, Response } from 'express';
import { _positionsService } from '../services/positions.service';
import { _accountsService } from '../services/TDA/accounts.service';
import { _userService } from '../services/user.service';

export class AccountController {
    async syncAccountData(req: Request, res: Response) {
        const user = await _userService.getUser(req.body.userId);

        const positions = await _accountsService.getPositions(user);
        await _positionsService.updatePositions(user, positions);

        res.status(200).send('Sync successful.');
    }
}

export const _accountController = new AccountController();
