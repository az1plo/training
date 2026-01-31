import { UserError } from "./user.error";

export interface UserDto {
  id: string;
  email: string;
  age: number;
}

export type UserResult = 
    | { kind: 'success'; user: UserDto }
    | { kind: 'error'; reason: UserError };