<template lang="">
  <slot> </slot>
</template>

<script>
import { inject, watch, onMounted, onUnmounted, computed } from "vue";

import DragRotate from "ol/interaction/DragRotate";

import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

export default {
  name: "ol-interaction-dragrotate",

  setup(props) {
    const map = inject("map");

    const { properties } = usePropsAsObjectProperties(props);

    const dragrotate = computed(() => {
      const s = new DragRotate({
        ...properties,
      });

      return s;
    });

    watch(dragrotate, (newVal, oldVal) => {
      map.removeInteraction(oldVal);
      map.addInteraction(newVal);

      map.changed();
    });

    onMounted(() => {
      map.addInteraction(dragrotate.value);
    });

    onUnmounted(() => {
      map.removeInteraction(dragrotate.value);
    });
  },
  props: {
    condition: {
      type: Function,
    },
    duration: {
      type: Number,
      default: 250,
    },
  },
};
</script>

<style lang=""></style>
