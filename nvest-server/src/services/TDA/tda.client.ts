import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { User } from '../../models/User';
import { _userService } from '../user.service';
import { _authService } from './auth.service';

export class TdaClient {
    protected rootUrl = 'https://api.tdameritrade.com/v1';
    protected user: User;

    constructor(user: User) {
        this.user = user;
    }

    async get<T>(
        route: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        config.headers = {
            Authorization: `Bearer ${await this.getAccessToken()}`,
        };
        return await axios.get(`${this.rootUrl}${route}`, config);
    }

    private async getAccessToken(): Promise<string> {
        if (Date.now() >= this.user.integrations.tda.access_token_exp) {
            if (Date.now() >= this.user.integrations.tda.refresh_token_exp) {
                // We gonna have to have user intervention
                return '';
            } else {
                const refreshResult = await _authService.refreshToken(
                    this.user.integrations.tda.refresh_token
                );
                this.user.integrations.tda.access_token =
                    refreshResult.access_token;
                this.user.integrations.tda.access_token_exp =
                    Date.now() + refreshResult.expires_in * 1000;
                _userService.saveUser(this.user);
            }
        }

        return this.user.integrations.tda.access_token;
    }
}
