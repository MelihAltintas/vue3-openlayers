<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer>
      <ol-source-tile-arcgis-rest
        :url="arcgisUrl"
        :tileSize="[1024, 1024]"
        :params="requestParams"
      />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([4340075, 5628816]);
const projection = ref("EPSG:3857");
const zoom = ref(15);
const rotation = ref(0);
const arcgisUrl =
  "https://services.wvgis.wvu.edu/arcgis/rest/services/Imagery_BaseMaps_EarthCover/wv_imagery_WVGISTC_leaf_off_mosaic/MapServer";
const requestParams = {
  layers: "show:30,27,24,23,22",
  format: "PNG32",
  f: "image",
  dpi: 96,
  transparent: true,
  bboxSR: 102100,
  imageSR: 102100,
  size: "1024,1024",
  _ts: false,
};
</script>
