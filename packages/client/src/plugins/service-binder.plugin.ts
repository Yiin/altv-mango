import { Container, inject, injectable } from 'inversify';
import { GLOBAL_APP_CONTAINER, INTERNAL_APP_CONTAINER, type MangoPlugin } from '@altv-mango/core/app';
import { EVENT_SERVICE, LOGGER_SERVICE, RPC_SERVICE } from '@altv-mango/core';
import { ClientEventService, ClientLoggerService, ClientRPCService, ClientWebViewService, WebViewListService } from '../services';
import { WEBVIEW_LIST_SERVICE, WEBVIEW_SERVICE } from '../constants';

@injectable()
export class ServiceBinderPlugin implements MangoPlugin {
    @inject(INTERNAL_APP_CONTAINER) private readonly internalAppContainer: Container;
    @inject(GLOBAL_APP_CONTAINER) private readonly globalAppContainer: Container;

    public beforeCreate() {
        const time = Date.now();

        this.globalAppContainer.bind(LOGGER_SERVICE).to(ClientLoggerService).inSingletonScope();
        this.globalAppContainer.bind(EVENT_SERVICE).to(ClientEventService).inSingletonScope();
        this.globalAppContainer.bind(RPC_SERVICE).to(ClientRPCService).inSingletonScope();
        this.globalAppContainer.bind(WEBVIEW_SERVICE).to(ClientWebViewService).inSingletonScope();
        this.globalAppContainer.bind(WEBVIEW_LIST_SERVICE).to(WebViewListService).inSingletonScope();

        this.internalAppContainer.bind(LOGGER_SERVICE).toConstantValue(this.globalAppContainer.get(LOGGER_SERVICE));
        this.internalAppContainer.bind(EVENT_SERVICE).toConstantValue(this.globalAppContainer.get(EVENT_SERVICE));
        this.internalAppContainer.bind(RPC_SERVICE).toConstantValue(this.globalAppContainer.get(RPC_SERVICE));
        this.internalAppContainer.bind(WEBVIEW_SERVICE).toConstantValue(this.globalAppContainer.get(WEBVIEW_SERVICE));
        this.internalAppContainer.bind(WEBVIEW_LIST_SERVICE).toConstantValue(this.globalAppContainer.get(WEBVIEW_LIST_SERVICE));

        const loggerService = this.globalAppContainer.get<ClientLoggerService>(LOGGER_SERVICE);
        loggerService.log(`~lw~Internal services binded ~lk~(${Date.now() - time}ms)`);
    }
}
