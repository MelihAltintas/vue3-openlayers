<template lang="">
<slot>

</slot>
</template>

<script>
import {
   // provide,
    inject,
    watch,
    onMounted,
    onUnmounted,
    computed
} from 'vue'

import Modify from 'ol/interaction/Modify';
//import Style from 'ol/style/Style';
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
    name: 'ol-interaction-modify',
    emits: ["modifystart", "modifyend"],
    setup(props, {
        emit
    }) {

        const map = inject("map");
        const source = inject("vectorSource");

        const {
            properties
        } = usePropsAsObjectProperties(props);

        let modify = computed(() => {

            let s = new Modify({
                ...properties,
              //  style: new Style(),
                source: source.value
            });

            s.on('modifystart', (event) => {
                emit('modifystart', event)
            })

            s.on('modifyend', (event) => {
                emit('modifyend', event)
            })

            return s;
        });

        watch(modify, (newVal, oldVal) => {

            map.removeInteraction(oldVal);
            map.addInteraction(newVal);
            map.changed()
        })

        onMounted(() => {
            map.addInteraction(modify.value);

        });

        onUnmounted(() => {
            map.removeInteraction(modify.value);
        });

       // provide('stylable', modify)
    },
    props: {

        condition: {
            type: Function,

        },
        deleteCondition: {
            type: Function,

        },
        insertVertexCondition: {
            type: Function,

        },
        pixelTolerance: {
            type: Number,
            default: 10

        },
        wrapX: {
            type: Boolean,
            default: false

        },
        hitDetection: {
            type: Boolean,
        },

    }

}
</script>

<style lang="">

</style>
