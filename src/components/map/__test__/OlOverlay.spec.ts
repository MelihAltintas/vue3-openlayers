import { VueWrapper, mount } from "@vue/test-utils";
import OlOverlay from "../OlOverlay.vue";
import { beforeAll, describe, expect, it } from "vitest";
import "tests/_setup";
import { Map } from "ol";

const map = new Map({});

describe("OlOverlay.vue", () => {
  let overlayComponent: VueWrapper;
  beforeAll(() => {
    overlayComponent = mount(OlOverlay, {
      props: {
        position: [974749, 6749373],
        positioning: "center-left",
        provide: {
          "ol-options": { degbug: true },
          map,
        },
      },
      slots: {
        default: "this is not just any overlay",
      },
    });
  });
  it("sets the position on the overlay instance", () => {
    // @ts-ignore
    expect(overlayComponent.vm.overlay.getPosition()).toStrictEqual([
      974749, 6749373,
    ]);
  });
  it("sets the positioning on the overlay instance", () => {
    // @ts-ignore
    expect(overlayComponent.vm.overlay.getPositioning()).toBe("center-left");
  });
  it("emits position:changed when position is updated via instance method", () => {
    // @ts-ignore
    overlayComponent.vm.setPosition([12, 13]);
    expect(overlayComponent.emitted()).toHaveProperty("positionChanged");
    // @ts-ignore
    expect(overlayComponent.emitted("positionChanged")[0][0]).toStrictEqual([
      12, 13,
    ]);
  });
  it("emits position:changed when position property is updated", () => {
    // @ts-ignore
    overlayComponent.setProps({
      position: [12, 13],
    });

    expect(overlayComponent.emitted()).toHaveProperty("positionChanged");
    // @ts-ignore
    expect(overlayComponent.emitted("positionChanged")[0][0]).toStrictEqual([
      12, 13,
    ]);
  });
});
