<template>
  <slot></slot>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import {
  inject,
  onMounted,
  onUnmounted,
  provide,
  ref,
  toRefs,
  watch,
} from "vue";
import type Collection from "ol/Collection";
import Modify from "ol/interaction/Modify";
import type Map from "ol/Map";
import type VectorSource from "ol/source/Vector";
import type Geometry from "ol/geom/Geometry";
import type Feature from "ol/Feature";
import type { Condition } from "ol/events/condition";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    condition?: Condition;
    deleteCondition?: Condition;
    insertVertexCondition?: Condition;
    pixelTolerance?: number;
    wrapX?: boolean;
    hitDetection?: boolean;
    features?: Collection<Feature<Geometry>>;
    source?: VectorSource;
  }>(),
  {
    pixelTolerance: 10,
    wrapX: false,
  },
);

const map = inject<Map>("map");
const vectorSource = inject<Ref<VectorSource> | null>("vectorSource", null);

const {
  source,
  features,
  condition,
  deleteCondition,
  insertVertexCondition,
  pixelTolerance,
  wrapX,
  hitDetection,
} = toRefs(props);

function createModify() {
  if (!source?.value || !features.value) {
    console.error(
      `[Vue3-OpenLayers Error] OlInteractionModify: Modify interactions needs either a either a source or features to work.
      Please provide either the props 'source' or 'feature' or use the component with an '<OlSourceVector>' component.`,
    );
  }
  return new Modify({
    source: source?.value || vectorSource?.value,
    features: features?.value,
    condition: condition?.value,
    deleteCondition: deleteCondition?.value,
    insertVertexCondition: insertVertexCondition?.value,
    pixelTolerance: pixelTolerance.value,
    wrapX: wrapX.value,
    hitDetection: hitDetection.value,
  });
}

let modify = createModify();

useOpenLayersEvents(modify, ["modifystart", "modifyend"]);

watch(
  [
    condition,
    deleteCondition,
    insertVertexCondition,
    pixelTolerance,
    wrapX,
    hitDetection,
  ],
  () => {
    modify.dispose();
    map?.removeInteraction(modify);
    modify = createModify();
    map?.addInteraction(modify);
    map?.changed();
  },
);

onMounted(() => {
  map?.addInteraction(modify);
});

onUnmounted(() => {
  map?.removeInteraction(modify);
});

provide("stylable", ref(modify));

defineExpose({
  modify,
});
</script>
