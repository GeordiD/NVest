import { MongoClient, ObjectId } from 'mongodb';
import { User } from '../models/User';
import { config } from './config';

class UserService {
    async getUser(id: string) {
        const client = new MongoClient(config.connectionString);

        try {
            await client.connect();
            const result = await client
                .db()
                .collection('users')
                .findOne<User>({ _id: new ObjectId(id) });

            return result;
        } finally {
            await client.close();
        }
    }

    async saveUser(user: User) {
        const client = new MongoClient(config.connectionString);

        try {
            await client.connect();

            await client
                .db()
                .collection('users')
                .updateOne({ _id: new ObjectId(user._id) }, { $set: user });
        } finally {
            await client.close();
        }
    }
}

export const _userService = new UserService();
