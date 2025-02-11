<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import Swipe, { type Options } from "ol-ext/control/Swipe";
import { useAttrs } from "vue";
import type { Layer } from "ol/layer";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { CommonEvents } from "@/composables";

// TODO: what's the point of layerList?
type Props = Options & {
  layerList?: Layer[];
};
const props = withDefaults(defineProps<Props>(), {
  className: "ol-swipe",
});
type Emits = CommonEvents & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e: "moving", ...args: any[]): void;
};
defineEmits<Emits>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);

const { control } = useControl(Swipe, properties, attrs, ["moving"]);

props.layerList?.forEach((layer, index) => {
  control.value.addLayer(layer, index === 1);
});
defineExpose({
  control,
});
</script>
