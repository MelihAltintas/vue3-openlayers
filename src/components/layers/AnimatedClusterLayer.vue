<template lang="">
<div>
    <slot></slot>
</div>
</template>

<script>
import {
    inject,
    provide,
    onUnmounted,
    onMounted,
    watch,
    computed
} from 'vue'
import {
    Cluster
} from 'ol/source';
import {
    easeOut
} from 'ol/easing'

import AnimatedCluster from "ol-ext/layer/AnimatedCluster"
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
    name: 'ol-animated-clusterlayer',
    setup(props) {

        const map = inject('map');

        const {
            properties
        } = usePropsAsObjectProperties(props);

        const vectorLayer = computed(() => {
            let ac = new AnimatedCluster({
                ...properties,
                source: new Cluster({
                    distance: properties.distance,
                    geometryFunction: (feature) => feature.getGeometry()
                })
            });

            return ac;
        });

        const source = computed(() => vectorLayer.value.getSource());

        watch(properties, () => {

            vectorLayer.value.setProperties(properties);
            vectorLayer.value.changed();

        });

        onMounted(() => {

            map.addLayer(vectorLayer.value);
            vectorLayer.value.changed();
            map.changed();
        });

        onUnmounted(() => {
            map.removeLayer(vectorLayer.value)
        });

        provide('vectorLayer', source);
        provide('stylable', vectorLayer);

        return {
            vectorLayer,
            map
        }
    },
    props: {
        animationDuration: {
            type: Number,
            default: 700
        },
        distance: {
            type: Number,
            default: 20
        },
        animationMethod: {
            type: Function,
            default: easeOut
        },
        updateWhileAnimating: {
            type: Boolean,
            default: false
        },
        updateWhileInteracting: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,

        },
        name: {
            type: String,

        },
        preview: {
            type: String,

        },
        baseLayer: {
            type: Boolean,

        },
    }
}
</script>

<style lang="">

</style>
