import { InstrumentType } from '../models/InstrumentType';
import { Position } from '../models/Position';
import { TdaPosition } from '../models/TDA/tdaPosition';

export class PositionFactory {
    static fromTda(tdaPosition: TdaPosition): Position {
        const position: Position = {
            symbol: tdaPosition.instrument.symbol.split('_')[0],
            type: this.getTdaType(tdaPosition),
            quantity: tdaPosition.longQuantity | tdaPosition.shortQuantity,
            isShort: tdaPosition.shortQuantity > 0,
            averagePrice: tdaPosition.averagePrice,
            marketValue: tdaPosition.marketValue,
        };

        return position;
    }

    private static getTdaType(tdaPosition: TdaPosition): InstrumentType {
        switch (tdaPosition.instrument.assetType) {
            case 'EQUITY':
                return InstrumentType.Equity;
            case 'OPTION':
                return InstrumentType.Option;
            case 'CASH_EQUIVALENT':
                return InstrumentType.Cash;
            case 'MUTUAL_FUND':
            case 'FIXED_INCOME':
            case 'INDEX':
            case 'CURRENCY':
                throw new Error(
                    `Unsupported TdaType: ${tdaPosition.instrument.assetType}`
                );
        }
    }
}
