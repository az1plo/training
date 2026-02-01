import { of, firstValueFrom } from 'rxjs';
import { UpdateUserUseCase } from '../update-user.use-case';
import { UserRepository } from '../../../domain/user.repository';
import { UserContextPort } from '../../../../../core/ports/monitoring/user-context.port';
import { LoggerPort } from '../../../../../core/ports/monitoring/logger.port';
import { User } from '../../../domain/user.model';

describe('UpdateUserUseCase (application)', () => {
  let useCase: UpdateUserUseCase;
  let repository: UserRepository;
  let userContext: UserContextPort;
  let logger: LoggerPort;

  beforeEach(() => {
    repository = {
      getCurrentUser: vi.fn(),
      updateUser: vi.fn(),
    };

    userContext = {
      set: vi.fn(),
      clear: vi.fn(),
    };

    logger = {
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
    };

    useCase = new UpdateUserUseCase(
      repository,
      userContext,
      logger
    );
  });

  it('updates user and sets user context', async () => {
    const user: User = {
      id: '1',
      email: 'test@test.com',
      name: 'John',
      age: 20,
      sex: 'Male',
    };

    repository.updateUser = vi.fn(() => of(user));

    const result = await firstValueFrom(
      useCase.execute({
        emailInput: 'test@gmail.com',
        ageInput: '20',
        agreedToTerms: true,
      })
    );

    expect(repository.updateUser).toHaveBeenCalled();
    expect(result.kind).toBe('success');

    if (result.kind === 'success') {
      expect(userContext.set).toHaveBeenCalledWith(user);
    }
  });

  it('maps domain error to application error', async () => {
    repository.updateUser = vi.fn(() => {
      throw { type: 'TERMS_NOT_ACCEPTED' };
    });

    const result = await firstValueFrom(
      useCase.execute({
        emailInput: 'test2@gmail.com',
        ageInput: '28',
        agreedToTerms: false,
      })
    );

    expect(result.kind).toBe('error');

    if (result.kind === 'error') {
      expect(result.reason.type).toBe('TERMS_NOT_ACCEPTED');
    }
  });
});
