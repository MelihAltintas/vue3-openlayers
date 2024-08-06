<template>
  <div id="map" class="map" tabindex="0" style="height: 400px; width: 100%" />
  <ol-map v-if="mapInstance" :instance="mapInstance">
    <ol-zoomslider-control />
  </ol-map>
</template>

<script setup lang="ts">
import Map from "ol/Map";
import { View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { onMounted, ref } from "vue";

const mapInstance = ref<Map>();

onMounted(() => {
  mapInstance.value = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: "map",
    view: new View({
      center: [40, 40],
      zoom: 2,
      projection: "EPSG:4326",
    }),
  });
});
</script>
