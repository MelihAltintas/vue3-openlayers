<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import PrintDialog, { type Options } from "ol-ext/control/PrintDialog";

import { saveAs } from "file-saver";
import { jsPDF as jsPDFClass } from "jspdf";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";

const props = withDefaults(defineProps<Options>(), {});

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);

const { control } = useControl(PrintDialog, properties, attrs);

// @ts-ignore
control.value.on(["print", "error"], (e: any) => {
  // Print success
  // @ts-ignore
  if (e.image) {
    // @ts-ignore
    if (e.pdf) {
      // Export pdf using the print info
      const pdf = new jsPDFClass({
        orientation: e.print.orientation,
        // @ts-ignore
        unit: e.print.unit,
        // @ts-ignore
        format: e.print.size,
      });
      // @ts-ignore
      pdf.addImage(
        e.image,
        "JPEG",
        e.print.position[0],
        e.print.position[0],
        e.print.imageWidth,
        e.print.imageHeight
      );
      // @ts-ignore
      pdf.save(e.print.legend ? "legend.pdf" : "map.pdf");
    } else {
      // Save image as file
      // @ts-ignore
      e.canvas.toBlob(
        (blob: Blob) => {
          // @ts-ignore
          const name =
            (e.print.legend ? "legend." : "map.") +
            e.imageType.replace("image/", "");
          saveAs(blob, name);
          // @ts-ignore
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
