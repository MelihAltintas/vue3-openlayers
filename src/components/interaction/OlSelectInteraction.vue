<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, inject, watch, onMounted, onUnmounted, computed } from "vue";
import Select from "ol/interaction/Select";
import Style from "ol/style/Style";
import type Collection from "ol/Collection";
import type { Condition } from "ol/events/condition";
import type Feature from "ol/Feature";
import type Geometry from "ol/geom/Geometry";
import type Map from "ol/Map";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    multi?: boolean;
    condition?: Condition;
    filter?: () => boolean;
    features?: Collection<Feature<Geometry>>;
    hitTolerance?: number;
    removeCondition?: Condition;
  }>(),
  {
    multi: false,
    hitTolerance: 0,
  },
);

const map = inject<Map>("map");
const properties = usePropsAsObjectProperties(props);

const select = computed(() => {
  return new Select({
    ...properties,
    style: new Style(),
  });
});

useOpenLayersEvents(select, ["select"]);

watch(select, (newVal, oldVal) => {
  map?.removeInteraction(oldVal);
  map?.addInteraction(newVal);

  map?.changed();
});

onMounted(() => {
  map?.addInteraction(select.value);
});

onUnmounted(() => {
  map?.removeInteraction(select.value);
});

provide("stylable", select);

defineExpose({
  select,
});
</script>
