import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as Sentry from "@sentry/angular";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('feature-based-architecture');

  public throwTestError(): void {

    Sentry.captureMessage('User triggered test error button', {
      level: 'info',
      extra: {
        user: 'sentry-test',
        action: 'test_error_button_click',
      },
    });

    try {
      throw new Error('Sentry Test Error');
    } catch (e) {
      Sentry.captureException(e);
    }
  }
}
