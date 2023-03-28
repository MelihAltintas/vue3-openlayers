<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" />

    <ol-webgl-tile-layer>
      <ol-source-osm />
    </ol-webgl-tile-layer>
  </ol-map>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const center = ref([-90, 50]);
    const zoom = ref(2);
    const rotation = ref(0);

    return {
      center,
      zoom,
      rotation,
    };
  },
};
</script>
