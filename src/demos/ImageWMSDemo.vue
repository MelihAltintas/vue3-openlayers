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
    <ol-zoom-control />

    <ol-tile-layer :zIndex="1000">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-image-layer :zIndex="1001">
      <ol-source-image-wms
        url="https://ahocevar.com/geoserver/wms"
        :extent="[-13884991, 2870341, -7455066, 6338219]"
        layers="topp:states"
        serverType="geoserver"
      />
    </ol-image-layer>
  </ol-map>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const zoom = ref(4);
    const rotation = ref(0);
    const center = ref([-10997148, 4569099]);

    return {
      center,
      zoom,
      rotation,
    };
  },
};
</script>
