<template>
<div v-if="false">

</div>
</template>

<script>
import XYZ from 'ol/source/XYZ';
import {
    inject,
    toRefs
} from 'vue'

export default {
    name: 'ol-source-xyz',
    setup(props) {

        const layer = inject('layer');
     
        const {url} = toRefs(props);
        const source = new XYZ({
            url: url.value
        });

        layer.setSource(source)

        return {
            layer,
            source
        }
    },
    props: {
        url: {
            type: String
        }
    }
}
</script>

<style lang="">

</style>
