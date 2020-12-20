import Log from './Log';
import Cache from './Cache';
import Storage from './Storage';
import Persistor from './Persistor';
import Trigger from './Trigger';
import { ApolloPersistOptions, LogLine } from './types';
export default class CachePersistor<T> {
    log: Log<T>;
    cache: Cache<T>;
    storage: Storage<T>;
    persistor: Persistor<T>;
    trigger: Trigger<T>;
    constructor(options: ApolloPersistOptions<T>);
    persist(): Promise<void>;
    restore(): Promise<void>;
    purge(): Promise<void>;
    pause(): void;
    resume(): void;
    remove(): void;
    getLogs(print?: boolean): Array<LogLine> | void;
    getSize(): Promise<number | null>;
}
