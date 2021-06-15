<template lang="">
<div>
    <slot></slot>
</div>
</template>

<script>
import {
    inject,
    provide,
} from 'vue'

import TileLayer from 'ol/layer/Tile';

export default {
    name: 'ol-tile-layer',
    setup() {
        const map = inject('map');

        const tileLayer = new TileLayer();
        map.addLayer(tileLayer);

        provide('layer', tileLayer);

        return {
            tileLayer
        }
    }
}
</script>

<style lang="">

</style>
