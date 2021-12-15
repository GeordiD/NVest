import {
    TdaCash,
    TdaEquity,
    TdaFixedIncome,
    TdaMutualFund,
    TdaOption,
} from './tdaInstruments';

export interface TdaPosition {
    shortQuantity: number;
    averagePrice: number;
    currentDayProfitLoss: number;
    currentDayProfitLossPercentage: number;
    longQuantity: number;
    settledLongQuantity: number;
    settledShortQuantity: number;
    agedQuantity: number;
    instrument:
        | TdaCash
        | TdaEquity
        | TdaMutualFund
        | TdaFixedIncome
        | TdaOption;
    marketValue: number;
}
