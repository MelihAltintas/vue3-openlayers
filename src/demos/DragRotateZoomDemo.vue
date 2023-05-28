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

    <ol-interaction-dragrotatezoom />
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([-102.13121, 40.2436]);
const projection = ref("EPSG:4326");
const zoom = ref(5);
</script>
