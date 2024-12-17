<template>
  <form>
    <fieldset>
      <label for="checkbox">Show as bar</label>
      <input type="checkbox" id="checkbox" v-model="showAsBar" />
    </fieldset>
  </form>
  <ol-map style="height: 400px" :controls="[]">
    <ol-view :center="center" :zoom="zoom" :projection="projection" />
    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
    <ol-scaleline-control :bar="showAsBar" />
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const showAsBar = ref(false);
</script>
