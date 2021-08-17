<template lang="">
<div v-if="false">

</div>
</template>

<script>
import LayerSwitcherImage from 'ol-ext/control/LayerSwitcherImage';
import useControl from '@/composables/useControl'
import LayerSwitcherControl from './LayerSwitcherControl'
export default {
    name: 'ol-layerswitcherimage-control',
    extends: LayerSwitcherControl,
    setup(props) {
        const {
            control
        } = useControl(LayerSwitcherImage, props);
        return {
            control
        }
    },

}
</script>

<style lang="">

</style>
