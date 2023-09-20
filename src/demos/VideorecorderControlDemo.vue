<template>
  <ol-map style="height: 400px" :controls="[]">
    <ol-view
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
    <ol-videorecorder-control @stop="videoStopped" />
  </ol-map>
</template>

<script setup>
import { ref } from "vue";
const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);

const videoStopped = (event) => {
  console.log(event);
};
</script>
