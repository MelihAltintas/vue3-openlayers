<template>
  <ol-map ref="map" style="height: 400px">
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer title="OSM">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature ref="animationPath">
          <ol-geom-line-string :coordinates="path"></ol-geom-line-string>
          <ol-style-flowline
            color="red"
            color2="yellow"
            :width="10"
            :width2="10"
            :arrow="1"
          />
        </ol-feature>
        <ol-animation-path
          v-if="animationPath"
          :path="animationPath?.feature"
          :duration="4000"
          :repeat="10"
        >
          <ol-feature>
            <ol-geom-point :coordinates="path[0]"></ol-geom-point>
            <ol-style>
              <ol-style-circle :radius="10">
                <ol-style-fill color="blue"></ol-style-fill>
                <ol-style-stroke color="blue" :width="2"></ol-style-stroke>
              </ol-style-circle>
            </ol-style>
          </ol-feature>
        </ol-animation-path>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type AnimationPath from "ol-ext/featureanimation/Path";

const center = ref([29, 44.5]);
const projection = ref("EPSG:4326");
const zoom = ref(6);
const animationPath = ref<{ feature: AnimationPath } | null>(null);

const path = ref([
  [25.6064453125, 44.73302734375001],
  [27.759765625, 44.75500000000001],
  [28.287109375, 43.32677734375001],
  [30.55029296875, 46.40294921875001],
  [31.69287109375, 43.04113281250001],
]);
</script>
