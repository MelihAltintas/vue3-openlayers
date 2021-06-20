<template>
<div v-if="false">

</div>
</template>

<script>
import OSM from 'ol/source/OSM';
import {
    inject
} from 'vue'

export default {
    name: 'ol-source-osm',
    setup() {

        const layer = inject('layer');
     

        const source = new OSM();

        layer.setSource(source)

        return {
            layer,
            source
        }
    }
   
}
</script>

<style lang="">

</style>
