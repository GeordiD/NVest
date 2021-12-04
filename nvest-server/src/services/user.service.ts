import { MongoClient, ObjectId } from 'mongodb';
import { config } from './config';

class UserService {
    async getUser(id: string) {
        const client = new MongoClient(config.connectionString);

        try {
            await client.connect();
            const result = await client
                .db()
                .collection('users')
                .findOne({ _id: new ObjectId(id) });

            return result;
        } finally {
            await client.close();
        }
    }
}

export const _userService = new UserService();
