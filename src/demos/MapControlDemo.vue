<template>
  <ul class="checkbox-list">
    <li>
      <input
        type="checkbox"
        id="fullscreencontrol"
        v-model="fullscreencontrol"
      />
      <label for="fullscreencontrol">ol-fullscreen-control</label>
    </li>
    <li>
      <input type="checkbox" id="attribution" v-model="attributioncontrol" />
      <label for="attribution">ol-attribution-control</label>
    </li>
    <li>
      <input type="checkbox" id="zoom" v-model="zoomcontrol" />
      <label for="zoom">ol-zoom-control</label>
    </li>
    <li>
      <input type="checkbox" id="zoomtoextent" v-model="zoomtoextentcontrol" />
      <label for="zoomtoextent">ol-zoomtoextent-control</label>
    </li>
    <li>
      <input type="checkbox" id="zoomslider" v-model="zoomslidercontrol" />
      <label for="zoomslider">ol-zoomslider-control</label>
    </li>
    <li>
      <input type="checkbox" id="scaleline" v-model="scalelinecontrol" />
      <label for="scaleline">ol-scaleline-control</label>
    </li>
    <li>
      <input type="checkbox" id="overviewmap" v-model="overviewmapcontrol" />
      <label for="overviewmap">ol-overviewmap-control</label>
    </li>
    <li>
      <input
        type="checkbox"
        id="mousepositioncontrol"
        v-model="mousepositioncontrol"
      />

      <label for="mousepositioncontrol">ol-mouseposition-control</label>
    </li>
    <li>
      <input type="checkbox" id="rotatecontrol" v-model="rotatecontrol" />
      <label for="rotatecontrol">ol-rotate-control</label>
    </li>
    <li>
      <input type="checkbox" id="swipecontrol" v-model="showSwipeControl" />
      <label for="swipecontrol">ol-swipe-control</label>
    </li>
    <li>
      <input
        type="checkbox"
        id="layerswitchercontrol"
        v-model="showLayerSwitcherControl"
      />
      <label for="layerswitchercontrol">ol-layerswitcher-control</label>
    </li>
    <li>
      <input
        type="checkbox"
        id="layerswitcherimagecontrol"
        v-model="showLayerSwitcherImageControl"
      />
      <label for="layerswitcherimagecontrol"
        >ol-layerswitcherimage-control</label
      >
    </li>
    <li>
      <input
        type="checkbox"
        id="printdialogcontrol"
        v-model="showPrintDialogControl"
      />
      <label for="printdialogcontrol">ol-printdialog-control</label>
    </li>
    <li>
      <input type="checkbox" id="togglecontrol" v-model="showToggleControl" />
      <label for="togglecontrol">ol-toggle-control</label>
    </li>

    <li>
      <input
        type="checkbox"
        id="videorecordercontrol"
        v-model="showVideoRecorderControl"
      />
      <label for="videorecordercontrol">ol-videorecorder-control</label>
    </li>
  </ul>

  <ol-map
    ref="map"
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
      v-if="showSwipeControl && layerList.length > 0"
      :layerList="layerList"
    />

    <ol-layerswitcher-control
      v-if="showLayerSwitcherControl && layerList.length > 0"
    />

    <ol-layerswitcherimage-control
      v-if="showLayerSwitcherImageControl && layerList.length > 0"
    />

    <ol-printdialog-control v-if="showPrintDialogControl" />

    <ol-toggle-control
      v-if="showToggleControl"
      :html="'log'"
      :onToggle="($event) => console.log('ol-toggle-control: onToggle', $event)"
    />

    <ol-videorecorder-control
      v-if="showVideoRecorderControl"
      @stop="videoStopped"
    />

    <ol-tile-layer ref="jawgLayer" title="JAWG">
      <ol-source-xyz
        crossOrigin="anonymous"
        url="https://c.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token=87PWIbRaZAGNmYDjlYsLkeTVJpQeCfl2Y61mcHopxXqSdxXExoTLEv7dwqBwSWuJ"
      />
    </ol-tile-layer>

    <ol-tile-layer ref="bingLayer">
      <ol-source-bingmaps
        apiKey="AjtUzWJBHlI3Ma_Ke6Qv2fGRXEs0ua5hUQi54ECwfXTiWsitll4AkETZDihjcfeI"
        :imagerySet="'CanvasDark'"
      />
    </ol-tile-layer>

    <ol-tile-layer ref="osmLayer">
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref, onMounted } from "vue";
const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);
const layerList = ref([]);
const jawgLayer = ref(null);
const osmLayer = ref(null);
const bingLayer = ref(null);
const swipeControl = ref(null);

const fullscreencontrol = ref(true);
const attributioncontrol = ref(true);
const zoomcontrol = ref(true);
const zoomslidercontrol = ref(true);
const zoomtoextentcontrol = ref(true);
const scalelinecontrol = ref(true);
const overviewmapcontrol = ref(true);
const mousepositioncontrol = ref(true);
const rotatecontrol = ref(true);
const showSwipeControl = ref(true);
const showLayerSwitcherControl = ref(true);
const showLayerSwitcherImageControl = ref(true);
const showPrintDialogControl = ref(true);
const showToggleControl = ref(true);
const showVideoRecorderControl = ref(true);

const videoStopped = (event) => {
  console.log(event);
};

onMounted(() => {
  layerList.value.push(jawgLayer.value.tileLayer);
  layerList.value.push(osmLayer.value.tileLayer);
  console.log(layerList.value);
});
</script>

<style>
ul.checkbox-list {
  columns: 2;
  padding: 0;
}
ul.checkbox-list > li {
  list-style: none;
}
</style>
