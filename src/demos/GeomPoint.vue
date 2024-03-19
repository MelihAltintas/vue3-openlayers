<template>
  <button class="btn-default" @click="changeCoordinate" type="button">
    change coordinates
  </button>
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
          <ol-geom-point :coordinates="coordinate"></ol-geom-point>
          <ol-style>
            <ol-style-circle :radius="radius">
              <ol-style-fill :color="fillColor"></ol-style-fill>
              <ol-style-stroke
                :color="strokeColor"
                :width="strokeWidth"
              ></ol-style-stroke>
            </ol-style-circle>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup lang="ts">
import { ref } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const radius = ref(40);
const strokeWidth = ref(10);
const strokeColor = ref("red");
const fillColor = ref("white");
const coordinate = ref([40, 40]);

function changeCoordinate() {
  coordinate.value = coordinate.value.map((a) => a + 0.01);
}
</script>

<style scoped>
button {
  border: 1px solid black;
  margin: 0.5rem 0;
  padding: 0.5rem;
}
button:hover,
button:focus {
  background-color: lightgray;
}
</style>
