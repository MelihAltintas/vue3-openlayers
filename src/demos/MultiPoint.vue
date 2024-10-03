<template>
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
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-multi-point
            :coordinates="[
              [116.547539, 40.450996],
              [116.544639, 40.451996],
              [116.546739, 40.451996],
              [116.546739, 40.448996],
            ]"
          ></ol-geom-multi-point>
          <ol-style>
            <ol-style-circle :radius="radius">
              <ol-style-fill :color="fillColor"></ol-style-fill>
              <ol-style-stroke
                :color="strokeColor"
                :width="strokeWidth"
              ></ol-style-stroke>
            </ol-style-circle>
          </ol-style>
        </ol-feature>

        <ol-feature>
          <ol-geom-polygon
            :coordinates="[
              [
                [116.54825, 40.44664],
                [116.55125, 40.44664],
                [116.55175, 40.45364],
                [116.54875, 40.45364],
                [116.54825, 40.44664],
              ],
            ]"
          ></ol-geom-polygon>
          <ol-style>
            <ol-style-fill color="red" />
          </ol-style>
        </ol-feature>

        <ol-feature>
          <ol-geom-polygon
            :coordinates="[
              [
                [116.55325, 40.44364],
                [116.55625, 40.44364],
                [116.55675, 40.45164],
                [116.55375, 40.45164],
                [116.55325, 40.44364],
              ],
            ]"
          ></ol-geom-polygon>
          <ol-style>
            <ol-style-fill :gradient="linearGradient" />
          </ol-style>
        </ol-feature>

        <ol-feature>
          <ol-geom-polygon
            :coordinates="[
              [
                [116.53415, 40.45154],
                [116.54245, 40.45154],
                [116.54385, 40.44664],
                [116.53555, 40.44664],
                [116.53415, 40.45154],
              ],
            ]"
          ></ol-geom-polygon>
          <ol-style>
            <ol-style-fill :gradient="radialGradient" />
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([116.54875, 40.45064]);
const projection = ref("EPSG:4326");
const zoom = ref(15);
const radius = ref(10);
const strokeWidth = ref(4);
const strokeColor = ref("red");
const fillColor = ref("white");

const linearGradient = {
  type: "linear",
  x0: 0,
  y0: 0,
  x1: 0,
  y1: 256,
  colorStops: [
    [0, "red"], // Start color
    [0.5, "yellow"], // Middle color
    [1, "green"], // End color
  ],
};

const radialGradient = {
  type: "radial",
  x0: 128,
  y0: 128,
  r0: 0,
  x1: 128,
  y1: 128,
  r1: 128,
  colorStops: [
    [0, "blue"], // Center color
    [0.5, "cyan"], // Middle color
    [1, "white"], // Edge color
  ],
};
</script>
