<template>
  <button class="btn-default" type="button" @click="moveToEast">
    Move to the right
  </button>
  <ol-map style="height: 400px">
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-overlay
      :position="[item + 37.9 + offset, 40.1]"
      v-for="item in list"
      :key="item"
      :autoPan="true"
    >
      <div class="overlay-content">
        {{ item }}
      </div>
    </ol-overlay>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const offset = ref(0);
const list = ref([2, 1, 3, 5, -1]);

function moveToEast() {
  offset.value += 0.1;
}
</script>

<style scoped>
.overlay-content {
  background: #efefef;
  box-shadow: 0 5px 10px rgb(2 2 2 / 20%);
  padding: 10px 20px;
  font-size: 16px;
  color: black;
}
</style>
