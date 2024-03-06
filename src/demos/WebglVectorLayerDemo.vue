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
      <ol-source-osm crossOrigin="anonymous" />
    </ol-tile-layer>

    <!-- webgl points layer -->
    <ol-webgl-vector-layer :styles="webglPointStyle">
      <ol-source-vector
        :format="geoJson"
        crossOrigin="anonymous"
        url="https://openlayers.org/en/latest/examples/data/geojson/point-samples.geojson"
      />
    </ol-webgl-vector-layer>

    <!-- webgl lines layer -->
    <ol-webgl-vector-layer :styles="webglLineStyle">
      <ol-source-vector
        :format="geoJson"
        crossOrigin="anonymous"
        url="https://openlayers.org/en/latest/examples/data/geojson/line-samples.geojson"
      />
    </ol-webgl-vector-layer>

    <!-- webgl polygons layer -->
    <ol-webgl-vector-layer :styles="webglPolyStyle">
      <ol-source-vector
        :format="geoJson"
        crossOrigin="anonymous"
        url="https://openlayers.org/en/latest/examples/data/geojson/polygon-samples.geojson"
      />
    </ol-webgl-vector-layer>
  </ol-map>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

const center = ref([-73.3, 48.0]);
const projection = ref("EPSG:4326");
const zoom = ref(7);
const rotation = ref(0);

const format = inject("ol-format");
const geoJson = new format.GeoJSON();

const webglPointStyle = {
  "shape-points": 3,
  "shape-radius": 10,
  "shape-opacity": 0.5,
  "shape-fill-color": "blue",
};

const webglLineStyle = {
  "stroke-width": 5,
  "stroke-color": "rgba(24,86,34,0.7)",
};

const webglPolyStyle = {
  "stroke-width": 5,
  "stroke-color": "rgba(24,86,34,0.4)",
  "fill-color": "#0000ff40",
};
</script>
