<template>
<div>
    <slot></slot>
</div>
</template>

<script>
import {
    provide,
    inject,
    watch,
    onUnmounted,
    onMounted,
    computed
} from 'vue'

import Style from 'ol/style/Style';

import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
    name: 'ol-style',
    setup(props) {

        const vectorLayer = inject('vectorLayer', null);
        const feature = inject('feature', null);

        const styledObj = feature != null ? feature : vectorLayer;

        const {
            properties
        } = usePropsAsObjectProperties(props);

        let style = computed(() => new Style(properties));

        watch(properties, () => {

            styledObj.value.setStyle(null)
            styledObj.value.setStyle(style.value)
            styledObj.value.changed()
        })

        onMounted(() => {
            styledObj.value.setStyle(style.value)
        });

        onUnmounted(() => {
            styledObj.value.setStyle(null)
        });

        provide("style", style)
        provide("styledObj", styledObj)

        return {
            style
        }
    },
    props: {
        zIndex: {
            type: Number
        },

    }

}
</script>

<style lang="">

</style>
