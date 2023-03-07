<template lang="">
<slot></slot>
</template>

<script>
import FeatureAnimation from './FeatureAnimation.vue';
import Drop from 'ol-ext/featureanimation/Drop';
import useAnimation from "@/composables/useAnimation";
export default {
    name: 'ol-animation-drop',
    extends: FeatureAnimation,

    setup(props) {
        const {
            map,
            vectorLayer,
            properties
        } = useAnimation(Drop, props);

        return {
            map,
            vectorLayer,
            properties
        }

    },
    props: {
        side: {
            type: Number,
            default: 0
        },
        speed: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="">

</style>
