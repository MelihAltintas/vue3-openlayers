<template>
  <form>
    <label for="radius">Radius:</label>
    <input type="number" id="radius" step="0.01" min="0.01" v-model="radius" />
  </form>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-circle :center="[30, 40]" :radius="radius"></ol-geom-circle>
          <ol-style>
            <ol-style-stroke color="red" :width="3"></ol-style-stroke>
            <ol-style-fill color="rgba(255,200,0,0.2)"></ol-style-fill>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([30, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(10);
const radius = ref(0.2);
</script>
