<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
    ref="map"
  >
    <ol-view
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
      ref="view"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-context-menu-control :items="contextMenuItems" />

    <ol-vector-layer>
      <ol-source-vector ref="markers"> </ol-source-vector>
      <ol-style>
        <ol-style-icon :src="marker" :scale="0.1"></ol-style-icon>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

import marker from "@/assets/marker.png";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);

const contextMenuItems = ref([]);

const markers = ref(null);
const view = ref(null);

const Feature = inject("ol-feature");
const Geom = inject("ol-geom");

contextMenuItems.value = [
  {
    text: "Center map here",
    classname: "some-style-class", // add some CSS rules
    callback: (val) => {
      view.value.setCenter(val.coordinate);
    }, // `center` is your callback function
  },
  {
    text: "Add a Marker",
    classname: "some-style-class", // you can add this icon with a CSS class
    // instead of `icon` property (see next line)
    icon: marker, // this can be relative or absolute
    callback: (val) => {
      console.log(val);
      const feature = new Feature({
        geometry: new Geom.Point(val.coordinate),
      });
      markers.value.source.addFeature(feature);
    },
  },
  "-", // this is a separator
];
</script>
