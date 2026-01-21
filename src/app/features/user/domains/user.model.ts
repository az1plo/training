export const SEX_VALUES = ["Male", "Female"] as const;
export type Sex = typeof SEX_VALUES[number];

export interface User {
  id: string;
  name: string;
  age: number;
  sex: Sex | null;
}

export function isSex(value: unknown): value is Sex {
  return typeof value === 'string' && SEX_VALUES.includes(value as Sex);
}