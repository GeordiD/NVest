import { Request, Response, NextFunction } from 'express';
import { _userService } from '../services/user.service';

class PositionsController {
    async getAllPositions(req: Request, res: Response, next: NextFunction) {
        const user = await _userService.getUser(req.body.userId);

        res.status(200).send(user);
    }
}

export const _positionsController = new PositionsController();
