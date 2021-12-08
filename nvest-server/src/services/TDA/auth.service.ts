import axios from 'axios';
import qs from 'qs';
import { PostAccessTokenResponse } from '../../models/TDA/Responses/postAccessToken.response';
import { RefreshTokenResponse } from '../../models/TDA/Responses/refreshToken.response';
import { config } from '../config';

class AuthService {
    async getAccessToken(code: string): Promise<PostAccessTokenResponse> {
        const result = await axios.post<PostAccessTokenResponse>(
            `https://api.tdameritrade.com/v1/oauth2/token`,
            qs.stringify({
                grant_type: 'authorization_code',
                refresh_token: '',
                access_type: 'offline',
                code: code,
                client_id: config.tda.clientId,
                redirect_uri: config.tda.redirectUrl,
            }),
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
            }
        );

        return result.data;
    }

    async refreshToken(refreshToken: string): Promise<RefreshTokenResponse> {
        const result = await axios.post(
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

        return result.data;
    }
}

export const _authService = new AuthService();
