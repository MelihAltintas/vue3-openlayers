<template>
  <form>
    <fieldset>
      <label for="opacity-slider">Layer Opacity</label>
      <input
        type="range"
        id="opacity-slider"
        min="0"
        max="1"
        step="0.1"
        v-model.number="layerOpacity"
      />
      <span class="description">{{ layerOpacity }}</span>
    </fieldset>
    <fieldset>
      <select v-model="selected" class="select-default">
        <option value="https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png">
          OSM
        </option>
        <option value="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}">
          GOOGLE
        </option>
      </select>
    </fieldset>
  </form>
  {{ selected }}
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

    <ol-tile-layer :opacity="layerOpacity">
      <ol-source-xyz :url="selected" />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const selected = ref("https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png");
const layerOpacity = ref(1);
</script>
