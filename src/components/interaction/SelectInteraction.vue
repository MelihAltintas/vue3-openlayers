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
            let s = new Select(properties);
            s.on('select', (event) => {
                emit('select', event)
            })
            return s;
        });

        watch(select, (newVal, oldVal) => {

            map.removeInteraction(oldVal.value);
            map.addInteraction(newVal.value);

            map.changed()
        })

        onMounted(() => {
            map.addInteraction(select.value);

        });

        onUnmounted(() => {
            map.removeInteraction(select.value);
        });
        console.log(select)
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
