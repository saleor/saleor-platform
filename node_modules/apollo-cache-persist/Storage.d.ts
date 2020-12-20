import { ApolloPersistOptions, PersistentStorage, PersistedData } from './types';
export default class Storage<T> {
    storage: PersistentStorage<PersistedData<T>>;
    key: string;
    constructor(options: ApolloPersistOptions<T>);
    read(): Promise<PersistedData<T>>;
    write(data: PersistedData<T>): Promise<void>;
    purge(): Promise<void>;
    getSize(): Promise<number | null>;
}
