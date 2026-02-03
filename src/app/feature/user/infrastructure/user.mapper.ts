import { InvalidSexError } from "../domain/errors";
import { UpdateUserData } from "../domain/update-user.data";
import { isSex, Sex, User } from "../domain/user.model";
import { UserDto, UpdateUserDto } from "./user.dto";

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

export function mapDataToDto(data: UpdateUserData): UpdateUserDto {
  return {
    user_email: data.email,
    user_age: data.age == null ? null : Number(data.age),
  };
}