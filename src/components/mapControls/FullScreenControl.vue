<template lang="">
<div v-if="false">

</div>
</template>

<script>
import {
    inject,
    onMounted,
    onUnmounted
} from 'vue'

import {
    FullScreen
} from 'ol/control';

export default {
    name: 'ol-fullscreen-control',
    setup() {
        const fullscreen = new FullScreen();
        const map = inject('map');

        onMounted(() => {

            map.addControl(fullscreen);
        });

        onUnmounted(() => {
            map.removeControl(fullscreen);
        });

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
