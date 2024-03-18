import { expect, Locator, Page } from "@playwright/test";

export class MapPage {
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;

  constructor(readonly page: Page) {}

  async goto(route: string) {
    await this.page.goto(route);
  }

  async waitUntilReady(...selectors: string[]) {
    await this.page.waitForLoadState();
    await this.page.waitForSelector("canvas");
    for (let index = 0; index < selectors.length; index++) {
      await this.page.waitForSelector(selectors[index]);
    }
  }

  async waitUntilCanvasLoaded() {
    await this.page.waitForLoadState("networkidle");
  }

  async waitMs(timeout: number) {
    await this.page.waitForTimeout(timeout);
  }

  async zoomIn(count = 1) {
    for (let index = 0; index < count; index++) {
      await this.page.locator(".ol-zoom-in").click();
    }
  }

  async checkCanvasScreenshot(n = 0) {
    await expect(this.page.locator("canvas").nth(n)).toHaveScreenshot({
      timeout: 3000,
    });
  }
}
