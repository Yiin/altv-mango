import * as altClient from '@altv/client';
import { inject, injectable } from 'inversify';
import { ErrorMessage, LOGGER_SERVICE, type LoggerService } from '@altv-mango/core';

@injectable()
export class WebViewListService {
    @inject(LOGGER_SERVICE) private readonly $loggerService: LoggerService;

    private readonly $webViews: Map<string | number, altClient.WebView> = new Map();

    public set(id: string | number, webView: altClient.WebView) {
        this.$webViews.set(id, webView);
    }

    public get(id: string | number) {
        return this.$webViews.get(id);
    }

    public tryGet(id: string | number) {
        const webView = this.$webViews.get(id);
        if (!webView || !webView.valid) {
            this.$loggerService.error('An error occurred while trying to get a WebView.');
            throw new Error(ErrorMessage.WebViewNotFound);
        }
        return webView;
    }

    public delete(id: string | number) {
        const webView = this.$webViews.get(id);
        if (webView) {
            webView.destroy();
            this.$webViews.delete(id);
        }
    }
}
