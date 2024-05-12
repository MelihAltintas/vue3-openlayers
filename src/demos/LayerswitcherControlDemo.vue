<template>
  <ol-map ref="mapRef" style="height: 400px" :controls="[]">
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer ref="jawgLayer" title="JAWG">
      <ol-source-xyz
        crossOrigin="anonymous"
        url="https://c.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token=87PWIbRaZAGNmYDjlYsLkeTVJpQeCfl2Y61mcHopxXqSdxXExoTLEv7dwqBwSWuJ"
      />
    </ol-tile-layer>

    <ol-layer-group ref="layerGroup" title="Stadia Maps">
      <ol-tile-layer title="Stamen Watercolor">
        <ol-source-stadia-maps layer="stamen_watercolor" />
      </ol-tile-layer>
      <ol-tile-layer title="Stamen Terrain Labels">
        <ol-source-stadia-maps layer="stamen_terrain_labels" />
      </ol-tile-layer>
    </ol-layer-group>

    <ol-tile-layer title="OSM">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-layerswitcher-control v-if="layerList.length > 0" />
  </ol-map>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type MapRef from "ol/Map";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const layerList = ref([]);
const jawgLayer = ref(null);
const layerGroup = ref(null);
const mapRef = ref<MapRef | null>(null);

onMounted(() => {
  layerList.value.push(jawgLayer.value.tileLayer);
  layerList.value.push(layerGroup.value.layerGroup);
});

onMounted(() => {
  console.log(mapRef.value);
});
</script>
