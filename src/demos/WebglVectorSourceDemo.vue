<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm crossOrigin="anonymous" />
    </ol-tile-layer>

    <ol-webgl-vector-layer :styles="webglLineStyle">
      <ol-source-vector crossOrigin="anonymous" :format="geoJson">
        <ol-feature>
          <ol-geom-line-string
            :coordinates="[
              [116.544921, 40.451633],
              [116.545264, 40.451649],
              [116.545865, 40.451698],
              [116.546144, 40.451551],
              [116.546337, 40.451274],
              [116.546788, 40.451143],
              [116.547324, 40.451078],
              [116.547539, 40.450996],
              [116.547839, 40.450719],
              [116.54844, 40.450506],
              [116.548933, 40.450604],
              [116.549448, 40.450604],
              [116.550242, 40.450376],
              [116.550865, 40.450163],
              [116.551702, 40.449935],
              [116.552581, 40.449576],
            ]"
          ></ol-geom-line-string>
        </ol-feature>
      </ol-source-vector>
    </ol-webgl-vector-layer>
  </ol-map>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

const center = ref([116.54875, 40.45064]);
const projection = ref("EPSG:4326");
const zoom = ref(16);

const format = inject("ol-format");
const geoJson = new format.GeoJSON();

const webglLineStyle = {
  "stroke-width": 10,
  "stroke-color": "rgba(24,86,34,0.7)",
};
</script>
