import { Injectable } from "@angular/core";
import { UserRepository } from "../domain/user.repository";
import { Observable, catchError, map, of } from "rxjs";
import { User } from "../domain/user.model";
import { UserDto } from "./user.dto";
import { mapDataToDto, mapUserDtoToUser } from "./user.mapper";
import { HttpClient } from "@angular/common/http";
import { UpdateUserData } from "../domain/update-user.data";
import { mapHttpError } from "../../../infrastructure/http/http-errors.mappers";

@Injectable()
export class UserApiRepository implements UserRepository {
    constructor(
        private readonly http: HttpClient 
    ) {}

    // updateUser(data: UpdateUserData): Observable<User> {
    //     const dto = mapDataToDto(data);

    //     return this.http
    //         .patch<UserDto>('/api/user/me', dto)
    //         .pipe(
    //             map(mapUserDtoToUser),
    //             catchError(mapHttpError)
    //         );
    // }

    // getCurrentUser(): Observable<User> {
    //     return this.http
    //         .get<UserDto>('/api/user/me')
    //         .pipe(
    //             map(mapUserDtoToUser),
    //             catchError(mapHttpError)
    //         );

    getCurrentUser(): Observable<User> {
        return of({
            id: 'user-1',
            name: "Ivan",
            sex: "Male",
            email: 'test@example.com',
            age: 28,
        });
    }

    updateUser(_: UpdateUserData): Observable<User> {
        return of({
            id: 'user-1',
            name: "Ivan",
            sex: "Female",
            email: 'updated@example.com',
            age: 30,
        });
    }
}