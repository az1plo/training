import { Provider } from "@angular/core";

export function provideMonitoring(
    loggerProvider: Provider,
    userContextProvider: Provider,
): Provider[] {
    return [
        loggerProvider,
        userContextProvider,
    ];
}