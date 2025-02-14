<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {
  inject,
  onMounted,
  onUnmounted,
  provide,
  shallowRef,
  watch,
} from "vue";
import LayerGroup, { type Options } from "ol/layer/Group";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import {
  useOpenLayersEvents,
  type CommonEvents,
  type LayerChangeEvents,
  type LayerRenderEvents,
} from "@/composables/useOpenLayersEvents";
import type { ObjectEvent } from "ol/Object";
import type { LayerSwitcherOptions } from "@/types";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

type Props = Options & LayerSwitcherOptions;
const props = withDefaults(defineProps<Props>(), {
  opacity: 1,
  visible: true,
  properties: () => ({}),
});

type Emits = CommonEvents &
  LayerChangeEvents &
  LayerRenderEvents & {
    (e: "change:layers", event: ObjectEvent): void;
  };
defineEmits<Emits>();

const map = inject<Map>("map");
const properties = usePropsAsObjectProperties(props);

const layerGroup = shallowRef(new LayerGroup(properties as Options));
useOpenLayersEvents(layerGroup, [
  "change:extent",
  "change:layers",
  "change:maxResolution",
  "change:maxZoom",
  "change:minResolution",
  "change:minZoom",
  "change:opacity",
  "change:visible",
  "change:zIndex",
]);

const parentLayerGroup = inject<LayerGroup | null>("layerGroup", null);

watch(
  () => properties,
  (newValue) => {
    for (const key in newValue) {
      const keyInObj = key as keyof typeof newValue;
      if (newValue[keyInObj] !== undefined) {
        layerGroup.value.set(key, newValue[keyInObj]);
      }
    }
  },
  { deep: true },
);

onMounted(() => {
  map?.addLayer(layerGroup.value);
  if (parentLayerGroup) {
    const layerCollection = parentLayerGroup.getLayers();
    layerCollection.push(layerGroup.value);
    parentLayerGroup.setLayers(layerCollection);
  }
});

onUnmounted(() => {
  map?.removeLayer(layerGroup.value);
});

provide("layerGroup", layerGroup.value);

defineExpose({
  layerGroup: layerGroup.value,
});
</script>
