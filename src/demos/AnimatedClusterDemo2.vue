<template>
  <label for="count">Marker:</label>
  <input type="number" id="count" v-model.number="count" max="50000" />
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    renderer="webgl"
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

    <ol-interaction-clusterselect @select="featureSelected" :pointRadius="20">
      <ol-style>
        <ol-style-stroke color="green" :width="5"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.5)"></ol-style-fill>
        <ol-style-icon :src="markerIcon" :scale="0.05"></ol-style-icon>
      </ol-style>
    </ol-interaction-clusterselect>

    <ol-animated-clusterlayer :animationDuration="500" :distance="40">
      <ol-source-vector
        :features="geoJsonFeatures"
        :format="geoJson"
        @featuresloadstart="featuresloadstart"
        @featuresloadend="featuresloadend"
        @featuresloaderror="featuresloaderror"
      />

      <ol-style :overrideStyleFunction="overrideStyleFunction">
        <ol-style-stroke color="red" :width="2"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>

        <ol-style-circle :radius="20">
          <ol-style-stroke
            color="black"
            :width="15"
            :lineDash="[]"
            lineCap="butt"
          ></ol-style-stroke>
          <ol-style-fill color="black"></ol-style-fill>
        </ol-style-circle>

        <ol-style-text>
          <ol-style-fill color="white"></ol-style-fill>
        </ol-style-text>
      </ol-style>
    </ol-animated-clusterlayer>
  </ol-map>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import markerIcon from "@/assets/marker.png";
import { arrayWith50000Points } from "./points";
import { GeoJSON } from "ol/format";
import type { FeatureLike } from "ol/Feature";
import type { SelectEvent } from "ol/interaction/Select";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(5);
const rotation = ref(0);
const count = ref(1000);

const geoJson = new GeoJSON();

const geoJsonFeatures = computed(() => {
  const features = Array.from({ length: count.value }, (_, i) => {
    return {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: arrayWith50000Points[i],
      },
    };
  });

  const providerFeatureCollection = {
    type: "FeatureCollection",
    features,
  };

  return geoJson.readFeatures(providerFeatureCollection);
});

const overrideStyleFunction = (feature: FeatureLike, style) => {
  const clusteredFeatures = feature.get("features");
  const size = clusteredFeatures.length;

  const color = size > 20 ? "192,0,0" : size > 8 ? "255,128,0" : "0,128,0";
  const radius = Math.max(8, Math.min(size, 20));
  const dash = (2 * Math.PI * radius) / 6;
  const calculatedDash = [0, dash, dash, dash, dash, dash, dash];

  style.getImage().getStroke().setLineDash(dash);
  style
    .getImage()
    .getStroke()
    .setColor("rgba(" + color + ",0.5)");
  style.getImage().getStroke().setLineDash(calculatedDash);
  style
    .getImage()
    .getFill()
    .setColor("rgba(" + color + ",1)");

  style.getImage().setRadius(radius);

  style.getText().setText(size.toString());
  return style;
};

const featureSelected = (event: SelectEvent) => {
  console.log(event);
};
function featuresloadstart() {
  console.log("features load start");
}
function featuresloaderror() {
  console.log("features load error");
}
function featuresloadend() {
  console.log("features load end");
}
</script>

<style scoped>
input {
  margin: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  border: 1px solid black;
  width: 100px;
}
</style>
