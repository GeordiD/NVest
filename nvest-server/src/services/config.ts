import dotenv from 'dotenv';

class Config {
    tda: {
        clientId: string;
        redirectUrl: string;
    };
    connectionString: string;

    constructor() {
        if (process.env.NODE_ENV !== 'production') {
            dotenv.config();
        }

        this.connectionString = process.env.CONNECTION_STRING;
        this.tda = {
            clientId: process.env.TDA_CLIENT_ID,
            redirectUrl: process.env.TDA_REDIRECT_URL,
        };
    }
}

export const config = new Config();
