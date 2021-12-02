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
                code: 'o59kSP7VnVSzMndsgmZyrN3xTOqspxUzBNqvqreeVrTruoqaq8tnNdAL7A4TvQMcgIpqSsAU3NQAvqOZ17f6mwUxMipfkEr32hX3g6vt+L2nOuIZg2AauCNWPqX+e93M4tRTkav1v1crO92p+4d9Xt5AGRksEGGW2OQJqiC2cB4tBpsxnLgAd3UTmBiA7vbHhJzaqHxIQCClLAU2Ex6MTTAZLBXWjnJySiRc5Qh/brqLOBHYUJqmMfQFlVT06vdD7lZBY6UYtNnqc/EMZ3dTFKIKcBJ7ZsVA7jDNRM3s96u4mfdp0ICVFJuDkSc5owdqiw46TA/rUVFcfzFN4NzCaFL14+HgEW1nqaClVdZ1w7gtcbZpGwxWg9nTzGrrK/tCU7e3ytNoHnpiPssB3gOEW0eTcf5A9G9ieu4IiTZk878rfENaHNcmp+1lb5P100MQuG4LYrgoVi/JHHvlHksgZYt2gSdYH6Q1wtMQtBsCCfFJCehVdCMs4LqXQ78Fl5yj/Y0cVQV2l1gupH7/rTo2X6Uj58crbZuXk/KJJzRc9KpVbXtAEoxzizJIDCWSFrAr4nzsO5aqTLPbOZqsmcl30Oxo59ohyAi998279CW3ytMbigYSk7s725f2jIxvLqIidJuRDEXnQhH26vdCs5WGLgvVZJK4A7EmANKlYxnqjcwyDIBX6hn9T1mi5cQbjIMxrEV/j9HuIFtYYo421PKKMS4WoAXgDDzPtjqincCKH5eeCvElvRIgPICTZd3mYvbFrjBtpTcfusyNisEaubo6/F0lQnCA7kvS5as4cfW0mcOqSIb5atrntArtTnIRptc06ph8vceXedHfV2tnG9VinDBY2FYhKNdFBGLekGWUHg4qW0BEs8Bux4UNuaiEwiJossuV/q3JtOc=212FD3x19z9sWBHDJACbC00B75E',
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
