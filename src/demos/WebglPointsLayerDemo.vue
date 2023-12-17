<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm crossOrigin="anonymous" />
    </ol-tile-layer>

    <ol-webgl-points-layer :styles="webglPointsStyle">
      <ol-source-webglpoints
        :format="geoJson"
        crossOrigin="anonymous"
        url="https://openlayers.org/en/latest/examples/data/geojson/world-cities.geojson"
      />
    </ol-webgl-points-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(3);
const rotation = ref(0);

const format = inject("ol-format");
const geoJson = new format.GeoJSON();

const webglPointsStyle = {
  "circle-radius": 6,
  "circle-fill-color": "yellow",
  "circle-stroke-width": 2,
  "circle-stroke-color": "darkblue",
  "circle-opacity": [
    "interpolate",
    ["linear"],
    ["get", "population"],
    40000,
    0.6,
    2000000,
    0.92,
  ],
};
</script>
