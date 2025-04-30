import { inject, onUnmounted, ref, type Ref, shallowRef, watch } from "vue";

import type { Map } from "ol";
import type LayerGroup from "ol/layer/Group";
import type { Layer } from "ol/layer";
import usePropsAsObjectProperties from "./usePropsAsObjectProperties";
import { LAYER_EVENTS, useOpenLayersEvents } from "./useOpenLayersEvents";
import type { OverviewMap } from "ol/control";

/**
 * Create a Layer
 * @param LayerClass The Class of the source which should be created
 * @param props The properties which should be passed to the LayerClass
 * @param eventsToHandle The event names list for events that should be passed from the layer through the component
 */
export default function useLayer<T extends Layer>(
  // eslint-disable-next-line
  LayerClass: new (...args: any[]) => T,
  props: ConstructorParameters<typeof LayerClass>[0],
  eventsToHandle: string[] = [],
) {
  const properties = usePropsAsObjectProperties(props);

  const layer = shallowRef(new LayerClass(properties));

  useOpenLayersEvents(layer, [...LAYER_EVENTS, ...eventsToHandle]);

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
      if (properties[keyInObj] !== undefined) {
        layer.value.set(key, properties[keyInObj]);
      }
    }

    layer.value.setOpacity(properties.opacity ?? 1);
    layer.value.setVisible(properties.visible ?? true);

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

  return {
    layer,
    map,
  };
}
