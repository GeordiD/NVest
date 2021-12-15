import { TdaPosition } from "../tdaPosition";

export interface AccountResponse {
    securitiesAccount: {
        positions?: TdaPosition[];
    }
}