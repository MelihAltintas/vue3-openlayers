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
          <ol-geom-multi-polygon
            :coordinates="[
              [
                [
                  [-98.844959, 19.691586],
                  [-98.842749, 19.69098],
                  [-98.84217, 19.693122],
                  [-98.844358, 19.693667],
                  [-98.844959, 19.691586],
                ],
              ],
              [
                [
                  [-98.84777, 19.684212],
                  [-98.849079, 19.680596],
                  [-98.845453, 19.679585],
                  [-98.844466, 19.683384],
                  [-98.84777, 19.684212],
                ],
              ],
            ]"
          ></ol-geom-multi-polygon>
          <ol-style>
            <ol-style-stroke
              :color="strokeColor"
              :width="strokeWidth"
            ></ol-style-stroke>
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
const strokeWidth = ref(10);
const strokeColor = ref("red");
</script>
