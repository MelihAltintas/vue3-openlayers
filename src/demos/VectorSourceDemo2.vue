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

    <ol-vector-layer>
      <ol-source-vector
        :url="urlFunction"
        :strategy="bbox"
        :format="GeoJSON"
        :projection="projection"
      >
      </ol-source-vector>
      <ol-style>
        <ol-style-stroke color="red" :width="5"></ol-style-stroke>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref([-8908887.277395891, 5381918.072437216]);
const projection = ref("EPSG:3857");
const zoom = ref(14);
const rotation = ref(0);

const urlFunction = (extent, resolution, projection) => {
  const proj = projection.getCode();
  const url =
    "https://ahocevar.com/geoserver/wfs?service=WFS&" +
    "version=1.1.0&request=GetFeature&typename=osm:water_areas&" +
    "outputFormat=application/json&srsname=" +
    proj +
    "&" +
    "bbox=" +
    extent.join(",") +
    "," +
    proj;
  return url;
};

const strategy = inject("ol-loadingstrategy");
const bbox = strategy.bbox;
const format = inject("ol-format");
const GeoJSON = new format.GeoJSON();
</script>
