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

    <ol-interaction-pointer
      @down="log('⬇️ down', $event)"
      @up="log('⬆️ up', $event)"
      @move="log('🚗 move', $event)"
      @drag="log('🤚🏽 drag', $event)"
    />
  </ol-map>
</template>

<script setup lang="ts">
import type { MapBrowserEvent } from "ol";
import { ref } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);

const log = (type: string, event: MapBrowserEvent<UIEvent>) => {
  console.log(type, event);
};
</script>
