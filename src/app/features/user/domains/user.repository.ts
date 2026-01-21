import { Observable } from "rxjs";
import { User } from "./user.model";

export abstract class UserRepository {
    abstract getCurrentUser(): Observable<User>;
}