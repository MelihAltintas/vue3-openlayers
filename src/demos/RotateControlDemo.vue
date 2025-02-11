<template>
  <button class="btn-default" type="button" @click="rotateRight">
    Rotate right
  </button>
  <ol-map style="height: 400px" :controls="[]">
    <ol-view ref="viewRef" :center="center" :zoom="zoom" :rotation="rotation" />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
    <ol-rotate-control :autoHide="false" />
  </ol-map>
</template>

<script setup>
import { ref } from "vue";
const center = ref([14200000, 4130000]);
const zoom = ref(6);
const viewRef = ref(null);
const rotation = ref(Math.PI / 6);

function rotateRight() {
  viewRef.value?.adjustRotation(0.1);
}
</script>
