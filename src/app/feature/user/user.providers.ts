import { Provider } from "@angular/core";

import { UserFacade } from "./application/user.facade";
import { GetCurrentUserUseCase } from "./application/use-cases/get-current-user.use-case";
import { UpdateUserUseCase } from "./application/use-cases/update-user.use-case";

import { USER_REPOSITORY } from "./application/tokens/user-repository.token";
import { UserApiRepository } from "./infrastructure/user.api.repository";
import { USER_FACADE } from "./application/tokens/user-facade.token";


export const USER_PROVIDERS: Provider[] = [
  UserFacade,

  GetCurrentUserUseCase,
  UpdateUserUseCase,

  {
    provide: USER_REPOSITORY,
    useClass: UserApiRepository,
  },
  {
    provide: USER_FACADE,
    useClass: UserFacade,
  },
];
