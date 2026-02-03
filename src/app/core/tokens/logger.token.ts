import { InjectionToken } from "@angular/core";
import { LoggerPort } from "../ports/monitoring/logger.port";

export const LOGGER = new InjectionToken<LoggerPort>('LOGGER');
