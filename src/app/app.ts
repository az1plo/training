import { Component } from '@angular/core';
import { ProfilePageComponent } from './feature/user/ui/pages/profile-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfilePageComponent],
  template: `<user-profile-page />`,
})
export class App {}
