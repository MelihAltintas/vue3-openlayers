<template lang="">
<div v-if="false"></div>
</template>

<script>
import proj4 from "proj4";
import {
    register
} from "ol/proj/proj4";
import {
    toRefs
} from "vue";
import Projection from 'ol/proj/Projection';

export default {
    name: "ol-projection-register",
    setup(props) {
        const {
            projectionName,
            projectionDef,
            projectionExtent
        } = toRefs(props);

        proj4.defs(projectionName.value, projectionDef.value);
        register(proj4);

        const projection = new Projection({
            code: projectionName.value,            
            extent: projectionExtent.value,
        });

        return{
            projection
        }
    },
    props: {
        projectionName: {
            type: String,
        },
        projectionDef: {
            type: String,
        },
        projectionExtent: {
            type: Array,
        },
    },
};
</script>

<style lang=""></style>
