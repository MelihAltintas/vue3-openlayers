<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view ref="view" :center="center" :zoom="zoom" :projection="projection"/>

    <ol-webgl-tile-layer :style="trueColor" >
      <ol-source-geo-tiff
      :normalize="false"
      :sources="[
        {
          url: 'https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif'
        }
      ]"
      :wrapX="true"/>
    </ol-webgl-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";
import {sourcesFromTileGrid} from 'ol/source.js';

const center = ref([0, 0]);
const zoom = ref(2);
const rotation = ref(0);
const projection = ref('EPSG:4326');

const max = 3000;
function normalize(value) {
  return ['/', value, max];
}

const red = normalize(['band', 1]);
const green = normalize(['band', 2]);
const blue = normalize(['band', 3]);
const nir = normalize(['band', 4]);

const trueColor = ref({
  color: ['array', red, green, blue, 1],
  gamma: 1.1,
});
</script>
