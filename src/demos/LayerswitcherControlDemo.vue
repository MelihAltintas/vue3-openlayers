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

    <ol-tile-layer ref="bingLayer" title="Bing Maps">
      <ol-source-bingmaps
        apiKey="AjtUzWJBHlI3Ma_Ke6Qv2fGRXEs0ua5hUQi54ECwfXTiWsitll4AkETZDihjcfeI"
        imagerySet="CanvasDark"
      />
    </ol-tile-layer>

    <ol-tile-layer ref="osmLayer" title="OSM">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-layerswitcher-control v-if="layerList.length > 0" />
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
const bingLayer = ref(null);

onMounted(() => {
  layerList.value.push(jawgLayer.value.tileLayer);
  layerList.value.push(bingLayer.value.tileLayer);
  layerList.value.push(osmLayer.value.tileLayer);
});
</script>
