import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { LoggerPort } from "../../../../core/ports/monitoring/logger.port";
import { UserContextPort } from "../../../../core/ports/monitoring/user-context.port";
import { LOGGER } from "../../../../core/tokens/logger.token";
import { USER_CONTEXT } from "../../../../core/tokens/user-context.token";
import { UserResult } from "../user.result";
import { UserRepository } from "../../domain/user.repository";
import { USER_REPOSITORY } from "../tokens/user-repository.token";
import { setUserContext } from "../pipes/set-user-context.pipe";
import { mapUserDomainErrors } from "../pipes/user-domain-result.pipe";

@Injectable()
export class GetCurrentUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    @Inject(USER_CONTEXT)
    private readonly userContext: UserContextPort,
    @Inject(LOGGER)
    private readonly logger: LoggerPort
  ) {}

  execute(): Observable<UserResult> {
    return this.userRepository
        .getCurrentUser()
        .pipe(
          setUserContext(this.userContext),
          mapUserDomainErrors(this.logger),
        );
    }
}
