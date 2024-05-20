import { inject, onUnmounted, ref, watch, type Ref } from "vue";

import type { Map } from "ol";
import type LayerGroup from "ol/layer/Group";
import type { Layer } from "ol/layer";
import type usePropsAsObjectProperties from "./usePropsAsObjectProperties";
import type { OverviewMap } from "ol/control";
import type { layersCommonDefaultProps } from "@/components/layers/LayersCommonProps";

export default function useLayerInMapOrLayerGroup(
  layer: Ref<Layer>,
  properties: typeof layersCommonDefaultProps &
    ReturnType<typeof usePropsAsObjectProperties>,
) {
  const map = inject<Map>("map");
  const layerGroup = inject<LayerGroup | null>("layerGroup", null);
  const overviewMap = inject<Ref<OverviewMap | null> | null>(
    "overviewMap",
    null,
  );

  const layerAdded = ref(false);

  function updateLayers() {
    // layer.value.setProperties(properties);

    for (const key in properties) {
      const keyInObj = key as keyof typeof properties;
      if (properties[keyInObj]) {
        layer.value.set(key, properties[keyInObj]);
      }
    }

    layer.value.setOpacity(properties.opacity);
    layer.value.setVisible(properties.visible);

    if (!layerAdded.value) {
      if (layerGroup) {
        const layerCollection = layerGroup.getLayers();
        layerCollection.push(layer.value);
        layerGroup.setLayers(layerCollection);
      } else if (overviewMap?.value) {
        overviewMap.value?.getOverviewMap().addLayer(layer.value);
      } else {
        map?.addLayer(layer.value);
      }
      layerAdded.value = true;
    }
  }

  function removeLayer() {
    if (layerGroup) {
      layerGroup.getLayers().remove(layer.value);
    } else if (overviewMap?.value) {
      overviewMap.value?.getOverviewMap().removeLayer(layer.value);
      overviewMap.value?.changed();
    } else {
      map?.removeLayer(layer.value);
    }
    layerAdded.value = false;
  }

  onUnmounted(removeLayer);

  watch(() => properties, updateLayers, { deep: true, immediate: true });

  if (overviewMap?.value) {
    watch(overviewMap, () => {
      removeLayer();
      updateLayers();
    });
  }

  return {};
}
