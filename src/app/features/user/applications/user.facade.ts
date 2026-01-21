import { catchError, Observable, throwError } from "rxjs";
import { UserRepository } from "../domains/user.repository";
import { User } from "../components/user/user";
import { UserDomainError } from "../domains/errors";
import { Injectable } from "@angular/core";

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