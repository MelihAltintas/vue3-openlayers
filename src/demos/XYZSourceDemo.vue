<template>
  <select v-model="selected">
    <option value="https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png">
      OSM
    </option>
    <option value="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}">
      GOOGLE
    </option>
  </select>
  {{ selected }}
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-xyz :url="selected" />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);
const selected = ref("https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png");
</script>
