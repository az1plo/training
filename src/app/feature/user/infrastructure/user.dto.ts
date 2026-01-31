export interface UserDto {
    id: string;
    full_name: string;
    sex: string;
    age: number;
    email: string;
}

export interface UpdateUserDto {
    user_email: string | null;
    user_age: number | null;
}