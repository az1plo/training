import { UserDto } from '../user.result';
import { UserVm } from "../user.vm";

export function mapUserToVm(dto: UserDto): UserVm {
    return {
        id: dto.id,
        email: dto.email,
        age: dto.age,
    };
}