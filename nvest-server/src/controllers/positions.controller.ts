import { Request, Response } from 'express';
import { _positionsService } from '../services/positions.service';
import { _userService } from '../services/user.service';

class PositionsController {
    async getAllPositions(req: Request, res: Response) {
        const user = await _userService.getUser(req.body.userId);
        const positions = await _positionsService.getPositions(user);

        res.status(200).send(positions);
    }
}

export const _positionsController = new PositionsController();
