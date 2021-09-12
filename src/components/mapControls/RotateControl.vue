<template lang="">
<div v-if="false">

</div>
</template>

<script>
import useControl from '@/composables/useControl'
import Rotate from 'ol/control/Rotate';

export default {
    name: 'ol-rotate-control',
    setup(props,context) {
        const {
            control
        } = useControl(Rotate, props,context);
        return {
            control
        }

    },
    props: {
        className: {
            type: String,
            default: 'ol-rotate'
        },
        label: {
            type: String,
            default: '⇧'
        },
        tipLabel: {
            type: String,
            default: 'Reset rotation'
        },
        compassClassName: {
            type: String,
            default: 'ol-compass'
        },
        duration: {
            type: Number,
            default: 250
        },

        autoHide: {
            type: Boolean,
            default: false
        },
        render: {
            type: Function,

        },
        resetNorth: {
            type: Function,

        },
        target: {
            type: HTMLElement,
        },

    }
}
</script>

<style lang="">

</style>
