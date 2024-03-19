import { test, expect } from "@playwright/test";

import { MapPage } from "./MapPage";

test.describe("ol-control-bar", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/controlbar/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await expect(page.locator(".ol-bar")).toHaveScreenshot({
      timeout: 3000,
    });
  });
});

test.describe("ol-attribution-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/attribution/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-context-menu-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/contextmenu/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await page.locator("canvas").click({ button: "right" });
    await map.page.waitForSelector(".ol-ctx-menu-container");
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-fullscreen-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/fullscreen/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-layerswitcher-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/layerswitcher/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.page.locator(".ol-layerswitcher").click();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-layerswitcherimage-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/layerswitcherimage/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.page.locator(".ol-layerswitcher-image").click();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-mouseposition-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/mouseposition/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();

    // Get the bounding box of the canvas
    const boundingBox = await map.canvasBBox();
    if (boundingBox) {
      const newX = boundingBox.x + 10;
      const newY = boundingBox.y + 20;
      await page.mouse.move(newX, newY);
    } else {
      console.error("Canvas element not found or not visible");
    }
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-overviewmap-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/overviewmap/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-printdialog-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/printdialog/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-rotate-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/rotate/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-search-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/search/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.page.locator(".ol-search button").click();
    await map.page.locator(".ol-search input").pressSequentially("B");
    await map.waitMs(100); // search is debounced
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-scaleline-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/scaleline/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-swipe-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/swipe/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-toggle-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/toggle/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-videorecorder-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/videorecorder/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });

  test("should record and download", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/videorecorder/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    const downloadPromise = page.waitForEvent("download");
    await map.page.getByTitle("start video").click();
    await map.waitMs(100);
    await map.page.getByTitle("pause").click();
    await map.waitMs(100);
    await map.page.getByTitle("resume").click();
    await map.waitMs(100);
    await map.page.getByTitle("stop").click();
    const download = await downloadPromise;
    await download.saveAs("tests/downloads/" + download.suggestedFilename());
  });
});

test.describe("ol-zone-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/zone/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.page.locator(".ol-control.ol-mapzone").nth(1).click();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-zoom-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/zoom/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-zoomslider-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/zoomslider/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});

test.describe("ol-zoomtoextent-control", () => {
  test("should render", async ({ page }) => {
    const map = new MapPage(page);
    await map.goto("/componentsguide/mapcontrols/zoomtoextent/");
    await map.waitUntilReady();
    await map.waitUntilCanvasLoaded();
    await map.checkCanvasScreenshot();
  });
});
