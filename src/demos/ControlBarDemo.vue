<template>
  <ol-map
    ref="map"
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 800px"
    :controls="[]"
  >
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />
    <ol-tile-layer ref="osmLayer" title="OSM">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-control-bar>
      <ol-toggle-control
        html="🔘"
        className="edit"
        title="Point"
        :onToggle="(active) => changeDrawType(active, 'Point')"
      />
      <ol-toggle-control
        html="🔹"
        className="edit"
        title="Polygon"
        :onToggle="(active) => changeDrawType(active, 'Polygon')"
      />
      <ol-toggle-control
        html="🟢"
        className="edit"
        title="Circle"
        :onToggle="(active) => changeDrawType(active, 'Circle')"
      />
      <ol-toggle-control
        html="〰️"
        className="edit"
        title="LineString"
        :onToggle="(active) => changeDrawType(active, 'LineString')"
      />
      <ol-videorecorder-control @stop="videoStopped" />
      <ol-printdialog-control />
    </ol-control-bar>

    <ol-interaction-draw
      :type="drawType"
      @drawend="drawend"
      @drawstart="drawstart"
    >
    </ol-interaction-draw>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([34, 39.13]);
const projection = ref("EPSG:4326");
const zoom = ref(6);
const view = ref(null);

const drawEnable = ref(false);
const drawType = ref("Point");

const changeDrawType = (active, draw) => {
  drawEnable.value = active;
  drawType.value = draw;
};

const drawstart = (event) => {
  console.log(event);
};

const drawend = (event) => {
  console.log(event);
};

const videoStopped = (event) => {
  console.log(event);
};

const osmLayer = ref(null);
</script>
