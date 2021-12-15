import { MongoClient, ObjectId } from 'mongodb';
import { PositionsCollection } from '../models/Collections/PositionsCollection';
import { Position } from '../models/Position';
import { User } from '../models/User';
import { config } from './config';

export class PositionsService {
    async getPositions(user: User) {
        const client = new MongoClient(config.connectionString);

        try {
            await client.connect();
            const result = await client
                .db()
                .collection('positions')
                .findOne<PositionsCollection>({
                    userId: new ObjectId(user._id),
                });

            return {
                positions: result.positions,
                lastUpdated: result.lastUpdated,
            };
        } finally {
            await client.close();
        }
    }

    async updatePositions(user: User, positions: Position[]) {
        const client = new MongoClient(config.connectionString);

        try {
            await client.connect();
            await client
                .db()
                .collection('positions')
                .updateOne(
                    { userId: new ObjectId(user._id) },
                    {
                        $set: {
                            positions: positions,
                            userId: new ObjectId(user._id),
                        },
                        $currentDate: { lastUpdated: true },
                    },
                    { upsert: true }
                );
        } finally {
            await client.close();
        }
    }
}

export const _positionsService = new PositionsService();
