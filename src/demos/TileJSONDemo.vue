<template>
  <ol-map style="height: 400px">
    <ol-view ref="view" :center="center" :zoom="zoom" />
    <ol-layer-group :opacity="0.4">
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
</script>
