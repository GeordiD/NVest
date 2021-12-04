import express from 'express';
import { defineRoutes } from './routes/routes';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();
const port = 5000;

defineRoutes(app);

app.listen(port, () => console.log(`Running on port ${port}`));
