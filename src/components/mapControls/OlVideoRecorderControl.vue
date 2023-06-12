<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import VideoRecorder from "ol-ext/control/VideoRecorder";
import { saveAs } from "file-saver";
import { toRefs, useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(
  defineProps<{
    className?: string;
    framerate?: number;
    videoBitsPerSecond?: number;
    videoTarget?: string;
    downloadName?: string;
  }>(),
  {
    framerate: 30,
    videoBitsPerSecond: 5000000,
    downloadName: "mapVideo.mp4",
  }
);

const emit = defineEmits(["start", "stop"]);

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);
const { control } = useControl(VideoRecorder, properties, attrs);

// @ts-ignore
control.value.on("start", (event) => {
  emit("start", event);
});

// @ts-ignore
control.value.on("stop", (event) => {
  emit("stop", event);
  // @ts-ignore
  saveAs(event.videoURL, props.downloadName);
});

defineExpose({
  control,
});
</script>
