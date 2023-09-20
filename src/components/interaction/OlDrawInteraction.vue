<template>
  <slot></slot>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { provide, inject, watch, onMounted, onUnmounted, toRefs } from "vue";
import Draw from "ol/interaction/Draw";
import type Map from "ol/Map";
import type VectorSource from "ol/source/Vector";
import type { Type as GeometryType } from "ol/geom/Geometry";
import type { GeometryFunction } from "ol/interaction/Draw";
import type { Condition } from "ol/events/condition";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    type: GeometryType;
    clickTolerance?: number;
    dragVertexDelay?: number;
    snapTolerance?: number;
    stopClick?: boolean;
    maxPoints?: number;
    minPoints?: number;
    finishCondition?: () => boolean;
    geometryFunction?: GeometryFunction;
    geometryName?: string;
    condition?: () => boolean;
    freehand?: boolean;
    freehandCondition?: Condition;
    wrapX?: boolean;
  }>(),
  {
    clickTolerance: 6,
    dragVertexDelay: 500,
    snapTolerance: 12,
    stopClick: false,
    freehand: false,
    wrapX: false,
  },
);

const map = inject<Map>("map");
const source = inject<Ref<VectorSource> | null>("vectorSource");

const {
  type,
  clickTolerance,
  dragVertexDelay,
  snapTolerance,
  stopClick,
  maxPoints,
  minPoints,
  finishCondition,
  geometryFunction,
  geometryName,
  condition,
  freehand,
  freehandCondition,
  wrapX,
} = toRefs(props);

function createDraw() {
  return new Draw({
    source: source?.value,
    type: type.value,
    clickTolerance: clickTolerance.value,
    dragVertexDelay: dragVertexDelay.value,
    snapTolerance: snapTolerance.value,
    stopClick: stopClick.value,
    maxPoints: maxPoints?.value,
    minPoints: minPoints?.value,
    finishCondition: finishCondition?.value,
    geometryFunction: geometryFunction?.value,
    geometryName: geometryName?.value,
    condition: condition?.value,
    freehand: freehand.value,
    freehandCondition: freehandCondition?.value,
    wrapX: wrapX.value,
  });
}

let draw = createDraw();

useOpenLayersEvents(draw, ["drawstart", "drawend"]);

watch(
  [
    type,
    clickTolerance,
    dragVertexDelay,
    snapTolerance,
    stopClick,
    maxPoints,
    minPoints,
    finishCondition,
    geometryFunction,
    geometryName,
    condition,
    freehand,
    freehandCondition,
    wrapX,
  ],
  () => {
    draw.abortDrawing();
    map?.removeInteraction(draw);
    draw = createDraw();
    map?.addInteraction(draw);
    map?.changed();
  },
);

onMounted(() => {
  map?.addInteraction(draw);
});

onUnmounted(() => {
  map?.removeInteraction(draw);
});

provide("stylable", draw);

defineExpose({
  draw,
});
</script>
