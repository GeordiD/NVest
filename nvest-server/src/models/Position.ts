import { InstrumentType } from './InstrumentType';

export abstract class Position {
    symbol: string;
    type: InstrumentType;
    quantity: number;
    isShort: boolean;
    averagePrice: number;
    marketValue: number;
}
