<template>
  <ol-map style="height: 400px">
    <ol-view ref="view" :center="center" :zoom="zoom" />
    <ol-layer-group :opacity="0.4">
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
      <ol-tile-layer>
        <ol-source-tile-json :url="url" crossOrigin="anonymous" />
      </ol-tile-layer>
    </ol-layer-group>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const url = "https://a.tile.openstreetmap.org/4/6/6.png";
const center = ref([37.4057, 8.81566]);
const zoom = ref(4);
</script>
