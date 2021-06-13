<template>
<button @click="() => zoom = zoom + 1">Zoom In</button>
<button @click="() => zoom = zoom - 1">Zoom Out</button>

<div>
    center : {{center}}
</div>
<div>
    zoom : {{zoom}}
</div>
<div>
    resolution : {{resolution}}
</div>

<div>
    rotation : {{rotation}}
</div>

<ol-map style="height:400px">

    <ol-view v-model:center="center" v-model:rotation="rotation" v-model:resolution="resolution" 
    v-model:projection="projection" v-model:zoom="zoom" />

    <ol-fullscreen-control />

</ol-map>
</template>

<script>
import {
    ref,
    watchEffect
} from 'vue'
export default {
    name: 'App',
    setup() {

        const center = ref([40, 40])
        const projection = ref('EPSG:4326')
        const zoom = ref(8)
        const resolution = ref(0)
        const rotation = ref(0)

        watchEffect(() => console.log("zoom changed", zoom.value));

        return {
            center,
            projection,
            zoom,
            resolution,
            rotation
        }
    },
}
</script>

<style>

</style>
