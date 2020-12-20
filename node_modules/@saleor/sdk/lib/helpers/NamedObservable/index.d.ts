import { INamedObservable } from "./types";
export declare class NamedObservable<T> implements INamedObservable<T> {
    private observers;
    private notifiedObservers;
    constructor();
    subscribeToChange: (name: T, func: (data: any) => any) => void;
    unsubscribeToChange: (name: T, func: (data: any) => any) => void;
    subscribeToNotifiedChanges: (func: (data: any) => any) => void;
    unsubscribeToNotifiedChanges: (func: (data: any) => any) => void;
    protected notifyChange: (name: T, data: any) => void;
}
