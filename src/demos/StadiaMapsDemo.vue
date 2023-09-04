<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view ref="view" :center="center" :zoom="zoom" />
    <ol-tile-layer>
      <ol-source-stadia-maps layer="stamen_watercolor" />
    </ol-tile-layer>
    <ol-tile-layer>
      <ol-source-stadia-maps layer="stamen_terrain_labels" />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup lang="ts">
import { fromLonLat } from "ol/proj";
import { ref } from "vue";

const zoom = ref(12);
const center = ref(fromLonLat([-122.416667, 37.783333]));
</script>
