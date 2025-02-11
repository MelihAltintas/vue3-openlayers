<template>
  <slot></slot>
</template>

<script setup lang="ts">
import {
  inject,
  onMounted,
  onUnmounted,
  provide,
  type Ref,
  shallowRef,
  toRefs,
  watch,
} from "vue";
import Draw, { type DrawEvent, type Options } from "ol/interaction/Draw";
import type Map from "ol/Map";
import type VectorSource from "ol/source/Vector";
import {
  type CommonEvents,
  useOpenLayersEvents,
} from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = defineProps<Options>();
defineEmits<
  CommonEvents & {
    (e: "drawstart", event: DrawEvent): void;
    (e: "drawend", event: DrawEvent): void;
  }
>();

const map = inject<Map>("map");
const vectorSource = inject<Ref<VectorSource> | null>("vectorSource", null);

const {
  source,
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
  features,
  geometryLayout,
  trace,
  traceSource,
} = toRefs(props);

function createDraw() {
  return new Draw({
    source: source.value || vectorSource?.value,
    type: type.value,
    clickTolerance: clickTolerance.value,
    dragVertexDelay: dragVertexDelay.value,
    snapTolerance: snapTolerance.value,
    stopClick: stopClick.value,
    maxPoints: maxPoints.value,
    minPoints: minPoints.value,
    finishCondition: finishCondition.value,
    geometryFunction: geometryFunction.value,
    geometryName: geometryName.value,
    condition: condition.value,
    freehand: freehand.value,
    freehandCondition: freehandCondition.value,
    wrapX: wrapX.value,
    features: features.value,
    geometryLayout: geometryLayout.value,
    trace: trace.value,
    traceSource: traceSource.value,
  });
}

const draw = shallowRef(createDraw());

const { updateOpenLayersEventHandlers } = useOpenLayersEvents(draw, [
  "drawstart",
  "drawend",
]);

watch(
  [
    source,
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
    features,
    geometryLayout,
    trace,
    traceSource,
  ],
  () => {
    draw.value.abortDrawing();
    map?.removeInteraction(draw.value);
    draw.value = createDraw();
    updateOpenLayersEventHandlers();
    map?.addInteraction(draw.value);
    map?.changed();
  },
);

onMounted(() => {
  map?.addInteraction(draw.value);
});

onUnmounted(() => {
  map?.removeInteraction(draw.value);
});

provide("stylable", draw);

defineExpose({
  draw: draw.value,
});
</script>
