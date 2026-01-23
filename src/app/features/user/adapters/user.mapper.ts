import { InvalidSexError } from "../domains/errors";
import { isSex, Sex, User } from "../domains/user.model";
import { UserDto } from "./user.dto";

export function mapUserDtoToUser(dto: UserDto): User {
    return {
        id: dto.id,
        name: dto.full_name,
        age: dto.age,
        email: dto.email,
        sex: dto.sex == null ? null : mapSex(dto.sex),
    }
}

export function mapSex(value: unknown): Sex {
  if (!isSex(value)) {
    throw new InvalidSexError(value);
  }
  return value;
}
