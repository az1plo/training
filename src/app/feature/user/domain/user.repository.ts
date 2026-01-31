import { Observable } from "rxjs";
import { User } from "./user.model";
import { UpdateUserData } from "./update-user.data";

export interface UserRepository {
    getCurrentUser(): Observable<User>;
    updateUser(data: UpdateUserData): Observable<User>;
}