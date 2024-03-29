<template>
  <form>
    <fieldset>
      <label for="opacity">Layer Opacity</label>
      <input
        type="range"
        id="opacity"
        min="0"
        max="1"
        step="0.1"
        v-model.number="opacity"
      />
      <span class="description">{{ opacity }}</span>
    </fieldset>
  </form>

  <ol-map style="height: 400px">
    <ol-view ref="view" :center="center" :zoom="zoom" />
    <ol-layer-group :opacity="opacity">
      <ol-tile-layer>
        <ol-source-tile-wms
          url="https://ahocevar.com/geoserver/wms"
          :extent="[-13884991, 2870341, -7455066, 6338219]"
          layers="topp:states"
          serverType="geoserver"
          :transition="0"
          :params="{}"
        />
      </ol-tile-layer>
      <ol-tile-layer>
        <ol-source-tile-json
          url="https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:raster:HYP_HR_SR_OB_DR/map/tiles/WebMercatorQuad?f=tilejson"
          crossOrigin="anonymous"
        />
      </ol-tile-layer>
    </ol-layer-group>
  </ol-map>
</template>

<script setup lang="ts">
import { ref } from "vue";

const zoom = ref(4);
const center = ref([-10997148, 4569099]);
const opacity = ref(0.4);
</script>
