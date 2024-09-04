<template>
  <ol-map ref="map" style="height: 400px" :controls="[]">
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer ref="stadiaLayer" title="Stamen Watercolor">
      <ol-source-stadia-maps layer="stamen_watercolor" />
    </ol-tile-layer>

    <ol-tile-layer ref="osmLayer" title="OSM">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-swipe-control
      v-if="stadiaLayer && osmLayer"
      :layers="[osmLayer.tileLayer]"
      :right-layers="[stadiaLayer.tileLayer]"
    />
  </ol-map>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type TileLayer from "ol/layer/Tile";
const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const osmLayer = ref<{ tileLayer: TileLayer } | null>(null);
const stadiaLayer = ref<{ tileLayer: TileLayer } | null>(null);
</script>
