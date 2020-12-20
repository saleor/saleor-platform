import ApolloClient, { ApolloQueryResult } from "apollo-client";
import { GetBaseDetails, MapQueryData } from "./types";
declare abstract class BaseDetails<TQuery, TObject, TVariables> {
    /**
     * Awaitable promise of the current query
     */
    current: Promise<ApolloQueryResult<TQuery>> | null;
    /**
     * Apollo client
     */
    protected client: ApolloClient<any> | undefined;
    /**
     * Object, undefined if the initial query is not finished yet
     */
    data: TObject | undefined;
    /**
     * Query variables containing identifier, name, etc.
     */
    variables: TVariables | undefined;
    /**
     * Status of the current query
     */
    get loading(): boolean;
    /**
     * Method called to get objects from API
     */
    abstract query: GetBaseDetails<TQuery, TVariables>;
    /**
     * Function mapping query data to object
     */
    abstract mapQueryData: MapQueryData<TQuery, TObject>;
    constructor(client: ApolloClient<any>);
    cleanup: () => void;
    /**
     * Initialize details by querying it
     */
    init: (variables: TVariables) => Promise<void>;
}
export default BaseDetails;
