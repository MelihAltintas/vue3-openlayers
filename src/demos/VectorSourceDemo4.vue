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

    <ol-vector-image-layer>
      <ol-source-vector :url="url" :format="geoJson"> </ol-source-vector>
    </ol-vector-image-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref([0, 0]);
const projection = ref("EPSG:4326");
const zoom = ref(3);
const rotation = ref(0);

const url = ref("https://openlayers.org/data/vector/ecoregions.json");
const format = inject("ol-format");
console.log(format);
const geoJson = new format.GeoJSON();
</script>
