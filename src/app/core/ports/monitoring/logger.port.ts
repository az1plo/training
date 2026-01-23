export interface LoggerPort {
  warn(message: string, context?: Record<string, unknown>): void
  error(message: string, context?: Record<string, unknown>): void
  info(message: string, context?: Record<string, unknown>): void
}
