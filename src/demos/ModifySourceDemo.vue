<template>
  <ol-map style="height: 400px">
    <ol-view :center="center" :zoom="5" :projection="projection" />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector :features="zones">
        <ol-style>
          <ol-style-stroke color="blue" :width="3" />
          <ol-style-fill color="rgba(0, 0, 255, 0.4)" />
        </ol-style>
        <ol-interaction-modify />
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";
import { GeoJSON } from "ol/format";

const center = ref([-102.13121, 40.2436]);
const projection = ref("EPSG:4326");

const zones = ref([]);

zones.value = new GeoJSON().readFeatures({
  type: "FeatureCollection",
  crs: {
    type: "name",
    properties: {
      name: projection.value,
    },
  },
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-103.85636392303468, 38.10970692739486],
            [-103.86770698495866, 33.218572724914544],
            [-98.20654544301988, 33.6532810221672],
            [-98.4408283538437, 38.31894739375114],
            [-103.85636392303468, 38.10970692739486],
          ],
        ],
      },
    },
  ],
});
</script>
