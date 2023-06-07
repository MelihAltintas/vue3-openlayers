<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" />
    <ol-zoom-control />

    <ol-tile-layer :zIndex="1000">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer :zIndex="1001">
      <ol-source-tile-wms
        url="https://ahocevar.com/geoserver/wms"
        :extent="[-13884991, 2870341, -7455066, 6338219]"
        layers="topp:states"
        serverType="geoserver"
        :transition="0"
      />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup lang="ts">
import { ref } from "vue";

const zoom = ref(4);
const rotation = ref(0);
const center = ref([-10997148, 4569099]);
</script>
