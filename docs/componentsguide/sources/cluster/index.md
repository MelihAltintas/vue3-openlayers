# ol-source-cluster

> Layer source to cluster vector data.

Works out of the box with point geometries.
For other geometry types, or if not all geometries should be considered for clustering, a custom `geometryFunction` can be defined.

<script setup>
import ClusterDemo from "@demos/ClusterDemo.vue"
</script>

<ClientOnly>
<ClusterDemo />
</ClientOnly>

## Usage

This example shows how to do clustering on 1000 point features.

```vue
<template>
  <ol-map
    ref="map"
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 800px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-cluster :distance="40">
        <ol-source-vector>
          <ol-feature v-for="index in 300" :key="index">
            <ol-geom-point
              :coordinates="[
                getRandomInRange(24, 45, 3),
                getRandomInRange(35, 41, 3),
              ]"
            ></ol-geom-point>
          </ol-feature>
        </ol-source-vector>
      </ol-source-cluster>

      <ol-style :overrideStyleFunction="overrideStyleFunction">
        <ol-style-stroke color="red" :width="2"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>

        <ol-style-circle :radius="10">
          <ol-style-fill color="#3399CC"></ol-style-fill>
          <ol-style-stroke color="#fff" :width="1"></ol-style-stroke>
        </ol-style-circle>
        <ol-style-text>
          <ol-style-fill color="#fff"></ol-style-fill>
        </ol-style-text>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([34, 39.13]);
const projection = ref("EPSG:4326");
const zoom = ref(6.8);
const rotation = ref(0);

const overrideStyleFunction = (feature, style) => {
  const clusteredFeatures = feature.get("features");
  const size = clusteredFeatures.length;

  style.getText().setText(size.toString());
};

const getRandomInRange = (from, to, fixed) => {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
};
</script>

<style>
.overlay-content {
  background: red !important;
  color: white;
  box-shadow: 0 5px 10px rgb(2 2 2 / 20%);
  padding: 10px 20px;
  font-size: 16px;
}
</style>
```

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_Cluster-Cluster.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_Cluster-Cluster.html) to see the available events tht will be fired.

```html
<ol-source-cluster @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_Cluster-Cluster.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-cluster :distance="40" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Cluster } from "ol/source";

const sourceRef = ref<{ source: Cluster }>(null);

onMounted(() => {
  const source: Cluster = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
