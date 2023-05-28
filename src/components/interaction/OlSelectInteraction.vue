<template lang="">
  <slot> </slot>
</template>

<script setup>
import { provide, inject, watch, onMounted, onUnmounted, computed } from "vue";
import Select from "ol/interaction/Select";
import Style from "ol/style/Style";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import Collection from "ol/Collection";

const emit = defineEmits(["select"]);
const props = defineProps({
  multi: {
    type: Boolean,
    default: false,
  },
  condition: {
    type: Function,
  },
  filter: {
    type: Function,
  },
  features: {
    type: [Collection, Object],
  },
  hitTolerance: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0,
  },
  removeCondition: {
    type: Function,
  },
});

const map = inject("map");

const { properties } = usePropsAsObjectProperties(props);

const select = computed(() => {
  const s = new Select({
    ...properties,
    style: new Style(),
  });
  s.on("select", (event) => {
    emit("select", event);
  });

  return s;
});

watch(select, (newVal, oldVal) => {
  map.removeInteraction(oldVal);
  map.addInteraction(newVal);

  map.changed();
});

onMounted(() => {
  map.addInteraction(select.value);
});

onUnmounted(() => {
  map.removeInteraction(select.value);
});

provide("stylable", select);

defineExpose({
  select,
});
</script>

<style lang=""></style>
