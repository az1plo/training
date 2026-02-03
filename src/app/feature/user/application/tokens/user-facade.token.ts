import { InjectionToken } from '@angular/core';
import { UserFacadePort } from '../ports/user-facade.port';

export const USER_FACADE = new InjectionToken<UserFacadePort>(
  'USER_FACADE'
);
