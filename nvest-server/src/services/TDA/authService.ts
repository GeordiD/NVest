import axios from 'axios';
import qs from 'qs';
import { config } from '../config';

export class AuthService {
    async saveAccessToken(): Promise<string> {
        var result = await axios.post(
            `https://api.tdameritrade.com/v1/oauth2/token`,
            qs.stringify({
                grant_type: 'authorization_code',
                refresh_token: '',
                access_type: 'offline',
                code: 'todo',
                client_id: config.tda.clientId,
                redirect_uri: config.tda.redirectUrl,
            }),
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
            }
        );

        if (result && result.data) {
            return result.data;
        } else {
            return 'Could not find anything';
        }
    }

    async refreshToken(refreshToken: string) {
        var result = await axios.post(
            `https://api.tdameritrade.com/v1/oauth2/token`,
            qs.stringify({
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
                client_id: config.tda.clientId,
            }),
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
            }
        );

        if (result && result.data) {
            return result.data;
        } else {
            console.log('could not refresh token');
        }
    }
}
