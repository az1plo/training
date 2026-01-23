import {APP_INITIALIZER, ApplicationConfig, ErrorHandler, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter, Router} from '@angular/router';
import { routes } from './app.routes';
import * as Sentry from '@sentry/angular';
import {LOGGER} from './core/tokens/logger.token';
import {SentryLoggerAdapter} from './adapters/monitoring/sentry.logger.adapter';
import {ConsoleLoggerAdapter} from './adapters/monitoring/console.logger.adapter';
import {environment} from '../envionments/environment';
import {provideMonitoring} from './core/providers/monitoring.provider';
import {SentryUserContextAdapter} from './adapters/monitoring/sentry-user-context.adapter';
import {USER_CONTEXT} from './core/tokens/user-context.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

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

    ...provideMonitoring({
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
  ]
};
