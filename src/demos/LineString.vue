<template>
  <button class="btn-default" @click="addCoordinate" type="button">
    Add coordinate
  </button>

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
        <ol-feature ref="profileFeatureRef">
          <ol-geom-line-string :coordinates="coordinates"></ol-geom-line-string>
          <ol-style>
            <ol-style-stroke
              :color="strokeColor"
              :width="strokeWidth"
            ></ol-style-stroke>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>

    <ol-profile-control
      v-if="profileFeatureRef?.feature"
      :feature="profileFeatureRef.feature"
      @over="over"
      @out="out"
    ></ol-profile-control>
  </ol-map>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const center = ref([116.54875, 40.45064]);
const projection = ref("EPSG:4326");
const zoom = ref(17);
const strokeWidth = ref(10);
const strokeColor = ref("red");
const profileFeatureRef = ref(null);
const coordinates = ref([
  [116.544921, 40.451633],
  [116.545264, 40.451649],
  [116.545865, 40.451698],
  [116.546144, 40.451551],
  [116.546337, 40.451274],
  [116.546788, 40.451143],
  [116.547324, 40.451078],
  [116.547539, 40.450996],
  [116.547839, 40.450719],
  [116.54844, 40.450506],
  [116.548933, 40.450604],
  [116.549448, 40.450604],
  [116.550242, 40.450376],
  [116.550865, 40.450163],
  [116.551702, 40.449935],
  [116.552581, 40.449576],
]);

function addCoordinate() {
  const lastCoordinate = coordinates.value[coordinates.value.length - 1];
  coordinates.value.push([
    lastCoordinate[0] + Math.random() * 0.0005,
    lastCoordinate[1] - Math.random() * 0.0005,
  ]);
}

function over(event) {
  console.log(event);
}

function out(event) {
  console.log(event);
}

onMounted(() => {
  console.log(profileFeatureRef.value);
});
</script>
