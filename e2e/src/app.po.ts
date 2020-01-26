import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo() {
		return browser.get(browser.baseUrl) as Promise<any>;
	}

	async hasHeaderContentAndFooter() {
		const header = await element(by.css('sw-header')).isPresent();
		const content = await element(by.css('.content')).isPresent();
		const footer = await element(by.css('sw-footer')).isPresent();

		return header && content && footer;
	}
}
