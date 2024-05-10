<template>
  <form>
    <fieldset>
      <label for="opacity">Layer Opacity</label>
      <input
        type="range"
        id="opacity"
        min="0"
        max="1"
        step="0.1"
        v-model.number="opacity"
      />
      <span class="description">{{ opacity }}</span>
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
      :constrainRotation="16"
    />

    <ol-vector-layer
      background="#1a2b39"
      ref="vectorSourceRef"
      :opacity="opacity"
    >
      <ol-source-vector :url="url" :format="geoJson">
        <ol-style :overrideStyleFunction="styleFn"></ol-style>
      </ol-source-vector>
    </ol-vector-layer>

    <ol-interaction-dragbox
      :condition="shiftKeyOnly"
      @boxstart="log('boxstart', $event)"
      @boxdrag="log('boxdrag', $event)"
      @boxend="log('boxend', $event)"
      @boxcancel="log('boxcancel', $event)"
    ></ol-interaction-dragbox>
  </ol-map>
</template>

<script setup lang="ts">
import type { Feature } from "ol";
import { Fill, Style } from "ol/style";
import { shiftKeyOnly } from "ol/events/condition";
import { ref, inject } from "vue";
import type { DragBoxEvent } from "ol/interaction/DragBox";

const opacity = ref(1);
const center = ref([0, 0]);
const projection = ref("EPSG:4326");
const zoom = ref(0);
const url = ref("https://openlayers.org/data/vector/ecoregions.json");
const format = inject("ol-format");
const geoJson = new format.GeoJSON();

function styleFn(feature: Feature) {
  return new Style({
    fill: new Fill({
      color: feature.get("COLOR_BIO") || "#eeeeee",
    }),
  });
}

function log(eventType: string, event: DragBoxEvent) {
  console.log(eventType, event);
}
</script>
