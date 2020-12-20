import ApolloClient, { ApolloQueryResult } from "apollo-client";
import { PageInfo } from "../../fragments/gqlTypes/PageInfo";
import { GetBaseList, MapQueryData, BaseListVariables, GetPageInfo } from "./types";
declare abstract class BaseList<TQuery, TObject, TVariables extends BaseListVariables> {
    /**
     * Awaitable promise of the current query
     */
    current: Promise<ApolloQueryResult<TQuery>> | null;
    /**
     * Apollo client
     */
    protected client: ApolloClient<any> | undefined;
    /**
     * List of objects, undefined if the first query is not finished yet
     */
    data: TObject[] | undefined;
    /**
     * Query variables containing pagination, sorting, etc.
     */
    variables: TVariables | undefined;
    /**
     * Status of the current query
     */
    get loading(): boolean;
    /**
     * PageInfo object holding information about last encountered cursor and
     * ability to fetch next page
     */
    pageInfo: PageInfo | undefined;
    /**
     * Method called to get objects from API
     */
    abstract query: GetBaseList<TQuery, TVariables>;
    /**
     * Function getting PageInfo object from query result
     */
    abstract getPageInfo: GetPageInfo<TQuery>;
    /**
     * Function mapping query data to list of objects
     */
    abstract mapQueryData: MapQueryData<TQuery, TObject>;
    constructor(client: ApolloClient<any>);
    cleanup: () => void;
    /**
     * Initialize list by querying first page
     */
    init: (variables: TVariables) => Promise<void>;
    /**
     * Get next page of objects
     */
    next: () => Promise<TObject[]>;
}
export default BaseList;
