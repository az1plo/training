import { InjectionToken } from "@angular/core";
import { UserContextPort } from "../ports/monitoring/user-context.port";

export const USER_CONTEXT = new InjectionToken<UserContextPort>('USER_CONTEXT');
