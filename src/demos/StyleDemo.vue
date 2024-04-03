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
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector :url="url" :format="geoJson"> </ol-source-vector>
      <ol-style>
        <ol-style-stroke color="red" :width="2"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref([0, 0]);
const projection = ref("EPSG:4326");
const zoom = ref(3);

const url = ref("https://openlayers.org/data/vector/ecoregions.json");
const format = inject("ol-format");
const geoJson = new format.GeoJSON();
</script>
