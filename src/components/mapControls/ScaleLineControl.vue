<template lang="">
<div v-if="false">

</div>
</template>

<script>
import useControl from '@/composables/useControl'

import {
    ScaleLine
} from 'ol/control';

export default {
    name: 'ol-scaleline-control',
    setup(props) {
        const {
            control
        } = useControl(ScaleLine, props);
        return {
            control
        }

    },
    props: {
        className: {
            type: String,
            default: 'ol-scale-line'
        },
        minWidth: {
            type: Number,
            default: 64
        },
        render: {
            type: Function,
        },
        target: {
            type: HTMLElement,
        },
        units: {
            type: String,
            default: 'metric'
        },
        bar: {
            type: Boolean,
            default: false
        },

        steps: {
            type: Number,
            default: 4
        },
        text: {
            type: Boolean,
            default: false
        },
        dpi: {
            type: Number,
            default: undefined
        }

    }
}
</script>

<style lang="">

</style>
