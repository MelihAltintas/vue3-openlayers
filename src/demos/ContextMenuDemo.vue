<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
    ref="map"
    :controls="[]"
  >
    <ol-view
      :center="center"
      :zoom="zoom"
      :projection="projection"
      ref="view"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-context-menu-control
      :items="contextMenuItems"
      @beforeopen="log('beforeopen', $event)"
      @open="log('open', $event)"
      @close="log('close', $event)"
      @add-menu-entry="log('add-menu-entry', $event)"
    />

    <ol-vector-layer>
      <ol-source-vector ref="markers"> </ol-source-vector>
      <ol-style>
        <ol-style-icon :src="marker" :scale="0.1"></ol-style-icon>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup lang="ts">
import type { ContextMenuEvent, Item } from "ol-contextmenu";
import { ref } from "vue";
import { Feature, type View } from "ol";
import { Point } from "ol/geom";
import type VectorSource from "ol/source/Vector";

import marker from "@/assets/marker.png";

const contextMenuItems = ref<Item[]>([]);
const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const markers = ref<{ source: VectorSource } | null>(null);
const view = ref<View | null>(null);

contextMenuItems.value = [
  {
    text: "Center map here",
    classname: "some-style-class", // add some CSS rules
    callback: (val) => {
      view.value?.setCenter(val.coordinate);
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
        geometry: new Point(val.coordinate),
      });
      markers.value?.source.addFeature(feature);
    },
  },
  "-", // this is a separator
];

function log(type: string, event: ContextMenuEvent) {
  console.log(type, event);
}
</script>
