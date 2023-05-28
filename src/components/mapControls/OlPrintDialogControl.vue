<template lang="">
  <div v-if="false"></div>
</template>

<script setup>
import PrintDialog from "ol-ext/control/PrintDialog";

import useControl from "@/composables/useControl";

import FileSaver from "file-saver";
import { jsPDF } from "jspdf";
import { useAttrs } from "vue";

const props = defineProps({
  lang: {
    type: String,
  },
});

const attrs = useAttrs();
const { control } = useControl(PrintDialog, props, { attrs });

control.value.on(["print", "error"], function (e) {
  // Print success
  if (e.image) {
    if (e.pdf) {
      // Export pdf using the print info
      const pdf = new jsPDF({
        orientation: e.print.orientation,
        unit: e.print.unit,
        format: e.print.size,
      });
      pdf.addImage(
        e.image,
        "JPEG",
        e.print.position[0],
        e.print.position[0],
        e.print.imageWidth,
        e.print.imageHeight
      );
      pdf.save(e.print.legend ? "legend.pdf" : "map.pdf");
    } else {
      // Save image as file
      e.canvas.toBlob(
        function (blob) {
          const name =
            (e.print.legend ? "legend." : "map.") +
            e.imageType.replace("image/", "");
          FileSaver.saveAs(blob, name);
        },
        e.imageType,
        e.quality
      );
    }
  } else {
    console.warn("No canvas to export");
  }
});

defineExpose({
  control,
});
</script>

<style lang=""></style>
