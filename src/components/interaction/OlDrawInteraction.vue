<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { computed, type Ref } from "vue";
import { provide, inject, watch, onMounted, onUnmounted, toRefs } from "vue";
import Draw from "ol/interaction/Draw";
import type Map from "ol/Map";
import type VectorSource from "ol/source/Vector";
import type { Type as GeometryType } from "ol/geom/Geometry";
import type { GeometryFunction } from "ol/interaction/Draw";
import type { Condition } from "ol/events/condition";

const emit = defineEmits(["drawstart", "drawend"]);

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
  }
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

const draw = computed(() => {
  const d = new Draw({
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

  d.on("drawstart", (event) => {
    emit("drawstart", event);
  });

  d.on("drawend", (event) => {
    emit("drawend", event);
  });

  return d;
});

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
    map?.removeInteraction(draw.value);
    map?.addInteraction(draw.value);
    draw.value.changed();

    map?.changed();
  }
);

onMounted(() => {
  map?.addInteraction(draw.value);
});

onUnmounted(() => {
  map?.removeInteraction(draw.value);
});

provide("stylable", draw);
</script>
