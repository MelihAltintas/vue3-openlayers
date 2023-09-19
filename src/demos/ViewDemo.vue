<template>
  <ol-map style="height: 400px">
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
      @change:center="centerChanged"
      @change:resolution="resolutionChanged"
      @change:rotation="rotationChanged"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-rotate-control></ol-rotate-control>
  </ol-map>

  <ul>
    <li>center : {{ currentCenter }}</li>
    <li>resolution : {{ currentResolution }}</li>
    <li>zoom : {{ currentZoom }}</li>
    <li>rotation : {{ currentRotation }}</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);

const currentCenter = ref(center.value);
const currentZoom = ref(zoom.value);
const currentRotation = ref(rotation.value);
const currentResolution = ref(0);

function resolutionChanged(event) {
  currentResolution.value = event.target.getResolution();
  currentZoom.value = event.target.getZoom();
}
function centerChanged(event) {
  currentCenter.value = event.target.getCenter();
}
function rotationChanged(event) {
  currentRotation.value = event.target.getRotation();
}
</script>
