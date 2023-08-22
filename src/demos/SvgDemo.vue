<template>
  <label for="width">Width:</label>
  <input v-model="width" type="number" id="width" />
  <label for="height">Height:</label>
  <input v-model="height" type="number" id="height" />
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view :center="center" :zoom="zoom" />
    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
    <ol-svg-layer :width="width" :height="height">
      <ol-source-svg
        url="https://openlayers.org/en/latest/examples/data/world.svg"
      />
    </ol-svg-layer>
  </ol-map>
</template>

<script setup lang="ts">
import { fromLonLat } from "ol/proj";
import { ref } from "vue";

const zoom = ref(4);
const center = ref(fromLonLat([40, 40]));

const width = ref(2560);
const height = ref(1280);
</script>
