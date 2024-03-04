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

    <ol-webgl-vector-layer :styles="webglPointStyle">
      <ol-source-webglvector
        :format="geoJson"
        crossOrigin="anonymous"
        url="https://openlayers.org/en/latest/examples/data/geojson/point-samples.geojson"
      />
    </ol-webgl-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref( [ -75.3, 48.0] );
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);

const format = inject("ol-format");
const geoJson = new format.GeoJSON();

const webglPointStyle = {
    'shape-points': 3,
    'shape-radius': 20,
    'shape-opacity': 0.5,
    'shape-fill-color': 'blue',
};
</script>

