import { of, firstValueFrom } from 'rxjs';
import { setUserContext } from '../set-user-context.pipe';
import { User } from '../../../domain/user.model';

describe('setUserContext', () => {
  it('sets user context and passes value through', async () => {
    const userContext = {
      set: vi.fn(),
      clear: vi.fn(),
    };

    const user: User = {
      id: '1',
      email: 'test@example.com',
      name: 'John',
      age: 20,
      sex: 'Male',
    };

    const result = await firstValueFrom(
      of(user).pipe(setUserContext(userContext))
    );

    expect(userContext.set).toHaveBeenCalledWith({
      id: '1',
      email: 'test@example.com',
    });

    expect(result).toBe(user);
  });
});
