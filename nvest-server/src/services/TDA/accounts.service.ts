import { User } from '../../models/User';
import { TdaClient } from './tda.client';

class AccountsService {
    async getAccount(user: User) {
        const client = new TdaClient(user);
        const result = await client.get(
            `/accounts/${user.integrations.tda.account_number}`,
            {
                params: {
                    fields: 'positions',
                },
            }
        );

        return result.data;
    }
}
export const _accountsService = new AccountsService();
