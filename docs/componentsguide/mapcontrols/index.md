---
aside: false
---

# Map Controls

A control is a visible widget with a DOM element in a fixed position on the screen. They can involve user input (buttons), or be informational only; the position is determined using CSS. By default these are placed in the container with CSS class name ol-overlaycontainer-stopevent, but can use any outside DOM element.

<script setup>
import MapControlDemo from "@demos/MapControlDemo.vue"
</script>
<ClientOnly>
<MapControlDemo />
</ClientOnly>

# Control List

- `ol-attribution-control`
- `ol-context-menu`
- `ol-fullscreen-control`
- `ol-mouseposition-control`
- `ol-overviewmap-control`
- `ol-rotate-control`
- `ol-scaleline-control`
- `ol-swipe-control`
- `ol-zoom-control`
- `ol-zoomslider-control`
- `ol-zoomtoextent-control`

# Usage

```vue
<template>
  <input type="checkbox" id="fullscreencontrol" v-model="fullscreencontrol" />
  <label for="fullscreencontrol">fullscreencontrol</label>
  <input type="checkbox" id="attribution" v-model="attributioncontrol" />
  <label for="attribution">attributioncontrol</label>
  <input type="checkbox" id="zoom" v-model="zoomcontrol" />
  <label for="zoom">zoomcontrol</label>
  <input type="checkbox" id="zoomtoextent" v-model="zoomtoextentcontrol" />
  <label for="zoomtoextent">zoomtoextentcontrol</label>
  <input type="checkbox" id="zoomslider" v-model="zoomslidercontrol" />
  <label for="zoomslider">zoomslidercontrol</label>
  <input type="checkbox" id="scaleline" v-model="scalelinecontrol" />
  <label for="scaleline">scalelinecontrol</label>
  <input type="checkbox" id="overviewmap" v-model="overviewmapcontrol" />
  <label for="overviewmap">overviewmapcontrol</label>
  <input
    type="checkbox"
    id="mousepositioncontrol"
    v-model="mousepositioncontrol"
  />
  <label for="mousepositioncontrol">mousepositioncontrol</label>
  <input type="checkbox" id="rotatecontrol" v-model="rotatecontrol" />
  <label for="rotatecontrol">rotatecontrol</label>
  <input type="checkbox" id="swipecontrol" v-model="showSwipeControl" />
  <label for="swipecontrol">swipe-control</label>

  <ol-map
    ref="map"
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height:400px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-fullscreen-control v-if="fullscreencontrol" />
    <ol-mouseposition-control v-if="mousepositioncontrol" />
    <ol-attribution-control v-if="attributioncontrol" />

    <ol-overviewmap-control v-if="overviewmapcontrol">
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
    </ol-overviewmap-control>

    <ol-scaleline-control v-if="scalelinecontrol" />
    <ol-rotate-control v-if="rotatecontrol" />
    <ol-zoom-control v-if="zoomcontrol" />
    <ol-zoomslider-control v-if="zoomslidercontrol" />
    <ol-zoomtoextent-control
      v-if="zoomtoextentcontrol"
      :extent="[23.906, 42.812, 46.934, 34.597]"
      tipLabel="Fit to Turkey"
    />

    <ol-swipe-control
      ref="swipeControl"
      v-if="showSwipeControl"
      :layerList="layerList && layerList.length > 0"
    />

    <ol-tile-layer ref="jawgLayer" title="JAWG">
      <ol-source-xyz
        crossOrigin="anonymous"
        url="https://c.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token=87PWIbRaZAGNmYDjlYsLkeTVJpQeCfl2Y61mcHopxXqSdxXExoTLEv7dwqBwSWuJ"
      />
    </ol-tile-layer>

    <ol-tile-layer ref="osmLayer">
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const center = ref([40, 40]);
    const projection = ref("EPSG:4326");
    const zoom = ref(8);
    const rotation = ref(0);
    const layerList = ref([]);
    const jawgLayer = ref(null);
    const osmLayer = ref(null);
    const swipeControl = ref(null);

    onMounted(() => {
      layerList.value.push(jawgLayer.value.tileLayer);
      layerList.value.push(osmLayer.value.tileLayer);
      console.log(layerList.value);
    });

    return {
      center,
      projection,
      zoom,
      rotation,
      layerList,
      jawgLayer,
      osmLayer,
      swipeControl,
    };
  },
  data() {
    return {
      fullscreencontrol: true,
      attributioncontrol: true,
      zoomcontrol: true,
      zoomslidercontrol: true,
      zoomtoextentcontrol: true,
      scalelinecontrol: true,
      overviewmapcontrol: true,
      mousepositioncontrol: true,
      rotatecontrol: true,
      showSwipeControl: true,
    };
  },
};
</script>
```
