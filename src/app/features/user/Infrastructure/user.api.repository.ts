import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {User} from '../domains/user.model';
import {mapUserDtoToUser} from './user.mapper';
import {UserDto} from './user.dto';
import {UserRepository} from '../domains/user.repository';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserApiRepository implements UserRepository {

  constructor(private readonly http: HttpClient) {
  }

  getCurrentUser(): Observable<User> {
    return this.http
      .get<UserDto>('/api/user/me')
      .pipe(
        map(dto => mapUserDtoToUser(dto))
      );
  }
}
