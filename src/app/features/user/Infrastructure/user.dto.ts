export interface UserDto {
  id: string;
  full_name: string;
  age: number;
  sex: string;
  email: string;
}

export interface UpdateUserDto {
  user_email: string | null;
  user_age: number | null;
}
