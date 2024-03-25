<template>
  <form>
    <fieldset>
      <label for="opacity-slider">Layer Opacity</label>
      <input
        type="range"
        id="opacity-slider"
        min="0"
        max="1"
        step="0.1"
        v-model.number="layerOpacity"
      />
      <span class="description">{{ layerOpacity }}</span>
    </fieldset>
    <fieldset>
      <label for="visibility-toggle">Layer Visibility:</label>
      <input type="checkbox" id="visibility-toggle" v-model="layerVisible" />
      <span> {{ layerVisible ? "Visible" : "Hidden" }}</span>
    </fieldset>
  </form>
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

    <ol-webgl-tile-layer
      :style="trueColor"
      :zIndex="1001"
      :opacity="layerOpacity"
      :visible="layerVisible"
    >
      <ol-source-geo-tiff
        :normalize="false"
        :sources="[
          {
            url: 'https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif',
          },
        ]"
        :wrapX="true"
      />
    </ol-webgl-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([0, 0]);
const zoom = ref(2);
const projection = ref("EPSG:4326");
const layerOpacity = ref(1);
const layerVisible = ref(true);

const max = 3000;
function normalize(value) {
  return ["/", value, max];
}

const red = normalize(["band", 1]);
const green = normalize(["band", 2]);
const blue = normalize(["band", 3]);

const trueColor = ref({
  color: ["array", red, green, blue, 1],
  gamma: 1.1,
});
</script>
