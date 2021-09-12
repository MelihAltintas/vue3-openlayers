<template lang="">
<div v-if="false">

</div>
</template>

<script>

import {
    FullScreen
} from 'ol/control';
import useControl from '@/composables/useControl'

export default {
    name: 'ol-fullscreen-control',
    setup(props,context) {

        const {
            control
        } = useControl(FullScreen, props,context);
        return {
            control
        }

    },
    props: {
        className: {
            type: String,
            default: 'ol-full-screen'
        },
        label: {
            type: String,
            default: '\u2922'
        },
        labelActive: {
            type: String,
            default: '\u00d7'
        },
        activeClassName: {
            type: String,
            default: 'ol-full-screen-true'
        },
        inactiveClassName: {
            type: String,
            default: 'ol-full-screen-false'
        },
        tipLabel: {
            type: String,
            default: 'Toggle full-screen'
        },
        keys: {
            type: Boolean,
            default: false
        },
        target: {
            type: Object,
            default: undefined
        },
        source: {
            type: Object,
            default: undefined
        }
    }
}
</script>

<style lang="">

</style>
