<template lang="">
  <div v-if="false"></div>
</template>

<script>
import { MousePosition } from "ol/control";
import useControl from "@/composables/useControl";

export default {
  name: "ol-mouseposition-control",
  setup(props, context) {
    const { control } = useControl(MousePosition, props, context);
    return {
      control,
    };
  },
  props: {
    className: {
      type: String,
      default: "ol-mouse-position",
    },
    coordinateFormat: {
      type: [String, Function],
    },
    projection: {
      type: String,
    },
    render: {
      type: Function,
    },
    target: {
      type: HTMLElement,
    },
    placeholder: {
      type: String,
    },
  },
};
</script>

<style lang=""></style>
