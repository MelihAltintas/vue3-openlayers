import { describe, expect, it, vi } from "vitest";
import { defineComponent, shallowRef } from "vue";
import { shallowMount } from "@vue/test-utils";
import { Layer } from "ol/layer";
import useSource from "../useSource";
import { Source } from "ol/source";
import BaseEvent from "ol/events/Event";

describe("useSource", () => {
  function createComponent() {
    const l = new Layer({});
    const setSourceSpy = vi.spyOn(l, "setSource");
    const layer = shallowRef(l);

    // component setup
    const WrapperComponent = defineComponent({
      template: "<slot/>",
      setup(props) {
        const { source } = useSource(Source, layer, props);
        return { source, layer };
      },
    });

    const wrapper = shallowMount(WrapperComponent, {
      global: {
        provide: {
          "ol-options": { debug: false },
        },
      },
    });

    return { wrapper, setSourceSpy };
  }

  it("should add the source to a layer immediately", () => {
    const { setSourceSpy } = createComponent();
    expect(setSourceSpy).toBeCalledTimes(2);
    expect(setSourceSpy).toHaveBeenLastCalledWith(expect.any(Source));
  });

  it("should add the source to a layer immediately", () => {
    const { setSourceSpy, wrapper } = createComponent();
    wrapper.unmount();
    expect(setSourceSpy).toBeCalledTimes(3);
    expect(setSourceSpy).toHaveBeenLastCalledWith(null);
  });

  it("should pass through events", () => {
    const { wrapper } = createComponent();
    const listenerMockImpl = vi.fn();
    wrapper.vm.source.on("change", listenerMockImpl);
    wrapper.vm.source.changed();
    expect(listenerMockImpl).toHaveBeenCalledTimes(1);
    const changeEvents = wrapper.emitted().change[0] as unknown[];
    expect(changeEvents[0]).toBeInstanceOf(BaseEvent);
  });
});
