import { of, firstValueFrom } from 'rxjs';
import { filter, take, skip } from 'rxjs/operators';
import { UserProfilePageFacade } from '../profile-page.facade';
import { UserFacadePort } from '../../application/ports/user-facade.port';
import { UserError } from '../../application/user.error';

function successUser(email: string, age: number) {
  return {
    kind: 'success' as const,
    user: {
      id: '1',
      email,
      age,
    },
  };
}

function errorResult(reason: UserError) {
  return {
    kind: 'error' as const,
    reason,
  };
}

describe('UserProfilePageFacade', () => {
  let facade: UserProfilePageFacade;
  let userFacadeMock: UserFacadePort;

  beforeEach(() => {
    userFacadeMock = {
      getCurrentUser: () => of(successUser('test@example.com', 20)),
      updateUser: () => of(successUser('updated@example.com', 21)),
    };

    facade = new UserProfilePageFacade(userFacadeMock);
  });

  it('emits loading initially', async () => {
    const vm = await firstValueFrom(
      facade.vm$.pipe(take(1))
    );

    expect(vm.loading).toBe(true);
    expect(vm.user).toBeNull();
    expect(vm.error).toBeNull();
  });

  it('loads user successfully', async () => {
    const vm = await firstValueFrom(
      facade.vm$.pipe(
        filter(vm => !vm.loading),
        take(1)
      )
    );

    expect(vm.user?.email).toBe('test@example.com');
    expect(vm.user?.age).toBe(20);
    expect(vm.error).toBeNull();
  });

  it('updates user after submit', async () => {
    const promise = firstValueFrom(
      facade.vm$.pipe(
        skip(2),
        take(1)
      )
    );

    facade.submit({
      email: 'updated@example.com',
      age: '21',
      agreedToTerms: true,
    });

    const vm = await promise;

    expect(vm.user?.email).toBe('updated@example.com');
    expect(vm.user?.age).toBe(21);
    expect(vm.error).toBeNull();
  });

  it('emits error when update fails (user preserved)', async () => {
    userFacadeMock.updateUser = () =>
      of(
        errorResult({
          type: 'TERMS_NOT_ACCEPTED',
        })
      );

    facade = new UserProfilePageFacade(userFacadeMock);

    const promise = firstValueFrom(
      facade.vm$.pipe(
        skip(2),
        take(1)
      )
    );

    facade.submit({
      email: 'test@example.com',
      age: '20',
      agreedToTerms: false,
    });

    const vm = await promise;

    expect(vm.user?.email).toBe('test@example.com');
    expect(vm.error?.type).toBe('TERMS_NOT_ACCEPTED');
  });
});
