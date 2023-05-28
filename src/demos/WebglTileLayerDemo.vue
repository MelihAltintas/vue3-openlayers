<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" />

    <ol-webgl-tile-layer>
      <ol-source-osm />
    </ol-webgl-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([-90, 50]);
const zoom = ref(2);
const rotation = ref(0);
</script>
