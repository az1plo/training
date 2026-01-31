import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { LoggerPort } from "../../../../core/ports/monitoring/logger.port";
import { UserContextPort } from "../../../../core/ports/monitoring/user-context.port";
import { LOGGER } from "../../../../core/tokens/logger.token";
import { USER_CONTEXT } from "../../../../core/tokens/user-context.token";
import { UserRepository } from "../../domain/user.repository";
import { UserResult } from "../user.result";
import { UpdateUserCommand } from "../commands/update-user.command";
import { USER_REPOSITORY } from "../tokens/user-repository.token";
import { mapCommandToData } from "../mappers/user.mapper";
import { setUserContext } from "../pipes/set-user-context.pipe";
import { mapUserDomainErrors } from "../pipes/user-domain-result.pipe";
import { mapApplicationErrors } from "../pipes/user-application-error.pipe";

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    @Inject(USER_CONTEXT)
    private readonly userContext: UserContextPort,
    @Inject(LOGGER)
    private readonly logger: LoggerPort
  ) {}

  execute(command: UpdateUserCommand): Observable<UserResult> {
    return this.userRepository
      .updateUser(mapCommandToData(command))
      .pipe(
        setUserContext(this.userContext),
        mapUserDomainErrors(this.logger),
        mapApplicationErrors(this.logger)
      );
  }
}
