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
            vectorSource.value.removeFeature(oldVal.value);
            vectorSource.value.addFeature(newVal.value);
            vectorSource.value.changed()
        })

        watch(vectorSource, (newVal, oldVal) => {
            oldVal.value.removeFeature(feature.value);
            newVal.value.addFeature(feature.value);
            newVal.value.changed()
        })

        onMounted(() => {
            vectorSource.value.addFeature(feature.value);

        });

        onUnmounted(() => {
            vectorSource.value.removeFeature(feature.value);
        });

        provide('feature', feature)
    }

}
</script>

<style lang="">

</style>
