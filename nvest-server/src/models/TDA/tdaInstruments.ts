export interface TdaEquity {
    assetType: string;
    cusip: string;
    symbol: string;
    description: string;
}

export interface TdaFixedIncome {
    assetType: string;
    cusip: string;
    symbol: string;
    description: string;
    maturityDate: string;
    variableRate: number;
    factor: number;
}

export interface TdaMutualFund {
    assetType: string;
    cusip: string;
    symbol: string;
    description: string;
    type: string;
}

export interface TdaCash {
    assetType: string;
    cusip: string;
    symbol: string;
    description: string;
    type: string;
}

export interface TdaOption {
    assetType: string;
    cusip: string;
    symbol: string;
    description: string;
    type: string;
    putCall: string;
    underlyingSymbol: string;
    optionMultiplier: number;
    optionDeliverables: [
        {
            symbol: string;
            deliverableUnits: number;
            currencyType: string;
            assetType: string;
        }
    ];
}
