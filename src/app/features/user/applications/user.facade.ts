import {Injectable} from '@angular/core';
import {UserRepository} from '../domains/user.repository';
import {catchError, Observable, throwError} from 'rxjs';
import {User} from '../domains/user.model';
import {UserDomainError} from '../domains/errors';

@Injectable()

export class UserFacade {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  getCurrentUser(): Observable<User> {
    return this.userRepository.getCurrentUser().pipe(
      catchError(err => {
        if (err instanceof UserDomainError) {

          console.warn(
            'User domain error',
            err.code,
            err.message
          );
        }

        return throwError(() => err);
      })
    );
  }
}
