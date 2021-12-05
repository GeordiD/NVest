import { TdaIntegrations } from './TDA/TdaTokens';

export class User {
    _id: string;
    username: string;
    first_name: string;
    last_name: string;
    integrations: {
        tda?: TdaIntegrations;
    };
}
