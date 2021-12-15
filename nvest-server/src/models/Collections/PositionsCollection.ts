import { ObjectId } from 'mongodb';
import { Position } from '../Position';

export interface PositionsCollection {
    userId: ObjectId;
    lastUpdated: Date;
    positions: Position[];
}
