<template lang="">
<slot>

</slot>
</template>

<script>
import {
    provide,
    inject,
    watch,
    onMounted,
    onUnmounted,
    computed
} from 'vue'
import Feature from 'ol/Feature';
import Geometry from 'ol/geom/Geometry';
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'
export default {
    name: 'ol-feature',
    setup(props) {

        const vectorSource = inject("vectorSource");

        const {
            properties
        } = usePropsAsObjectProperties(props);

        let feature = computed(() => new Feature(properties));

        watch(feature, (newVal, oldVal) => {
            vectorSource.value.removeFeature(oldVal);
            vectorSource.value.addFeature(newVal);
            vectorSource.value.changed()
        })

        watch(vectorSource, (newVal, oldVal) => {
            oldVal.removeFeature(feature.value);
            newVal.addFeature(feature.value);
            newVal.changed()
        })

        onMounted(() => {
            vectorSource.value.addFeature(feature.value);

        });

        onUnmounted(() => {
            vectorSource.value.removeFeature(feature.value);
        });

        provide('feature', feature)
        provide('stylable', feature)
    },
    props:{
        geometryOrProperties:{
            type:[Geometry,Object,Array]
        }
    }

}
</script>

<style lang="">

</style>
