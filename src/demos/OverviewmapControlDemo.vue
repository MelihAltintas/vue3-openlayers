<template>
  <ol-map ref="map" style="height: 400px" :controls="[]">
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-overviewmap-control :collapsed="false">
      <ol-tile-layer>
        <ol-source-stadia-maps layer="stamen_watercolor" />
      </ol-tile-layer>
    </ol-overviewmap-control>
  </ol-map>
</template>

<script setup>
import { ref, onMounted } from "vue";
const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
</script>
