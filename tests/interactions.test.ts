import { test } from "@playwright/test";

import { MapPage } from "./MapPage";

test.describe("ol-interaction-clusterselect", () => {
  test("should expand cluster points on cluster click", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/interactions/clusterselect/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.drawPoint([70, 253]);
    await map.waitMs(300);
    await map.checkCanvasScreenshot();
  });

  test("should zoom and expand cluster points on cluster double click", async ({
    page,
  }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/interactions/clusterselect/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.drawPoint([70, 253], true);
    await map.waitMs(300);
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-interaction-draw", () => {
  test("should draw a Point Feature", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/interactions/draw/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.page.getByLabel("Geometry Type").selectOption("Point");
    await map.drawPoint([150, 40]);
    await map.drawPoint([120, 80]);
    await map.drawPoint([200, 110]);
    await map.checkCanvasScreenshot();
  });

  test("should draw a LineString Feature", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/interactions/draw/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.page.getByLabel("Geometry Type").selectOption("LineString");
    await map.drawLineString([120, 80], [200, 110], [300, 180], [150, 20]);
    await map.checkCanvasScreenshot();
  });

  test("should draw a Polygon Feature", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/interactions/draw/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.page.getByLabel("Geometry Type").selectOption("LineString");
    await map.drawPolygon([120, 80], [200, 110], [300, 180], [200, 20]);
    await map.checkCanvasScreenshot();
  });

  test("should draw a Circle Feature", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/interactions/draw/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.page.getByLabel("Geometry Type").selectOption("Circle");
    await map.drawCircle([200, 200], [180, 180]);
    await map.checkCanvasScreenshot();
  });
});
