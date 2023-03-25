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
    computed,
} from 'vue'

import HeatmapLayer from 'ol/layer/Heatmap';
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

import BaseLayer from "./BaseLayer.vue"
export default {
    extends: BaseLayer,
    name: 'ol-heatmap-layer',
    setup(props) {
        const map = inject('map');

        const {
            properties
        } = usePropsAsObjectProperties(props);

        const heatmapLayer = computed(() => new HeatmapLayer(properties));

        watch(properties, () => {
            heatmapLayer.value.setProperties(properties);
        });

        onMounted(() => {
            map.addLayer(heatmapLayer.value);
        });

        onUnmounted(() => {
            map.removeLayer(heatmapLayer.value)
        });

        provide('heatmapLayer', heatmapLayer);
        provide('stylable', heatmapLayer);

        return {
            heatmapLayer
        }
    },
    props: {
        weight: {
            type: Function,
        },
        extent: {
            type: Array
        },
        blur: {
            type: Number
        },
        radius: {
            type: Number
        },
        gradient: {
            type: Array
        },
    }
}
</script>

<style lang="">

</style>
