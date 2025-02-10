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

      <label for="visibility-toggle">Layer Visibility:</label>
      <input type="checkbox" id="visibility-toggle" v-model="layerVisible" />
      <span> {{ layerVisible ? "Visible" : "Hidden" }}</span>
    </fieldset>
  </form>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view ref="view" :center="center" :zoom="zoom" />
    <ol-zoom-control />

    <ol-tile-layer :zIndex="1000">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer
      :zIndex="1001"
      :opacity="layerOpacity"
      :visible="layerVisible"
    >
      <ol-source-tile-wms
        url="https://ahocevar.com/geoserver/wms"
        :extent="[-13884991, 2870341, -7455066, 6338219]"
        projection="EPSG:3857"
        layers="topp:states"
        serverType="geoserver"
        :transition="0"
        :params="{}"
      />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup lang="ts">
import { ref } from "vue";

const zoom = ref(4);
const center = ref([-10997148, 4569099]);
const layerOpacity = ref(0.4);
const layerVisible = ref(true);
</script>
