import {InjectionToken} from '@angular/core';
import {UserRepository} from '../../domains/user.repository';

export const USER_REPOSITORY = new InjectionToken<UserRepository>('USER_REPOSITORY')
