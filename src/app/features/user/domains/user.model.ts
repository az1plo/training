export const SEX_VALUES = ["Male", "Female"] as const;
export type Sex = typeof SEX_VALUES[number];

export interface User {
  id: string;
  name: string;
  age: number;
  sex: Sex | null;
  email: string;
}


export function isSex(value: string): value is Sex {
  return (SEX_VALUES as readonly string[]).includes(value);
}
