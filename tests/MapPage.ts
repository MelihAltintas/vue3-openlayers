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
    await this.page.waitForSelector(".ol-map-fully-loaded");
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
    await expect(this.page.locator(".ol-viewport").nth(n)).toHaveScreenshot({
      timeout: 8000,
    });
  }

  async canvasBBox() {
    return await this.page.locator(".ol-viewport").boundingBox();
  }

  async dragOnCanvas(
    start: Point,
    end: Point,
    modifiers?: ("Alt" | "Control" | "Meta" | "Shift")[],
  ) {
    const boundingBox = await this.canvasBBox();

    if (boundingBox) {
      if (modifiers) {
        for (let index = 0; index < modifiers.length; index++) {
          await this.page.keyboard.down(modifiers[index]);
        }
      }
      await this.page.mouse.move(
        boundingBox.x + start[0],
        boundingBox.y + start[1],
      );
      await this.page.mouse.down();

      await this.page.mouse.move(
        boundingBox.x + end[0],
        boundingBox.y + end[1],
        {
          steps: 10, // important to make dragging on canvas work, it must be above or equal to 1.1
        },
      );
      if (modifiers) {
        for (let index = 0; index < modifiers.length; index++) {
          await this.page.keyboard.up(modifiers[index]);
        }
      }
      await this.page.mouse.up();
    } else {
      console.error("Canvas element not found or not visible");
    }
  }

  async hoverOnCanvas(point: Point) {
    const boundingBox = await this.canvasBBox();

    if (boundingBox) {
      await this.page.hover(".ol-viewport", {
        position: {
          x: point[0],
          y: point[1],
        },
      });
    } else {
      console.error("Canvas element not found or not visible");
    }
  }

  async clickOnCanvas(
    point: Point,
    modifiers?: ("Alt" | "Control" | "Meta" | "Shift")[],
    dblClick = false,
  ) {
    dblClick
      ? await this.page.locator(".ol-viewport").dblclick({
          position: {
            x: point[0],
            y: point[1],
          },
          modifiers,
          force: true,
        })
      : await this.page.locator(".ol-viewport").click({
          position: {
            x: point[0],
            y: point[1],
          },
          modifiers,
          force: true,
        });
  }

  async drawPoint(point: Point, dblClick = false) {
    this.clickOnCanvas(point, undefined, dblClick);
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
