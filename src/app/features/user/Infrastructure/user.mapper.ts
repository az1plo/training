import {UserDto} from './user.dto';
import {isSex, Sex, User} from '../domains/user.model';
import {InvalidSexError} from '../domains/errors';

export function mapUserDtoToUser(dto: UserDto): User {
  return {
    id: dto.id,
    name: dto.full_name,
    age: dto.age,
    sex: dto.sex == null ? null : mapSex(dto.sex),
    email: dto.email,
  };

  function mapSex(value: unknown): Sex {
    if (typeof value !== 'string' || !isSex(value)) {
      throw new InvalidSexError(value);
    }
    return value;
  }
}
