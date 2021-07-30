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

import Draw from 'ol/interaction/Draw';
//import Style from 'ol/style/Style';
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
    name: 'ol-interaction-draw',
    emits: ["drawstart", "drawend"],
    setup(props, {
        emit
    }) {

        const map = inject("map");
        const source = inject("vectorSource");

        const {
            properties
        } = usePropsAsObjectProperties(props);

        let draw = computed(() => {

            let s = new Draw({
                ...properties,
                //style: new Style(),
                source: source.value
            });

            s.on('drawstart', (event) => {
                emit('drawstart', event)
            })

            s.on('drawend', (event) => {
                emit('drawend', event)
            })

            return s;
        });

        watch(draw, (newVal, oldVal) => {

            map.removeInteraction(oldVal);
            map.addInteraction(newVal);
            map.changed()
        })

        onMounted(() => {
            map.addInteraction(draw.value);

        });

        onUnmounted(() => {
            map.removeInteraction(draw.value);
        });

        //   provide('stylable', draw)
    },
    props: {

        type: {
            type: String,
            required: true
        },
        clickTolerance: {
            type: Number,
            default: 6
        },
        dragVertexDelay: {
            type: Number,
            default: 500
        },
        snapTolerance: {
            type: Number,
            default: 12
        },
        stopClick: {
            type: Boolean,
            default: false
        },
        maxPoints: {
            type: Number,
        },
        minPoints: {
            type: Number,

        },
        finishCondition: {
            type: Function,

        },
        geometryFunction: {
            type: Function,

        },
        geometryName: {
            type: String,

        },
        condition: {
            type: Function,

        },
        freehand: {
            type: Boolean,
            default: false

        },
        freehandCondition: {
            type: Function,

        },
        wrapX: {
            type: Boolean,
            default: false

        }
    }

}
</script>

<style lang="">

</style>
