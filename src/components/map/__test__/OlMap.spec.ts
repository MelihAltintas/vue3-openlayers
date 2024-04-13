import { VueWrapper, mount } from "@vue/test-utils";
import OlMap from "../OlMap.vue";
import { beforeAll, describe, expect, it } from "vitest";
import { FullScreen, Zoom } from "ol/control";

describe("OlMap.vue", () => {
  let mapComponent: VueWrapper;
  beforeAll(() => {
    mapComponent = mount(OlMap, {
      props: {
        controls: [new FullScreen({}), new Zoom({})],
      },
      global: {
        provide: {
          "ol-options": { debug: true },
        },
      },
    });
  });
  it("passes props to the map constructor", () => {
    const olViewportWrapepr = mapComponent.find(".ol-viewport");
    expect(olViewportWrapepr.exists());
  });
  it("renders viewport DOM element", () => {
    mapComponent.find(".ol-viewport").exists();
  });
});
