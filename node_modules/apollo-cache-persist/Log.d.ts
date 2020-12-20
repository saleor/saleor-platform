import { ApolloPersistOptions, LogLevel, LogLine } from './types';
export default class Log<T> {
    debug: boolean;
    lines: Array<LogLine>;
    static buffer: number;
    static prefix: string;
    constructor(options: ApolloPersistOptions<T>);
    emit(level: LogLevel, message: any[]): void;
    tailLogs(): void;
    getLogs(): Array<LogLine>;
    write(level: LogLevel, message: any[]): void;
    info(...message: any[]): void;
    warn(...message: any[]): void;
    error(...message: any[]): void;
}
