<template lang="">
<slot></slot>
</template>

<script>
import {
    inject,
    watch,
    onMounted,
    onUnmounted,
    computed
} from 'vue'

import Snap from 'ol/interaction/Snap';
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
    name: 'ol-interaction-snap',
    setup(props) {

        const map = inject("map");
        const source = inject("vectorSource");

     
        const {
            properties
        } = usePropsAsObjectProperties(props);

        let snap = computed(() => {
           
            let s = new Snap({
                ...properties,
                source:source.value
            });
    
            return s;
        });

        watch(snap, (newVal, oldVal) => {

            map.removeInteraction(oldVal);
            map.addInteraction(newVal);
            map.changed()
        })

        onMounted(() => {
            map.addInteraction(snap.value);

        });

        onUnmounted(() => {
            map.removeInteraction(snap.value);
        });

    },
    props: {

        vertex: {
            type: Boolean,
            default: true
        },
        edge: {
            type: Boolean,
            default: true
        },
        pixelTolerance: {
            type: Number,
            default: 10
        },

    }

}
</script>

<style lang="">

</style>
