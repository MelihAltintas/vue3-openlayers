<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import VideoRecorder, { type Options } from "ol-ext/control/VideoRecorder";
import { saveAs } from "file-saver";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import { useOpenLayersEvents } from "@/composables/useOpenLayersEvents";
import type { ObjectEvent } from "ol/Object";

// prevent warnings caused by event pass-through via useOpenLayersEvents composable
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Options & { downloadName?: string }>(), {
  downloadName: "mapVideo.mp4",
});

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);
const { control } = useControl(VideoRecorder, properties, attrs);

useOpenLayersEvents(control, ["start", "stop", "pause", "resume"]);

control.value.on(
  // @ts-ignore
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
