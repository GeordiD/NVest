export const config = {
    tda: {
        clientId: process.env.TDA_CLIENT_ID as string,
        redirectUrl: process.env.TDA_REDIRECT_URL as string,
    },
    connectionString: process.env.CONNECTION_STRING as string,
};
