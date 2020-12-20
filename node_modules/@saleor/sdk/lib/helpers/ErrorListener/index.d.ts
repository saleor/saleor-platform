import { DataErrorAuthTypes } from "../../api/Auth/types";
import { DataErrorCheckoutTypes } from "../../api/Checkout/types";
import { ErrorCartTypes } from "../../jobs/Cart";
import { ApolloErrorWithUserInput } from "../../react/types";
import { IErrorListener } from "./types";
export declare type ErrorTypes = DataErrorAuthTypes | DataErrorCheckoutTypes | ErrorCartTypes;
export declare class ErrorListener implements IErrorListener {
    private errorListeners;
    constructor();
    addOnErrorListener: (func: (error: ApolloErrorWithUserInput | any, type: ErrorTypes) => any) => void;
    removeOnErrorListener: (func: (error: ApolloErrorWithUserInput | any, type: ErrorTypes) => any) => void;
    protected fireError: (error: ApolloErrorWithUserInput | any, type: ErrorTypes) => void;
}
