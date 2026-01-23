import { bootstrapApplication } from '@angular/platform-browser';
import * as Sentry from '@sentry/angular';

import { appConfig } from './app/app.config';
import { App } from './app/app';
import { environment } from './environments/environment';

if (environment.production && environment.sentryDsn) {
  Sentry.init({
    dsn: environment.sentryDsn,

    integrations: [
      Sentry.browserTracingIntegration(),
    ],

    tracesSampleRate: 0.2,
    tracePropagationTargets: [
      'localhost',
    ],

    sendDefaultPii: false,
    enableLogs: true,
  });
}

bootstrapApplication(App, appConfig)
  .catch(err => {
    if (environment.production) {
      Sentry.captureException(err);
    } else {
      console.error(err);
    }
  });
