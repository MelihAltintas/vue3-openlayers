import { expect, Locator, Page } from "@playwright/test";

type Point = [x: number, y: number];

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

  async canvasBBox() {
    return await this.page.locator("canvas").boundingBox();
  }

  async drawPoint(point: Point, dblClick = false) {
    const boundingBox = await this.canvasBBox();

    if (boundingBox) {
      dblClick
        ? await this.page.locator("canvas").dblclick({
            position: {
              x: point[0],
              y: point[1],
            },
          })
        : await this.page.locator("canvas").click({
            position: {
              x: point[0],
              y: point[1],
            },
          });
    } else {
      console.error("Canvas element not found or not visible");
    }
  }

  async drawLineString(...points: Point[]) {
    for (let index = 0; index < points.length; index++) {
      const last = index === points.length - 1;
      await this.drawPoint(points[index], last);
    }
  }

  async drawLine(pointA: Point, pointB: Point) {
    await this.drawLineString(pointA, pointB);
  }

  async drawCircle(inner: Point, outer: Point) {
    await this.drawPoint(inner);
    await this.drawPoint(outer);
  }

  async drawOpenPolygon(...points: Point[]) {
    for (let index = 0; index < points.length; index++) {
      await this.drawPoint(points[index]);
    }
  }

  async drawPolygon(...points: Point[]) {
    await this.drawOpenPolygon(...points);
    await this.drawPoint(points[0], true);
  }
}
