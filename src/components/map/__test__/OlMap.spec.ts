import { mount } from "@vue/test-utils";
import OlMap from "../OlMap.vue";
import { describe, expect, it } from "vitest";
import { defineComponent, inject, onUnmounted, ref } from "vue";
import { FullScreen, Zoom } from "ol/control";
import type MapType from "ol/Map";

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

  it("detaches the map target before child unmount hooks run", () => {
    const targetDuringChildUnmount = ref<unknown>(Symbol("unset"));
    const Child = defineComponent({
      setup() {
        const map = inject<MapType>("map");
        onUnmounted(() => {
          targetDuringChildUnmount.value = map?.getTarget();
        });
        return () => null;
      },
    });

    const Parent = defineComponent({
      components: { OlMap, Child },
      template: "<OlMap><Child /></OlMap>",
    });

    const wrapper = mount(Parent);
    wrapper.unmount();

    expect(targetDuringChildUnmount.value).toBeUndefined();
  });
});
