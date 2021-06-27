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

import Select from 'ol/interaction/Select';
import Style from 'ol/style/Style';
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties'

export default {
    name: 'ol-interaction-select',
    emits: ["select"],
    setup(props, {
        emit
    }) {

        const map = inject("map");

        const {
            properties
        } = usePropsAsObjectProperties(props);

        let select = computed(() => {
            let s = new Select({
                ...properties,
                style : new Style()
            });
            s.on('select', (event) => {
                emit('select', event)
            })

            return s;
        });

        watch(select, (newVal, oldVal) => {

            map.removeInteraction(oldVal);
            map.addInteraction(newVal);

            map.changed()
        })

        onMounted(() => {
            map.addInteraction(select.value);

        });

        onUnmounted(() => {
            map.removeInteraction(select.value);
        });

        provide('stylable', select)
    },
    props: {

        multi: {
            type: Boolean,
            default: false
        },
        condition: {
            type: Function,

        }
    }

}
</script>

<style lang="">

</style>
