<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view ref="view" :center="center" :zoom="zoom" />

    <ol-vector-tile-layer>
      <ol-source-vector-tile :url="url" :format="mvtFormat">
      </ol-source-vector-tile>
    </ol-vector-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref([0, 0]);
const zoom = ref(3);

const url = ref(
  "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf",
);
const format = inject("ol-format");
const mvtFormat = new format.MVT();
</script>
