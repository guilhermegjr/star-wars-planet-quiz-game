import { AppPage } from './app.po';
import { browser, logging, by, element, ExpectedConditions, $ } from 'protractor';

describe('Star Wars Planet Quiz Game', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should have a header, container and a footer', async () => {
		page.navigateTo();
		expect(page.hasHeaderContentAndFooter()).toBeTruthy();
	});

	it('should present the planet info', async () => {
		await element(by.css('sw-button')).click();

		const until = ExpectedConditions;

		const planetInfo = element(by.css('sw-planet-info'));
		browser.wait(
			until.visibilityOf(planetInfo),
			5000,
			'Planet Info taking too long to appear in the DOM'
		);

		expect(await planetInfo.isPresent()).toBeTruthy();
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser
			.manage()
			.logs()
			.get(logging.Type.BROWSER);
		expect(logs).not.toContain(
			jasmine.objectContaining({
				level: logging.Level.SEVERE,
			} as logging.Entry)
		);
	});
});
