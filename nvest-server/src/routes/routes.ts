import { Application } from 'express';
import { accountsRouter } from './account.routes';
import { positionsRouter } from './positions.routes';

export function defineRoutes(app: Application) {
    app.use('/api/positions', positionsRouter);
    app.use('/api/account', accountsRouter)
}
