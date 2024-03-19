import { test } from "@playwright/test";

import { MapPage } from "./MapPage";

test.describe("ol-style", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/styles/style/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-style-circle", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/styles/circle/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-style-fill", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/styles/fill/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-style-flowline", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/styles/flowline/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-style-icon", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/styles/icon/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-style-stroke", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/styles/stroke/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-style-text", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/styles/text/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});
