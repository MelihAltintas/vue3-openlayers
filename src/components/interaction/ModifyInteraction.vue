<template lang="">
  <slot> </slot>
</template>

<script>
import {
  provide,
  inject,
  watch,
  onMounted,
  onUnmounted,
  toRefs,
  // computed
} from "vue";

import Collection from "ol/Collection";
import Modify from "ol/interaction/Modify";
//import Style from 'ol/style/Style';
//import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
  name: "ol-interaction-modify",
  emits: ["modifystart", "modifyend"],
  setup(props, { emit }) {
    const map = inject("map");
    const source = inject("vectorSource");

    const {
      features,
      condition,
      deleteCondition,
      insertVertexCondition,
      pixelTolerance,
      wrapX,
      hitDetection,
    } = toRefs(props);

    let createModify = () => {
      let modify = new Modify({
        source: source.value,
        features: features.value,
        condition: condition.value,
        deleteCondition: deleteCondition.value,
        insertVertexCondition: insertVertexCondition.value,
        pixelTolerance: pixelTolerance.value,
        wrapX: wrapX.value,
        hitDetection: hitDetection.value,
      });

      modify.on("modifystart", (event) => {
        emit("modifystart", event);
      });

      modify.on("modifyend", (event) => {
        emit("modifyend", event);
      });

      return modify;
    };

    let modify = createModify();

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
        map.removeInteraction(modify);
        modify = createModify();
        map.addInteraction(modify);
        modify.changed();

        map.changed();
      }
    );

    onMounted(() => {
      map.addInteraction(modify);
    });

    onUnmounted(() => {
      map.removeInteraction(modify);
    });

    provide("stylable", modify);
  },
  props: {
    condition: {
      type: Function,
    },
    deleteCondition: {
      type: Function,
    },
    insertVertexCondition: {
      type: Function,
    },
    pixelTolerance: {
      type: Number,
      default: 10,
    },
    wrapX: {
      type: Boolean,
      default: false,
    },
    hitDetection: {
      type: Boolean,
    },
    features: {
      type: [Collection, Object],
    },
  },
};
</script>

<style lang=""></style>
