<template lang="">
<div v-if="false">

</div>
</template>

<script>
import {
    inject,
    toRefs,
    onMounted,
    onUnmounted
} from 'vue'

import Rotate from 'ol/control/Rotate';

export default {
    name: 'ol-rotate-control',
    setup(props) {
        const map = inject('map');
        const {
            className,
            label,
            tipLabel,
            compassClassName,
            duration,
            autoHide,
            render,
            resetNorth,
            target,
        } = toRefs(props)
        const rotate = new Rotate({
            className:className.value,
            label:label.value,
            tipLabel:tipLabel.value,
            compassClassName:compassClassName.value,
            duration:duration.value,
            autoHide:autoHide.value,
            render:render.value,
            resetNorth:resetNorth.value,
            target:target.value,
        });
        onMounted(() => {

            map.addControl(rotate);
        });

        onUnmounted(() => {
            map.removeControl(rotate);
        });

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
