import { test } from "@playwright/test";

import { MapPage } from "./MapPage";

test.describe.skip("ol-source-bingmaps", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/bing/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-cluster", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/cluster/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-geo-tiff", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/geotiff/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-image-static", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/imagestatic/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-image-wms", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/imagewms/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-osm", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/osm/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-stadia-maps", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/stadiamaps/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-tianditu", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/tianditu/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-tile-arcgis-rest", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/arcgisrest/");
    await map.waitUntilReady();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-tile-debug", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/tiledebug/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-tile-json", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/tilejson/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-tile-wms", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/tilewms/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-vector", () => {
  test("should render (using ol-feature)", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/vector/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });

  test("should render (using url)", async ({ page }) => {
    const map = new MapPage(page, 1);
    await map.goto("/componentsguide/sources/vector/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });

  test("should render (using features property)", async ({ page }) => {
    const map = new MapPage(page, 2);
    await map.goto("/componentsguide/sources/vector/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });

  test("should render (using TopoJSON format)", async ({ page }) => {
    const map = new MapPage(page, 3);
    await map.goto("/componentsguide/sources/vector/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-vector-tile", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/vectortile/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-wmts", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/wmts/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-source-xyz", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/sources/xyz/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});
