import express from 'express';
import { AuthService } from './services/TDA/authService';

const app = express();
const port = 5000;

app.get('/', async (_, res) => {
    // const result = await new AuthService().saveAccessToken();
    res.status(200).send('b r o n c o s');
});

app.listen(port, () => console.log(`Running on port ${port}`));
