import { Component } from '@angular/core';
import {UserFacade} from '../../applications/user.facade';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
  providers: [UserFacade]
})
export class User {
  constructor() {
  }



}
