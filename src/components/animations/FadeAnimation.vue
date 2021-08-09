<template lang="">
<slot></slot>
</template>

<script>
import FeatureAnimation from './FeatureAnimation';
import Fade from 'ol-ext/featureanimation/Fade';
import useAnimation from "@/composables/useAnimation";
export default {
    name: 'ol-animation-fade',
    extends: FeatureAnimation,

    setup(props) {
        const {
            map,
            vectorLayer,
            properties
        } = useAnimation(Fade, props);

        return {
            map,
            vectorLayer,
            properties
        }

    },
 
}
</script>

<style lang="">

</style>
