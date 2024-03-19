import { test } from "@playwright/test";

import { MapPage } from "./MapPage";

test.describe("ol-geom-circle", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/geometries/geomcircle/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-geom-line-string", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/geometries/geomlinestring/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-geom-point", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/geometries/geompoint/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-geom-polygon", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/geometries/geompolygon/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-geom-multi-line-string", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/geometries/geommultilinestring/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-geom-multi-point", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/geometries/geommultipoint/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-geom-multi-polygon", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/geometries/geommultipolygon/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});
