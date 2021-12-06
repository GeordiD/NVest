import express from 'express';
import { defineRoutes } from './routes/routes';
// import dotenv from 'dotenv';

// if (process.env.NODE_ENV !== 'production') {
//     console.log('did it');
//     require('dotenv').config();
// }

const app = express();
const port = 5000;

app.use(express.json());

defineRoutes(app);

app.listen(port, () => console.log(`Running on port ${port}`));
