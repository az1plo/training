import { Inject, Injectable } from '@angular/core';
import {
  Subject,
  merge,
  scan,
  startWith,
  map,
  switchMap,
  shareReplay,
} from 'rxjs';
import { mapUserFormVmToCommand } from '../application/mappers/user-form.mapper';
import { UserFormVm } from '../application/vms/user-form.vm';
import { UserProfilePageVm } from '../application/vms/user-profile-page.vm';
import { UserFacadePort } from '../application/ports/user-facade.port';
import { USER_FACADE } from '../application/tokens/user-facade.token';

@Injectable()
export class UserProfilePageFacade {
  readonly vm$;

  private readonly submit$ = new Subject<UserFormVm>();

  constructor(
    @Inject(USER_FACADE)
    private readonly userFacade: UserFacadePort
  ) {
    const load$ = this.userFacade.getCurrentUser();

    const update$ = this.submit$.pipe(
      map(mapUserFormVmToCommand),
      switchMap(cmd => this.userFacade.updateUser(cmd))
    );

    this.vm$ = merge(load$, update$).pipe(
      scan(
        (state: UserProfilePageVm, result) => {
          if (result.kind === 'success') {
            return {
              loading: false,
              user: result.user,
              error: null,
            };
          }

          return {
            loading: false,
            user: state.user,
            error: result.reason,
          };
        },
        {
          loading: true,
          user: null,
          error: null,
        } satisfies UserProfilePageVm
      ),
      startWith({
        loading: true,
        user: null,
        error: null,
      }),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  submit(form: UserFormVm) {
    this.submit$.next(form);
  }
}
