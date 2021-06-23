<template>
<div>
    <slot></slot>
</div>
</template>

<script>
import VectorSource from 'ol/source/Vector';

import {
    inject,
    watch,
    onMounted,
    onUnmounted,
    provide,
    computed
} from 'vue'

import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
    name: 'ol-source-vector',
    setup(props) {

        const layer = inject('vectorLayer');

        const {
            properties
        } = usePropsAsObjectProperties(props);

        let source = computed(()=> new VectorSource(properties));

        const applySource = () => {
            layer.value.setSource(null)
            layer.value.setSource(source.value)
            layer.value.changed()
        };
        watch(properties, () => {
            applySource();

        })

        watch(layer, () => {
            applySource();
        });

        onMounted(() => {
            layer.value.setSource(source.value)
        });

        onUnmounted(() => {
            layer.value.setSource(null)
        });

        provide("vectorSource",source);

        return {
            layer,
            source
        }
    },
    props: {
       projection:{
           type:String,
           default:'EPSG:3857'
       }

    }

}
</script>

<style lang="">

</style>
