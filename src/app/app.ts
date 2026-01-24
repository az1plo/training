import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserProfile} from './features/user/pages/user-profile/user-profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('feature-based-architecture');
}
