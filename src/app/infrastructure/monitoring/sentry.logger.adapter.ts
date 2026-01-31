import { Injectable } from "@angular/core";
import { LoggerPort } from "../../core/ports/monitoring/logger.port";
import * as Sentry from "@sentry/angular";

@Injectable()
export class SentryLoggerAdapter implements LoggerPort {
    info(message: string, context?: Record<string, unknown>): void {
        Sentry.addBreadcrumb({
            message,
            level: 'info',
            data: context,
        });
    }

    warn(message: string, context?: Record<string, unknown>): void {
        Sentry.captureMessage(message, {
            level: 'warning',
            extra: context,
        });
    }

    error(message: string, context?: Record<string, unknown>): void {
        Sentry.captureException(new Error(message), {
            extra: context,
        });
    }
}