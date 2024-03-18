import { test } from "@playwright/test";

import { MapPage } from "./MapPage";

test.describe("ol-layer-group", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/layers/group/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-animated-clusterlayer", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/layers/animatedclusterlayer/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-heatmap-layer", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/layers/heatmaplayer/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-image-layer", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/layers/imagelayer/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-tile-layer", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/layers/tilelayer/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-vector-image-layer", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/layers/vectorimagelayer/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-vector-layer", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/layers/vectorlayer/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-vector-tile-layer", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/layers/vectortilelayer/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-webgl-vector-layer", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/layers/webglvectorlayer/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-webgl-tile-layer", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    map.goto("/componentsguide/layers/webgltilelayer/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});
