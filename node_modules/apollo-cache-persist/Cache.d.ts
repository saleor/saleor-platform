import { ApolloCache } from 'apollo-cache';
import { ApolloPersistOptions, PersistedData } from './types';
export default class Cache<T> {
    cache: ApolloCache<T>;
    serialize: boolean;
    constructor(options: ApolloPersistOptions<T>);
    extract(): PersistedData<T>;
    restore(data: PersistedData<T>): void;
}
