import { User } from '../../models/User';

class AccountsService {
    getAccount(user: User) {
        console.log('here', user);
    }
}

export const _accountsService = new AccountsService();
