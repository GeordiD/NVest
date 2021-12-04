import { Application } from 'express';
import { positionsRouter } from './positions.routes';

export function defineRoutes(app: Application) {
    app.use('/api/positions', positionsRouter);
}
