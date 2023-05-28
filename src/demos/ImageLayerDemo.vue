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
    <ol-attribution-control />
    <ol-image-layer id="xkcd">
      <ol-source-image-static
        :url="imgUrl"
        :imageSize="size"
        :imageExtent="extent"
        :projection="projection"
        :attributions="imgCopyright"
      ></ol-source-image-static>
    </ol-image-layer>
  </ol-map>
</template>

<script setup>
import { ref, reactive } from "vue";

const zoom = ref(2);
const rotation = ref(0);
const size = ref([1024, 968]);
const center = ref([size.value[0] / 2, size.value[1] / 2]);
const extent = ref([0, 0, ...size.value]);
const projection = reactive({
  code: "xkcd-image",
  units: "pixels",
  extent: extent,
});
const imgUrl = ref("https://imgs.xkcd.com/comics/online_communities.png");
const imgCopyright = ref('© <a href="http://xkcd.com/license.html">xkcd</a>');
</script>
