<template>
  <div ref="iconRef"><slot /></div>
</template>
<script setup lang="ts">
import Icon, { type Options } from "ol/style/Icon";
import type { Ref } from "vue";
import {
  inject,
  watch,
  onMounted,
  onUnmounted,
  computed,
  ref,
  useSlots,
} from "vue";
import type Style from "ol/style/Style";
import type Draw from "ol/interaction/Draw";
import type Modify from "ol/interaction/Modify";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import html2canvas from "html2canvas";

const props = withDefaults(defineProps<Options>(), {
  anchorOrigin: "top-left",
  anchorXUnits: "fraction",
  offset: () => [0, 0],
  displacement: () => [0, 0],
  offsetOrigin: "top-left",
  opacity: 1,
  rotateWithView: false,
  rotation: 0,
});

const slots = useSlots();

const style = inject<Ref<Style | null> | null>("style", null);
const styledObj = inject<Ref<Draw | Modify | Style | null> | null>(
  "styledObj",
  null,
);

const { properties } = usePropsAsObjectProperties(props);

const iconRef = ref<HTMLElement | null>(null);
const dataUrl = ref<string>();

const icon = computed(() => {
  const ic = new Icon({ ...properties, src: dataUrl.value || properties.src });
  ic.load();
  return ic;
});

const applyStyle = () => {
  // @ts-ignore
  style?.value?.setImage(null);
  style?.value?.setImage(icon.value);
  // @ts-ignore
  styledObj?.value?.changed();
};

watch(properties, () => {
  applyStyle();
});

watch(
  () => style?.value,
  () => {
    applyStyle();
  },
);

onMounted(() => {
  if (slots.default) {
    captureContent();
  } else {
    style?.value?.setImage(icon.value);
  }
});

onUnmounted(() => {
  // @ts-ignore
  style?.value?.setImage(null);
});

async function captureContent() {
  const container = iconRef.value;
  if (slots.default && container) {
    try {
      console.log(container);
      const firstChild = container.firstChild;
      const canvas = await html2canvas(container, {
        // backgroundColor: "transparent",
        // removeContainer: true,
        // foreignObjectRendering: true,
      });

      dataUrl.value = canvas.toDataURL();
      console.log(dataUrl.value);
      style?.value?.setImage(icon.value);
    } catch (error) {
      console.error("Error capturing content:", error);
    }
  }
}
</script>
