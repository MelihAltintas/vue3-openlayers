<template lang="">
  <div v-if="false"></div>
</template>

<script>
import { Attribution } from "ol/control";
import useControl from "@/composables/useControl";

export default {
  name: "ol-attribution-control",
  setup(props, context) {
    const { control } = useControl(Attribution, props, context);
    return {
      control,
    };
  },
  props: {
    className: {
      type: String,
      default: "ol-attribution",
    },
    target: {
      type: HTMLElement,
    },
    collapsible: {
      type: Boolean,
    },
    collapsed: {
      type: Boolean,
      default: true,
    },
    tipLabel: {
      type: String,
      default: "Attributions",
    },

    label: {
      type: String,
      default: "i",
    },
    expandClassName: {
      type: String,
      default: "ol-attribution-expand",
    },
    collapseLabel: {
      type: String,
      default: "»",
    },
    collapseClassName: {
      type: String,
      default: "ol-attribution-collapse",
    },
    render: {
      type: Function,
    },
  },
};
</script>

<style lang=""></style>
