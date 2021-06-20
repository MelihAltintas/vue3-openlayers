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
    Attribution
} from 'ol/control';

export default {
    name: 'ol-attribution-control',
    setup(props) {
        const {
            className,
            target,
            collapsible,
            collapsed,
            tipLabel,
            label,
            expandClassName,
            collapseLabel,
            collapseClassName,
            render

        } = toRefs(props)
        const map = inject('map');
        const attr = new Attribution({
            className: className.value,
            target: target.value,
            collapsible: collapsible.value,
            collapsed: collapsed.value,
            tipLabel: tipLabel.value,
            label: label.value,
            expandClassName: expandClassName.value,
            collapseLabel: collapseLabel.value,
            collapseClassName: collapseClassName.value,
            render: render.value,
        });
        onMounted(() => {

            map.addControl(attr);
        });

        onUnmounted(() => {
            map.removeControl(attr);
        });

    },
    props: {
        className: {
            type: String,
            default: 'ol-attribution'
        },
        target: {
            type: HTMLElement,
        },
        collapsible: {
            type: Boolean,
        },
        collapsed: {
            type: Boolean,
            default: true
        },
        tipLabel: {
            type: String,
            default: 'Attributions'
        },

        label: {
            type: String,
            default: 'i'
        },
        expandClassName: {
            type: String,
            default: 'ol-attribution-expand'
        },
        collapseLabel: {
            type: String,
            default: '»'
        },
        collapseClassName: {
            type: String,
            default: 'ol-attribution-collapse'
        },
        render: {
            type: Function,
        }
    }
}
</script>

<style lang="">

</style>
