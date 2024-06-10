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
    <fieldset>
      <label for="visibility-toggle">Layer Visibility:</label>
      <input type="checkbox" id="visibility-toggle" v-model="visible" />
      <span> {{ visible ? "Visible" : "Hidden" }}</span>
    </fieldset>
  </form>

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

    <ol-tile-layer>
      <ol-source-osm crossOrigin="anonymous" />
    </ol-tile-layer>

    <!-- webgl points layer -->
    <ol-webgl-vector-layer
      :styles="webglPointStyle"
      :visible="visible"
      :opacity="opacity"
    >
      <ol-source-vector
        :format="geoJson"
        crossOrigin="anonymous"
        url="https://openlayers.org/en/latest/examples/data/geojson/point-samples.geojson"
      />
    </ol-webgl-vector-layer>

    <!-- webgl lines layer -->
    <ol-webgl-vector-layer
      :styles="webglLineStyle"
      :visible="visible"
      :opacity="opacity"
    >
      <ol-source-vector
        :format="geoJson"
        crossOrigin="anonymous"
        url="https://openlayers.org/en/latest/examples/data/geojson/line-samples.geojson"
      />
    </ol-webgl-vector-layer>

    <!-- webgl polygons layer -->
    <ol-webgl-vector-layer
      :styles="webglPolyStyle"
      :visible="visible"
      :opacity="opacity"
    >
      <ol-source-vector
        :format="geoJson"
        crossOrigin="anonymous"
        url="https://openlayers.org/en/latest/examples/data/geojson/polygon-samples.geojson"
      />
    </ol-webgl-vector-layer>
  </ol-map>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";

const opacity = ref(1);
const visible = ref(true);
const center = ref([-73.3, 48.0]);
const projection = ref("EPSG:4326");
const zoom = ref(7);

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
