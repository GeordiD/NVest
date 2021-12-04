import { Request, Response, NextFunction } from 'express';

export class PositionsController {
    getAllPositions(req: Request, res: Response, next: NextFunction) {
        res.status(200).send('onetwothree');
    }
}
