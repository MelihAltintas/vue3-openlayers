<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import PrintDialog, {
  type PrintingEvent,
  type Options,
} from "ol-ext/control/PrintDialog";
import { saveAs } from "file-saver";
import { jsPDF as jsPDFClass } from "jspdf";
import { useAttrs } from "vue";
import useControl from "@/composables/useControl";
import usePropsAsObjectProperties from "@/composables/usePropsAsObjectProperties";
import type { CommonEvents } from "@/composables";

const props = defineProps<Options>();
type Emits = CommonEvents & {
  (e: "printing", event: PrintingEvent): void;
};
defineEmits<Emits>();

const attrs = useAttrs();
const properties = usePropsAsObjectProperties(props);
const { control } = useControl(PrintDialog, properties, attrs, ["printing"]);

// @ts-expect-error because wrong/incomplete typings on control
// eslint-disable-next-line @typescript-eslint/no-explicit-any
control.value.on(["print", "error"], (e: any) => {
  // Print success
  if (e.image) {
    if (e.pdf) {
      // Export pdf using the print info
      const pdf = new jsPDFClass({
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
        e.print.imageHeight,
      );
      pdf.save(e.print.legend ? "legend.pdf" : "map.pdf");
    } else {
      // Save image as file
      e.canvas.toBlob(
        (blob: Blob) => {
          const name =
            (e.print.legend ? "legend." : "map.") +
            e.imageType.replace("image/", "");
          saveAs(blob, name);
        },
        e.imageType,
        e.quality,
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
