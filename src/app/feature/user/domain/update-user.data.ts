/**
 * Domain-level description of user state change.
 * This is NOT a command and NOT a DTO.
 */
export interface UpdateUserData {
  email: string | null;
  age: number | null;
}
