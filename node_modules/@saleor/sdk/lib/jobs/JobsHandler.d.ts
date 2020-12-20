declare type Events = {
    [name: string]: any;
};
export declare class JobsHandler<JobsEvents extends Events> {
    private eventListeners;
    attachEventListener(eventListener: <E extends keyof JobsEvents, V extends JobsEvents[E]>(event: E, value: V) => void): void;
    protected notifyEvent<E extends keyof JobsEvents, V extends JobsEvents[E]>(event: E, value: V): void;
}
export {};
