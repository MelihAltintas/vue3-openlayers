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

import {
    MousePosition
} from 'ol/control';

export default {
    name: 'ol-mouseposition-control',
    setup(props) {
        const map = inject('map');
        const {
            className,
            coordinateFormat,
            projection,
            render,
            target,
            undefinedHTML
        } = toRefs(props)
        const mouseposition = new MousePosition({
            className: className.value,
            coordinateFormat: coordinateFormat.value,
            projection: projection.value,
            render: render.value,
            target: target.value,
            undefinedHTML: undefinedHTML.value,
        });

        onMounted(() => {

            map.addControl(mouseposition);
        });

        onUnmounted(() => {

            map.removeControl(mouseposition);
        });

    },
    props: {
        className: {
            type: String,
            default: 'ol-mouse-position'
        },
        coordinateFormat: {
            type: String,
        },
        projection: {
            type: String,
        },
        render: {
            type: Function,
        },
        target: {
            type: HTMLElement,
        },
        undefinedHTML: {
            type: String,
            default: '&#160;'
        }
    }
}
</script>

<style lang="">

</style>
