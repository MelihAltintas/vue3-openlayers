<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { inject, watch, onUnmounted, onMounted, computed } from "vue";

import FlowLine, { type Options } from "ol-ext/style/FlowLine";
import Draw from "ol/interaction/Draw";
import Modify from "ol/interaction/Modify";
import type Feature from "ol/Feature";
import Style from "ol/style/Style";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { StyleLike } from "ol/style/Style";
import type { FlatStyleLike } from "ol/style/flat";
import type { OverrideStyleFunction } from ".";
import type { Layer } from "ol/layer";
import type { Select } from "ol/interaction";

const props = withDefaults(
  defineProps<
    Options & {
      lineCap?: CanvasLineCap;
      overrideStyleFunction?: OverrideStyleFunction;
    }
  >(),
  {
    visible: true,
    lineCap: "butt",
    arrowSize: 16,
  },
);

const styledObj = inject<Ref<Draw | Modify | Select | Feature | Layer> | null>(
  "stylable",
  null,
);

const properties = usePropsAsObjectProperties(props);

const style = computed(() => new FlowLine(properties));

const setStyle = (val: StyleLike | FlatStyleLike) => {
  if (!styledObj?.value) {
    return;
  }
  if (styledObj.value instanceof Draw || styledObj?.value instanceof Modify) {
    styledObj.value.getOverlay().setStyle(val);
    styledObj.value.dispatchEvent("styleChanged");
    return;
  }
  try {
    // @ts-ignore
    styledObj.value.setStyle(val);
    styledObj.value.changed();
    styledObj?.value?.dispatchEvent("styleChanged");
  } catch (error) {
    if (styledObj?.value) {
      // @ts-ignore
      styledObj.value.style_ = val;
      // @ts-ignore
      styledObj.value.values_.style = val;
      styledObj.value?.changed();
      styledObj.value?.dispatchEvent("styleChanged");
    }
  }
};

const styleFunc = computed<StyleLike>(() => {
  return (feature, resolution) => {
    if (properties.overrideStyleFunction) {
      properties.overrideStyleFunction(feature, style.value, resolution);
    }
    return style.value;
  };
});

watch(properties, () => {
  setStyle(properties.overrideStyleFunction ? styleFunc.value : style.value);
});

onMounted(() => {
  setStyle(properties.overrideStyleFunction ? styleFunc.value : style.value);
});

onUnmounted(() => {
  setStyle(new Style());
});

defineExpose({
  style,
});
</script>
