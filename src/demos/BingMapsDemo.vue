<template>
  <select v-model="selected" class="select-default">
    <option value="AerialWithLabels">AerialWithLabels</option>
    <option value="RoadOnDemand">RoadOnDemand</option>
    <option value="CanvasDark">CanvasDark</option>
  </select>
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
      <ol-source-bingmaps
        apiKey="AjtUzWJBHlI3Ma_Ke6Qv2fGRXEs0ua5hUQi54ECwfXTiWsitll4AkETZDihjcfeI"
        :imagerySet="selected"
      />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);
const selected = ref("AerialWithLabels");
</script>
