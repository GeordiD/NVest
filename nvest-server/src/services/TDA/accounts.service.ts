import { PositionFactory } from '../../factories/position.factory';
import { Position } from '../../models/Position';
import { AccountResponse } from '../../models/TDA/Responses/account.response';
import { User } from '../../models/User';
import { TdaClient } from './tda.client';

class AccountsService {
    async getPositions(user: User) {
        const client = new TdaClient(user);
        const result = await client.get<AccountResponse>(
            `/accounts/${user.integrations.tda.account_number}`,
            {
                params: {
                    fields: 'positions',
                },
            }
        );

        const positions = result.data.securitiesAccount.positions ?? [];
        return positions.map((x) => PositionFactory.fromTda(x));
    }
}
export const _accountsService = new AccountsService();
