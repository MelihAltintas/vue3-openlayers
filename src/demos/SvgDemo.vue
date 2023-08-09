<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view :center="center" :zoom="zoom" />
    <ol-svg-layer>
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
</script>
