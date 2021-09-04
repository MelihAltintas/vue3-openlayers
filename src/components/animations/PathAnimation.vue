<template lang="">
<slot></slot>
</template>

<script>
import FeatureAnimation from './FeatureAnimation';
import Path from 'ol-ext/featureanimation/Path';
import useAnimation from "@/composables/useAnimation";
export default {
    name: 'ol-animation-path',
    extends: FeatureAnimation,

    setup(props) {
        const {
            map,
            vectorLayer,
            properties
        } = useAnimation(Path, props);

        return {
            map,
            vectorLayer,
            properties
        }

    },
    props: {
        rotate: {
            type: Boolean,
            default: false
        },
        speed: {
            type: Number,
            default: 0
        },
        path: {
            type: Object,
        },
    }
}
</script>

<style lang="">

</style>
