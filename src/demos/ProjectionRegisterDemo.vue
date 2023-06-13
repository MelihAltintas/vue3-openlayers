<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-projection-register
      :projectionName="projectionName"
      :projectionDef="projectionDef"
      :projectionExtent="projectionExtent"
    />
    <ol-view
      ref="view"
      :center="center"
      :projection="projectionName"
      :extend="projectionExtent"
      :zoom="3"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
const center = [312234.8270497762, 2636116.2213047906];
const projectionName = "EPSG:32640";
const projectionDef = "+proj=utm +zone=40 +datum=WGS84 +units=m +no_defs";
const projectionExtent = [
  -98570.85212537996, 2468701.5790765425, 683268.1076887846, 2874585.9453238174,
];
</script>
