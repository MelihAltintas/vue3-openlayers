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
      <ol-source-osm />
    </ol-tile-layer>

    <ol-webgl-points-layer :styles="webglPointsStyle">
      <ol-source-webglpoints
        :format="geoJson"
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
  symbol: {
    symbolType: "circle",
    size: [
      "interpolate",
      ["linear"],
      ["get", "population"],
      40000,
      8,
      2000000,
      28,
    ],
    color: "#ffed02",
    rotateWithView: false,
    offset: [0, 0],
    opacity: [
      "interpolate",
      ["linear"],
      ["get", "population"],
      40000,
      0.6,
      2000000,
      0.92,
    ],
  },
};
</script>
