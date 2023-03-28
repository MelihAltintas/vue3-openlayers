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
  //computed
} from "vue";

import Draw from "ol/interaction/Draw";
//import Style from 'ol/style/Style';

export default {
  name: "ol-interaction-draw",
  emits: ["drawstart", "drawend"],
  setup(props, { emit }) {
    const map = inject("map");
    const source = inject("vectorSource");

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

    let createDraw = () => {
      let draw = new Draw({
        source: source.value,
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
      });

      draw.on("drawstart", (event) => {
        emit("drawstart", event);
      });

      draw.on("drawend", (event) => {
        emit("drawend", event);
      });

      return draw;
    };

    let draw = createDraw();

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
        map.removeInteraction(draw);
        draw = createDraw();
        map.addInteraction(draw);
        draw.changed();

        map.changed();
      }
    );

    onMounted(() => {
      map.addInteraction(draw);
    });

    onUnmounted(() => {
      map.removeInteraction(draw);
    });

    provide("stylable", draw);
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    clickTolerance: {
      type: Number,
      default: 6,
    },
    dragVertexDelay: {
      type: Number,
      default: 500,
    },
    snapTolerance: {
      type: Number,
      default: 12,
    },
    stopClick: {
      type: Boolean,
      default: false,
    },
    maxPoints: {
      type: Number,
    },
    minPoints: {
      type: Number,
    },
    finishCondition: {
      type: Function,
    },
    geometryFunction: {
      type: Function,
    },
    geometryName: {
      type: String,
    },
    condition: {
      type: Function,
    },
    freehand: {
      type: Boolean,
      default: false,
    },
    freehandCondition: {
      type: Function,
    },
    wrapX: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang=""></style>
