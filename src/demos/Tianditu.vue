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
      <ol-source-tianditu
        layerType="vec"
        projection="EPSG:4326"
        tk="dbed7e0f96194affd82763e159de4c50"
        :hidpi="true"
      ></ol-source-tianditu>
    </ol-tile-layer>

    <ol-tile-layer>
      <ol-source-tianditu
        :isLabel="true"
        layerType="vec"
        projection="EPSG:4326"
        tk="dbed7e0f96194affd82763e159de4c50"
        :hidpi="true"
      ></ol-source-tianditu>
    </ol-tile-layer>
  </ol-map>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const center = ref([116.41124529391394, 39.953530444730816]);
    const projection = ref("EPSG:4326");
    const zoom = ref(8);
    const rotation = ref(0);

    return {
      center,
      projection,
      zoom,
      rotation,
    };
  },
};
</script>
