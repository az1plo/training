import * as Sentry from '@sentry/angular';
import { Injectable } from "@angular/core";
import { UserContextPort } from "../../core/ports/monitoring/user-context.port";

@Injectable()
export class SentryUserContextAdapter implements UserContextPort {
    set(context: { id: string; email?: string }): void {
        Sentry.setUser(context);
    }

    clear(): void {
        Sentry.setUser(null);
    }
}