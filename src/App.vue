<template>
<button @click="() => zoom = zoom + 1">Zoom In</button>
<button @click="() => zoom = zoom - 1">Zoom Out</button>

<div>
    center : {{currentCenter}}
</div>
<div>
    zoom : {{currentZoom}}
</div>
<div>
    resolution : {{currentResolution}}
</div>

<div>
    rotation : {{currentRotation}}
</div>

<ol-map style="height:400px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" @zoomChanged="zoomChanged" @centerChanged="centerChanged" @resolutionChanged="resolutionChanged" @rotationChanged="rotationChanged" />
    <ol-fullscreen-control />

    <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer>

    <ol-overlay :position="[40,40]">
        <template v-slot="slotProps">
            <div class="overlay-content">
                Hello world!<br>
                Position: {{ slotProps.position }}
            </div>
        </template>
    </ol-overlay>

</ol-map>
</template>

<script>
import {
    ref,
    onMounted,
    watchEffect
} from 'vue'
export default {
    name: 'App',
    setup() {

        const center = ref([40, 40])
        const projection = ref('EPSG:4326')
        const zoom = ref(8)
        const rotation = ref(0)

        watchEffect(() => console.log("zoom changed", zoom.value));
        onMounted(() => {

            const view = ref(null);
            console.log("view", view);
        });

        return {
            center,
            projection,
            zoom,
            rotation
        }
    },
    data() {
        return {
            currentCenter: this.center,
            currentZoom: this.zoom,
            currentResolution: this.resolution,
            currentRotation: this.rotation
        }

    },
    methods: {
        zoomChanged(currentZoom) {

            this.currentZoom = currentZoom
        },
        resolutionChanged(resolution) {
            this.currentResolution = resolution
        },
        centerChanged(center) {
            this.currentCenter = center
        },
        rotationChanged(rotation) {
            this.currentRotation = rotation
        }
    }
}
</script>

<style>
.overlay-content {
    background: #efefef;
    box-shadow: 0 5px 10px rgb(2 2 2 / 20%);
    padding: 10px 20px;
    font-size: 16px;
}
</style>
