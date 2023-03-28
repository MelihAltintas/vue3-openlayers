<template lang="">
  <slot> </slot>
</template>

<script>
import { inject, watch, onMounted, onUnmounted, computed } from "vue";

import DragRotateAndZoom from "ol/interaction/DragRotateAndZoom";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

export default {
  name: "ol-interaction-dragrotatezoom",

  setup(props) {
    const map = inject("map");

    const { properties } = usePropsAsObjectProperties(props);

    let dragrotatezoom = computed(() => {
      let s = new DragRotateAndZoom({
        ...properties,
      });

      return s;
    });

    watch(dragrotatezoom, (newVal, oldVal) => {
      map.removeInteraction(oldVal);
      map.addInteraction(newVal);

      map.changed();
    });

    onMounted(() => {
      map.addInteraction(dragrotatezoom.value);
    });

    onUnmounted(() => {
      map.removeInteraction(dragrotatezoom.value);
    });
  },
  props: {
    condition: {
      type: Function,
    },
    duration: {
      type: Number,
      default: 400,
    },
  },
};
</script>

<style lang=""></style>
