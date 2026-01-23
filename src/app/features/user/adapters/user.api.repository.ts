import { Injectable } from "@angular/core";
import { UserRepository } from "../domains/user.repository";
import { Observable, map } from "rxjs";
import { User } from "../domains/user.model";
import { UserDto } from "./user.dto";
import { mapUserDtoToUser } from "./user.mapper";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserApiRepository implements UserRepository {
    constructor(
        private readonly http: HttpClient 
    ) {}

    getCurrentUser(): Observable<User> {
        return this.http
            .get<UserDto>('/api/user/me')
            .pipe(
                map(dto => mapUserDtoToUser(dto))
            );
    }
}