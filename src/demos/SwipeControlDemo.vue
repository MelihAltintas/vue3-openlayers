<template>
  <ol-map ref="map" style="height: 400px" :controls="[]">
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer ref="jawgLayer" title="JAWG">
      <ol-source-xyz
        crossOrigin="anonymous"
        url="https://c.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token=87PWIbRaZAGNmYDjlYsLkeTVJpQeCfl2Y61mcHopxXqSdxXExoTLEv7dwqBwSWuJ"
      />
    </ol-tile-layer>

    <ol-tile-layer ref="stadiaLayer" title="Stamen Watercolor">
      <ol-source-stadia-maps layer="stamen_watercolor" />
    </ol-tile-layer>

    <ol-tile-layer ref="osmLayer" title="OSM">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-swipe-control v-if="layerList.length > 0" :layerList="layerList" />
  </ol-map>
</template>

<script setup>
import { ref, onMounted } from "vue";
const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const layerList = ref([]);
const jawgLayer = ref(null);
const osmLayer = ref(null);
const stadiaLayer = ref(null);

onMounted(() => {
  layerList.value.push(jawgLayer.value.tileLayer);
  layerList.value.push(stadiaLayer.value.tileLayer);
  layerList.value.push(osmLayer.value.tileLayer);
});
</script>
