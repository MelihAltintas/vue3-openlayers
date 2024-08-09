<template>
  Zoom is only active when the platform-modifier-key (the meta-key on Mac,
  ctrl-key otherwise) is pressed (no additional key e. g. shift-key) .
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

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-interaction-mouse-wheel-zoom :condition="condition" />
  </ol-map>
</template>

<script setup>
import { ref } from "vue";
import { platformModifierKeyOnly } from "ol/events/condition";

const center = ref([-102.13121, 40.2436]);
const projection = ref("EPSG:4326");
const zoom = ref(5);
const condition = ref(platformModifierKeyOnly);
</script>
