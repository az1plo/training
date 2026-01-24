import {Inject, Injectable} from '@angular/core';
import {UserRepository} from '../../domains/user.repository';
import {USER_CONTEXT} from '../../../../core/tokens/user-context.token';
import {UserContextPort} from '../../../../core/ports/monitoring/user-context.port';
import {LOGGER} from '../../../../core/tokens/logger.token';
import {LoggerPort} from '../../../../core/ports/monitoring/logger.port';
import {Observable} from 'rxjs';
import {UserResult} from '../user.result';
import {USER_REPOSITORY} from '../tokens/user-repository.token';
import {setUserContext} from '../pipes/set-user-context.pipe';
import {userDomainResult} from '../pipes/user-domain-result.pipe';

@Injectable()
export class GetCurrentUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    @Inject(USER_CONTEXT)
    private readonly userContext: UserContextPort,
    @Inject(LOGGER)
    private readonly logger: LoggerPort
  ) {
  }

  execute(): Observable<UserResult> {
    return this.userRepository
      .getCurrentUser()
      .pipe(
        setUserContext(this.userContext),
        userDomainResult(this.logger)
      );
  }
}
