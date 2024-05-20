import { describe, expect, it, vi } from "vitest";
import useLayer from "../useLayer";
import usePropsAsObjectProperties from "../usePropsAsObjectProperties";
import { defineComponent, shallowRef, ref, onUnmounted } from "vue";
import { shallowMount } from "@vue/test-utils";
import { Layer } from "ol/layer";
import OverviewMap from "ol/control/OverviewMap";
import { layersCommonDefaultProps } from "@components/layers/LayersCommonProps";

describe("useLayer", () => {
  function createComponent(
    setupProvide: ("layerGroup" | "overviewMap")[] = [],
  ) {
    // component setup
    const WrapperComponent = defineComponent({
      props: Object.keys(layersCommonDefaultProps),
      setup(props) {
        const properties = usePropsAsObjectProperties(
          props,
        ) as typeof layersCommonDefaultProps;
        const layer = shallowRef(new Layer(properties));
        useLayer(layer, properties);
        return { layer };
      },
    });

    // stubs
    const map = {
      addLayer: vi.fn(),
      removeLayer: vi.fn(),
    };
    const layerGroup = {
      getLayers: vi.fn().mockReturnValue({
        remove: vi.fn(),
        push: vi.fn(),
      }),
      setLayers: vi.fn(),
    };
    const overviewMap = ref({
      getOverviewMap: vi.fn().mockReturnValue({
        removeLayer: vi.fn(),
        addLayer: vi.fn(),
      }),
      changed: vi.fn(),
    });

    // provide/inject
    const provide: Record<string, unknown> = {
      map,
    };
    if (setupProvide.includes("layerGroup")) {
      provide.layerGroup = layerGroup;
    }
    if (setupProvide.includes("overviewMap")) {
      provide.overviewMap = overviewMap;
    }

    const wrapper = shallowMount(WrapperComponent, {
      props: layersCommonDefaultProps,
      global: {
        provide,
      },
    });

    return { wrapper, map, layerGroup, overviewMap };
  }

  describe("when layer is used by the map", () => {
    it("should should add a layer to the map", () => {
      const { map } = createComponent();
      expect(map.addLayer).toBeCalledTimes(1);
    });

    it("should remove a layer from the map", () => {
      const { wrapper, map } = createComponent();
      wrapper.unmount();
      expect(map.removeLayer).toBeCalledTimes(1);
    });

    it("should should not add a layer multiple times when properties are changing", async () => {
      const { wrapper, map } = createComponent();
      await wrapper.setProps({ opacity: 0.5 });
      expect(map.addLayer).toBeCalledTimes(1);
    });
  });

  describe("when layer is used within a LayerGroup", () => {
    it("should should add a layer to the LayerGroup", () => {
      const { map, layerGroup } = createComponent(["layerGroup"]);
      expect(map.addLayer).not.toHaveBeenCalled();
      expect(layerGroup.getLayers().push).toBeCalledTimes(1);
      expect(layerGroup.setLayers).toBeCalledTimes(1);
    });

    it("should remove a layer from a LayerGroup", () => {
      const { wrapper, map, layerGroup } = createComponent(["layerGroup"]);
      wrapper.unmount();
      expect(map.removeLayer).not.toHaveBeenCalled();
      expect(layerGroup.getLayers().remove).toBeCalledTimes(1);
    });

    it("should should not add a layer multiple times when properties are changing", async () => {
      const { wrapper, map, layerGroup } = createComponent(["layerGroup"]);
      expect(map.addLayer).not.toHaveBeenCalled();
      await wrapper.setProps({ opacity: 0.5 });
      expect(layerGroup.setLayers).toBeCalledTimes(1);
    });
  });

  describe("when layer is used within an OverviewMap", () => {
    it("should should add a layer to the LayerGroup", () => {
      const { map, overviewMap } = createComponent(["overviewMap"]);
      expect(map.addLayer).not.toHaveBeenCalled();
      expect(overviewMap.value.getOverviewMap().addLayer).toBeCalledTimes(1);
    });

    it("should remove a layer from a LayerGroup", () => {
      const { wrapper, map, overviewMap } = createComponent(["overviewMap"]);
      wrapper.unmount();
      expect(map.removeLayer).not.toHaveBeenCalled();
      expect(overviewMap.value.getOverviewMap().removeLayer).toBeCalledTimes(1);
    });

    it("should should not add a layer multiple times when properties are changing", async () => {
      const { wrapper, map, overviewMap } = createComponent(["overviewMap"]);
      expect(map.addLayer).not.toHaveBeenCalled();
      await wrapper.setProps({ opacity: 0.5 });
      expect(overviewMap.value.getOverviewMap().addLayer).toBeCalledTimes(1);
    });
  });
});
