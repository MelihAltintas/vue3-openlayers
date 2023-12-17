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
      <ol-source-webglpoints crossOrigin="anonymous" :format="geoJson">
        <ol-feature v-for="index in 20" :key="index">
          <ol-geom-point
            :coordinates="[
              getRandomInRange(24, 45, 3),
              getRandomInRange(35, 41, 3),
            ]"
          ></ol-geom-point>
        </ol-feature>
      </ol-source-webglpoints>
    </ol-webgl-points-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(5);
const rotation = ref(0);
import marker from "@/assets/marker.png";

const format = inject("ol-format");
const geoJson = new format.GeoJSON();

const getRandomInRange = (from, to, fixed) => {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
};

const webglPointsStyle = {
  "icon-src": marker,
  "icon-width": 20,
  "icon-height": 30,
  "icon-color": [180, 255, 200],
};
</script>
