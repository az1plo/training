import {
  APP_INITIALIZER,
  ApplicationConfig,
  ErrorHandler,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import * as Sentry from '@sentry/angular';

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { provideMonitoring } from './core/providers/monitoring.provider';
import { LOGGER } from './core/tokens/logger.token';
import { USER_CONTEXT } from './core/tokens/user-context.token';
import { SentryLoggerAdapter } from './infrastructure/monitoring/sentry.logger.adapter';
import { ConsoleLoggerAdapter } from './infrastructure/monitoring/console.logger.adapter';
import { SentryUserContextAdapter } from './infrastructure/monitoring/sentry-user-context.adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    ...(environment.production
      ? [
          {
            provide: ErrorHandler,
            useValue: Sentry.createErrorHandler(),
          },
          {
            provide: Sentry.TraceService,
            deps: [Router],
          },
          {
            provide: APP_INITIALIZER,
            useFactory: () => () => {},
            deps: [Sentry.TraceService],
            multi: true,
          },
        ]
      : []),
    
    ...provideMonitoring(
      {
        provide: LOGGER,
        useClass: environment.production
          ? SentryLoggerAdapter
          : ConsoleLoggerAdapter,
      },
      {
        provide: USER_CONTEXT,
        useClass: SentryUserContextAdapter,
      }
    ),
  ],
};
