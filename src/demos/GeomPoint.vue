<template>
  <form>
    <fieldset>
      <label for="fill">Fill:</label>
      <input type="color" id="fill" v-model="fill" />
      <label for="stroke">Stroke:</label>
      <input type="color" id="stroke" v-model="stroke" />
    </fieldset>
    <fieldset>
      <label for="strokeWidth">StrokeWidth:</label>
      <input
        type="number"
        id="strokeWidth"
        step="1"
        min="0"
        v-model="strokeWidth"
      />
      <label for="radius">Radius:</label>
      <input type="number" id="radius" step="1" min="1" v-model="radius" />
    </fieldset>
  </form>
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
              <ol-style-fill :color="fill"></ol-style-fill>
              <ol-style-stroke
                :color="stroke"
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
const stroke = ref("#ff0000");
const fill = ref("#ffffff");
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
