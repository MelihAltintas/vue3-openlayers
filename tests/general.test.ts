import { test } from "@playwright/test";

import { MapPage } from "./MapPage";

test.describe("ol-map", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/map/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-view", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/view/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-overlay", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/overlay/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-geolocation", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/geolocation/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });

  test("should adjust the geolaction", async ({ page, context }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/geolocation/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();

    const coords = { latitude: 48, longitude: 4 };
    context.setGeolocation(coords);
    await map.waitUntilCanvasLoaded();

    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-projection", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/projection/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});
