import { mount } from "@vue/test-utils";
import OlMap from "../OlMap.vue";
import { describe, expect, it } from "vitest";
import { FullScreen, Zoom } from "ol/control";

describe("OlMap.vue", () => {
  function createComponent() {
    return mount(OlMap, {
      props: {
        controls: [new FullScreen({}), new Zoom({})],
      },
      global: {
        provide: {
          "ol-options": { debug: false },
        },
      },
    });
  }
  it("passes props to the map constructor", () => {
    const olViewportWrapepr = createComponent().find(".ol-viewport");
    expect(olViewportWrapepr.exists());
  });
  it("renders viewport DOM element", () => {
    createComponent().find(".ol-viewport").exists();
  });
});
