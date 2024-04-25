import { mount } from "@vue/test-utils";
import OlOverlay from "../OlOverlay.vue";
import { describe, expect, it } from "vitest";
import { Map } from "ol";
import type { ObjectEvent } from "ol/Object";

const map = new Map({});

describe("OlOverlay.vue", () => {
  function createComponent() {
    return mount(OlOverlay, {
      props: {
        position: [974749, 6749373],
        positioning: "center-left",
      },
      global: {
        provide: {
          "ol-options": { debug: true },
          map,
        },
      },
      slots: {
        default: "this is not just any overlay",
      },
    });
  }

  it("sets the position on the overlay instance", () => {
    expect(createComponent().vm.overlay.getPosition()).toStrictEqual([
      974749, 6749373,
    ]);
  });
  it("sets the positioning on the overlay instance", () => {
    expect(createComponent().vm.overlay.getPositioning()).toBe("center-left");
  });
  it("emits position:changed when position is updated via instance method", () => {
    const component = createComponent();
    component.vm.setPosition([12, 13]);
    expect(component.emitted()).toHaveProperty("change:position");
    const emitted = component.emitted("change:position");
    const event = emitted ? (emitted[0][0] as ObjectEvent) : undefined;
    expect(event?.target.get("position")).toStrictEqual([12, 13]);
  });
  it("emits position:changed when position property is updated", async () => {
    const component = createComponent();
    await component.setProps({
      position: [12, 13],
    });

    expect(component.emitted()).toHaveProperty("change:position");
    const emitted = component.emitted("change:position");
    const event = emitted ? (emitted[0][0] as ObjectEvent) : undefined;
    expect(event?.target.get("position")).toStrictEqual([12, 13]);
  });
});
