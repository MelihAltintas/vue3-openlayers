<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import VideoRecorder from "ol-ext/control/VideoRecorder";
import FileSaver from "file-saver";

import useControl from "@/composables/useControl";
import { toRefs, useAttrs } from "vue";

const props = defineProps({
  className: {
    type: String,
  },
  framerate: {
    type: Number,
    default: 30,
  },
  videoBitsPerSecond: {
    type: Number,
    default: 5000000,
  },
  videoTarget: {
    type: [String, Object],
  },
  downloadName: {
    type: String,
    default: "mapVideo.mp4",
  },
});
const emit = defineEmits(["start", "stop"]);
const attrs = useAttrs();

const { control } = useControl(VideoRecorder, props, { attrs });

const { downloadName } = toRefs(props);

control.value.on("start", (event) => {
  emit("start", event);
});

control.value.on("stop", (event) => {
  emit("stop", event);
  FileSaver.saveAs(event.videoURL, downloadName.value);
});

defineExpose({
  control,
});
</script>

<style lang=""></style>
