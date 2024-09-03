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
          <ol-geom-polygon
            :coordinates="[
              [
                [-98.844959, 19.691586],
                [-98.842749, 19.69098],
                [-98.84217, 19.693122],
                [-98.844358, 19.693667],
                [-98.844959, 19.691586],
              ],
              [
                [-98.84573034297229, 19.691206743587088],
                [-98.84236332851385, 19.69026183008994],
                [-98.84133866368556, 19.69351739026062],
                [-98.8447693829186, 19.694312532467134],
                [-98.84573034297229, 19.691206743587088],
              ],
            ]"
          ></ol-geom-polygon>
          <ol-style>
            <ol-style-stroke color="red" :width="2"></ol-style-stroke>
            <ol-style-fill color="rgba(255,0,0,0.2)"></ol-style-fill>
          </ol-style>
        </ol-feature>
        <ol-feature>
          <ol-geom-polygon
            :coordinates="[
              [
                [-98.848559, 19.680586],
                [-98.845949, 19.68098],
                [-98.846947, 19.68522],
                [-98.848358, 19.685667],
                [-98.846959, 19.683586],
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
                [-98.858559, 19.680586],
                [-98.855949, 19.68098],
                [-98.85617, 19.68522],
                [-98.858358, 19.685667],
                [-98.856959, 19.683586],
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
                [-98.856559, 19.680586],
                [-98.855949, 19.68098],
                [-98.855917, 19.68522],
                [-98.848558, 19.685667],
                [-98.848959, 19.678586],
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

const center = ref([-98.8449, 19.6869]);
const projection = ref("EPSG:4326");
const zoom = ref(15);

const linearGradient = {
  type: "linear",
  x0: 0,
  y0: 0,
  x1: 0,
  y1: 256,
  colorStops: [
    [0.1, "red"], // Start color
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
