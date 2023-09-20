<template>
  <ol-map ref="map" style="height: 400px" :controls="[]">
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
    <ol-attribution-control />
  </ol-map>
</template>

<script setup>
import { ref } from "vue";
const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
</script>
