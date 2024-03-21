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

    <ol-vector-layer
      :updateWhileAnimating="true"
      :updateWhileInteracting="true"
    >
      <ol-source-vector ref="vectorsource">
        <ol-animation-slide :duration="2000">
          <ol-feature v-for="index in 20" :key="index">
            <ol-geom-point
              :coordinates="arrayWith500Points[index - 1]"
            ></ol-geom-point>

            <ol-style>
              <ol-style-icon :src="starIcon" :scale="0.1"></ol-style-icon>
            </ol-style>
          </ol-feature>
        </ol-animation-slide>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";
import starIcon from "@/assets/star.png";
import { arrayWith500Points } from "./points";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(6);
</script>
