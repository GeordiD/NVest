if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

export const config = {
    tda: {
        clientId: process.env.TDA_CLIENT_ID as string,
        redirectUrl: process.env.TDA_REDIRECT_URL as string,
    },
};
