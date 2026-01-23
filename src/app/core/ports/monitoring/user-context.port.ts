export interface UserContextPort {
    set(context: { id: string; email?: string }): void;
    clear(): void;
}