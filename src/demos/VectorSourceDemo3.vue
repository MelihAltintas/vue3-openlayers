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
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector :url="url" :format="TopoJSON" :projection="projection">
      </ol-source-vector>
      <ol-style>
        <ol-style-stroke color="red" :width="2"></ol-style-stroke>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref([4.4764595, 50.5010789]);
const projection = ref("EPSG:4326");
const zoom = ref(7.5);
const rotation = ref(0);

const url =
  "https://raw.githubusercontent.com/bmesuere/belgium-topojson/master/belgium.json";

const format = inject("ol-format");
const TopoJSON = new format.TopoJSON({
  // don't want to render the full world polygon (stored as 'land' layer),
  // which repeats all countries
  layers: ["arrondissements", "provinces"],
});
</script>
