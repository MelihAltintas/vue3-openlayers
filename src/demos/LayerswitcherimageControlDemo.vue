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
        imagerySet="RoadOnDemand"
      />
    </ol-tile-layer>

    <ol-tile-layer ref="osmLayer" title="OSM">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer
      ref="vectorLayer"
      :updateWhileAnimating="true"
      :updateWhileInteracting="true"
      title="STAR"
      preview="https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/src/assets/star.png"
    >
      <ol-source-vector ref="vectorsource">
        <ol-feature v-for="index in 20" :key="index">
          <ol-geom-point :coordinates="arrayWith500Points[index - 1]" />
          <ol-style>
            <ol-style-icon :src="starIcon" :scale="0.1" />
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>

    <ol-layerswitcherimage-control v-if="layerList.length > 0" />
  </ol-map>
</template>

<script setup>
import starIcon from "@/assets/star.png";
import { ref, onMounted } from "vue";

import { arrayWith500Points } from "./points";

const center = ref([35, 38]);
const projection = ref("EPSG:4326");
const zoom = ref(6);
const layerList = ref([]);
const jawgLayer = ref(null);
const osmLayer = ref(null);
const bingLayer = ref(null);
const vectorLayer = ref(null);

onMounted(() => {
  layerList.value.push(jawgLayer.value.tileLayer);
  layerList.value.push(bingLayer.value.tileLayer);
  layerList.value.push(osmLayer.value.tileLayer);
  layerList.value.push(vectorLayer.value.vectorLayer);
});
</script>
