<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import VideoRecorder, { type Options } from "ol-ext/control/VideoRecorder";
import { saveAs } from "file-saver";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { ObjectEvent } from "ol/Object";
import type { CommonEvents } from "@/composables";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options & { downloadName?: string }>(), {
  downloadName: "mapVideo.mp4",
});
type Emits = CommonEvents & {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  (e: "start", ...args: any): void;
  (e: "stop", ...args: any): void;
  (e: "pause", ...args: any): void;
  (e: "result", ...args: any): void;
  /* eslint-enable @typescript-eslint/no-explicit-any */
};
defineEmits<Emits>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);
const { control } = useControl(VideoRecorder, properties, attrs, [
  "start",
  "stop",
  "pause",
  "resume",
]);

control.value.on(
  // @ts-expect-error because of wrong typings
  "stop",
  (event: ObjectEvent & { videoURL: string }) => {
    if (props.downloadName) {
      saveAs(event.videoURL, props.downloadName);
    }
  },
);

defineExpose({
  control,
});
</script>
