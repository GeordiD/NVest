import express from 'express';
import { AuthService } from './services/TDA/authService';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();
const port = 5000;

app.get('/', async (_, res) => {
    try {
        const result = await new AuthService().saveAccessToken();
        res.status(200).send(result);
    } catch (ex) {
        res.status(500).send(ex);
    }
});

app.listen(port, () => console.log(`Running on port ${port}`));
