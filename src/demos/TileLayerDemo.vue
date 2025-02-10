<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view ref="view" :center="center" :zoom="zoom" />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer>
      <ol-source-wmts
        :attributions="attribution"
        :url="url"
        :matrixSet="matrixSet"
        :format="format"
        :layer="layerName"
        :styles="styleName"
        projection="EPSG:3857"
      ></ol-source-wmts>
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([-11158582, 4813697]);
const zoom = ref(4);
const url = ref("https://mrdata.usgs.gov/mapcache/wmts");
const layerName = ref("sgmc2");
const matrixSet = ref("GoogleMapsCompatible");
const format = ref("image/png");
const styleName = ref("default");
const attribution = ref(
  'Tiles © <a href="https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/">ArcGIS</a>',
);
</script>
