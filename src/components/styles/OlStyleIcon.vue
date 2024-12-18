<template>
  <div
    ref="htmlContent"
    v-if="!srcImageUrl"
    style="display: flex; position: absolute; z-index: -1000"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import Icon, { type Options } from "ol/style/Icon";
import type { Ref } from "vue";
import {
  inject,
  watch,
  onMounted,
  onUnmounted,
  ref,
  useSlots,
  computed,
} from "vue";
import type Style from "ol/style/Style";
import type Draw from "ol/interaction/Draw";
import type Modify from "ol/interaction/Modify";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import domtoimage from "dom-to-image-more";

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

const htmlContent = ref<HTMLElement>();
const srcImageUrl = ref<string>("");

const style = inject<Ref<Style | null> | null>("style", null);
const styledObj = inject<Ref<Draw | Modify | Style | null> | null>(
  "styledObj",
  null,
);

const properties = usePropsAsObjectProperties(props);

const icon = computed(() => {
  const ic = new Icon({
    ...properties,
    src: properties.src || srcImageUrl.value,
  });
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
  () => style,
  () => applyStyle(),
);

onMounted(async () => {
  if (slots.default && htmlContent.value) {
    srcImageUrl.value = await domtoimage.toSvg(htmlContent.value, {
      width: htmlContent.value.offsetWidth,
      height: htmlContent.value.offsetHeight,
      copyDefaultStyles: true,
    });
  }
  applyStyle();
});

onUnmounted(() => {
  // @ts-ignore
  style?.value?.setImage(null);
});
</script>
