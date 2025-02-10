<template>
  <div
    ref="htmlContent"
    v-if="!srcImageUrl"
    style="display: flex; position: absolute; z-index: -1000"
  >
    <slot></slot>
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
import { Interaction } from "ol/interaction";

const props = defineProps<Options>();

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
  style?.value?.setImage(icon.value);
  if (styledObj?.value instanceof Interaction) {
    styledObj?.value?.changed();
  }
};

watch(properties, () => applyStyle());
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
  // @ts-expect-error force it
  style?.value?.setImage(null);
});
</script>
