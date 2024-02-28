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

    <ol-webgl-vector-layer :styles="webglLineStyle">
      <ol-source-webglvector
        :format="geoJson"
        crossOrigin="anonymous"
        url="https://openlayers.org/en/latest/examples/data/geojson/switzerland.geojson"
      />
    </ol-webgl-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref( [8.43, 46.82] );
const projection = ref("EPSG:4326");
const zoom = ref(7);
const rotation = ref(0);

const format = inject("ol-format");
const geoJson = new format.GeoJSON();

const webglLineStyle = {
    'stroke-width': 10,
    'stroke-color': 'rgba(24,86,34,0.7)',
};
</script>

