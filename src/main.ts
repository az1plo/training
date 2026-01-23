import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import * as Sentry from '@sentry/angular';
import {environment} from './envionments/environment.prod';

if(environment.production && environment.sentryDsn) {
  Sentry.init({
    dsn: environment.sentryDsn,

    sendDefaultPii: false,

    integrations: [
      Sentry.browserTracingIntegration()
    ],
    tracesSampleRate: 0.2,

    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

    enableLogs: true
  });
}

bootstrapApplication(App, appConfig)
  .catch(err => {
    Sentry.captureException(err);
  });
