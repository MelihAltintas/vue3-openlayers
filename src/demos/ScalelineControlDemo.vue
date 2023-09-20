<template>
  <button class="btn-default" type="button" @click="rotateRight">
    Rotate right
  </button>
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
    <ol-scaleline-control />
  </ol-map>
</template>

<script setup>
import { ref } from "vue";
const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
</script>
