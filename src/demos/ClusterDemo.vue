<template>
  <ol-map
    ref="map"
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 800px"
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
      <ol-source-cluster :distance="40">
        <ol-source-vector>
          <ol-feature v-for="index in 300" :key="index">
            <ol-geom-point
              :coordinates="arrayWith500Points[index - 1]"
            ></ol-geom-point>
          </ol-feature>
        </ol-source-vector>
      </ol-source-cluster>

      <ol-style :overrideStyleFunction="overrideStyleFunction">
        <ol-style-stroke color="red" :width="2"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>

        <ol-style-circle :radius="10">
          <ol-style-fill color="#3399CC"></ol-style-fill>
          <ol-style-stroke color="#fff" :width="1"></ol-style-stroke>
        </ol-style-circle>
        <ol-style-text>
          <ol-style-fill color="#fff"></ol-style-fill>
        </ol-style-text>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";
import { arrayWith500Points } from "./points";

const center = ref([34, 39.13]);
const projection = ref("EPSG:4326");
const zoom = ref(6.8);
const rotation = ref(0);

const overrideStyleFunction = (feature, style, resolution) => {
  console.log({ feature, style, resolution });
  const clusteredFeatures = feature.get("features");
  const size = clusteredFeatures.length;
  style.getText().setText(size.toString());
  return style;
};
</script>
