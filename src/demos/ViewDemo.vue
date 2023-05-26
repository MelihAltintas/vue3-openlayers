<template>
  <ol-map style="height: 400px">
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
      @zoomChanged="zoomChanged"
      @centerChanged="centerChanged"
      @resolutionChanged="resolutionChanged"
      @rotationChanged="rotationChanged"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>

  <div>
    center : {{ currentCenter }} zoom : {{ currentZoom }} resolution :
    {{ currentResolution }} rotation : {{ currentRotation }}
  </div>
</template>

<script setup>
import { ref } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);

const currentCenter = ref(0);
const currentZoom = ref(0);
const currentResolution = ref(0);
const currentRotation = ref(0);

function zoomChanged(z) {
  currentZoom.value = z;
}
function resolutionChanged(r) {
  currentResolution.value = r;
}
function centerChanged(c) {
  currentCenter.value = c;
}
function rotationChanged(r) {
  currentRotation.value = r;
}
</script>
