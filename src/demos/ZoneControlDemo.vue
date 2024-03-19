<template>
  <ol-map
    ref="map"
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
    :controls="[]"
  >
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-zone-control
      v-if="jawgLayer?.tileLayer"
      :zones="zones"
      :projection="projection"
      :layer="jawgLayer.tileLayer"
    >
    </ol-zone-control>

    <ol-tile-layer ref="jawgLayer" title="JAWG">
      <ol-source-xyz
        crossOrigin="anonymous"
        url="https://c.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token=87PWIbRaZAGNmYDjlYsLkeTVJpQeCfl2Y61mcHopxXqSdxXExoTLEv7dwqBwSWuJ"
      />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";
const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const jawgLayer = ref(null);

const zones = [
  {
    title: "France",
    extent: [
      -5.318421740712579, 41.16082274292913, 9.73284186155716,
      51.21957336557702,
    ],
  },
  {
    title: "Turkey",
    extent: [22.473435, 34.465842, 43.40239, 42.56525],
  },
  {
    title: "Germany",
    extent: [-0.101752, 47.49888, 20.827203, 54.043465],
  },
];
</script>
