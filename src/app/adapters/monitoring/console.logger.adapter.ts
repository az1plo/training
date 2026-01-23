import { Injectable } from "@angular/core";
import { LoggerPort } from "../../core/ports/monitoring/logger.port";

@Injectable()
export class ConsoleLoggerAdapter implements LoggerPort {
    info(message: string, context?: Record<string, unknown>): void {
        console.info('[INFO]', message, context);
    }

    warn(message: string, context?: Record<string, unknown>): void {
        console.warn('[WARN]', message, context);
    }

    error(message: string, context?: Record<string, unknown>): void {
        console.error('[ERROR]', message, context);
    }
}