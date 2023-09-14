<template>
  <ol-map style="height: 400px">
    <ol-view ref="view" :center="center" :zoom="zoom" />
    <ol-tile-layer :opacity="0.3">
      <ol-source-osm />
    </ol-tile-layer>
    <ol-tile-layer>
      <ol-source-tile-debug />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([37.4057, 8.81566]);
const zoom = ref(4);
</script>
