<template lang="">
<div v-if="false">

</div>
</template>

<script>
import PrintDialog from 'ol-ext/control/PrintDialog'

import useControl from '@/composables/useControl'

import { saveAs } from 'file-saver';
import { jsPDF } from "jspdf";

export default {
    name: 'ol-control-printdialog',
    setup(props) {
        const {
            control
        } = useControl(PrintDialog, props);

        control.value.on(['print','error'], function (e) {

      
            // Print success
            if (e.image) {
            
                if (e.pdf) {
                    // Export pdf using the print info
                    var pdf = new jsPDF({
                        orientation: e.print.orientation,
                        unit: e.print.unit,
                        format: e.print.size
                    });
                    pdf.addImage(e.image, 'JPEG', e.print.position[0], e.print.position[0], e.print.imageWidth, e.print.imageHeight);
                    pdf.save(e.print.legend ? 'legend.pdf' : 'map.pdf');
                } else {
                    // Save image as file
                    e.canvas.toBlob(function (blob) {
                        var name = (e.print.legend ? 'legend.' : 'map.') + e.imageType.replace('image/', '');
                        saveAs(blob, name);
                    }, e.imageType, e.quality);
                }
            } else {
                console.warn('No canvas to export');
            }
        });

      


        return {
            control
        }

    },
    props: {
        lang: {
            type: String,
        }
    }
}
</script>

<style lang="">

</style>
