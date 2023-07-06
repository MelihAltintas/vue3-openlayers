<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { provide, inject, watch, onUnmounted, onMounted, computed } from "vue";

import Style, { type StyleLike } from "ol/style/Style";
import Draw from "ol/interaction/Draw";
import Modify from "ol/interaction/Modify";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type Feature from "ol/Feature";
import type { Layer } from "ol/layer";
import type { Select } from "ol/interaction";
import type { OverrideStyleFunction } from ".";

const props = withDefaults(
  defineProps<{
    zIndex?: number;
    overrideStyleFunction?: OverrideStyleFunction;
  }>(),
  {}
);

const styledObj = inject<
  Ref<Draw | Modify | Select | Feature | Layer> | undefined
>("stylable", undefined);
const { properties } = usePropsAsObjectProperties(props);

const style = computed(() => new Style(properties));

const setStyle = (val: StyleLike) => {
  const st = styledObj?.value;
  if (!st) {
    return;
  }
  if (st instanceof Draw || st instanceof Modify) {
    st.getOverlay().setStyle(val);
    st.changed();
    st.dispatchEvent("styleChanged");
  } else {
    try {
      // @ts-ignore
      st.setStyle(val);
      st.changed();
      st.dispatchEvent("styleChanged");
    } catch (error) {
      // @ts-ignore
      st.style_ = val;
      // @ts-ignore
      st.values_.style = val;
      st.changed();
      st.dispatchEvent("styleChanged");
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

watch(properties, () =>
  setStyle(properties.overrideStyleFunction ? styleFunc.value : style.value)
);

onMounted(() =>
  setStyle(properties.overrideStyleFunction ? styleFunc.value : style.value)
);

onUnmounted(() => {
  setStyle(new Style());
});

provide("style", style);
provide("styledObj", styledObj);

defineExpose({
  style,
});
</script>
