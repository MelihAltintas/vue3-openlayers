<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { provide, inject, watch, onUnmounted, onMounted, computed } from "vue";

import Style from "ol/style/Style";
import Draw from "ol/interaction/Draw";
import Modify from "ol/interaction/Modify";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    zIndex?: number;
    overrideStyleFunction?: (...args: unknown[]) => unknown;
  }>(),
  {}
);

const styledObj = inject<Ref<Draw | Modify | Style> | undefined>(
  "stylable",
  undefined
);
const { properties } = usePropsAsObjectProperties(props);

const style = computed(() => new Style(properties));

const setStyle = (val: Style | null) => {
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
      // @ts-ignore
      st.changed();
      // @ts-ignore
      st.dispatchEvent("styleChanged");
    } catch (error) {
      // @ts-ignore
      st.style_ = val;
      // @ts-ignore
      st.values_.style = val;
      // @ts-ignore
      st.changed();
      // @ts-ignore
      st.dispatchEvent("styleChanged");
    }
  }
};

const styleFunc = computed(() => {
  // @ts-ignore
  return (feature) => {
    if (properties.overrideStyleFunction != null) {
      properties.overrideStyleFunction(feature, style.value);
    }
    return style.value;
  };
});

watch(properties, () => {
  if (!properties.overrideStyleFunction === null) {
    setStyle(style.value);
  } else {
    // @ts-ignore
    setStyle(styleFunc.value);
  }
});

onMounted(() => {
  if (!properties.overrideStyleFunction) {
    setStyle(style.value);
  } else {
    // @ts-ignore
    setStyle(styleFunc.value);
  }
});

onUnmounted(() => {
  setStyle(null);
});

provide("style", style);
provide("styledObj", styledObj);

defineExpose({
  style,
});
</script>
