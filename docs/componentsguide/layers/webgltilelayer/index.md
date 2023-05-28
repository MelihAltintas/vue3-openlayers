# ol-webgl-tile-layer

This example uses WebGL to raster tiles on a map.

<script setup>
import WebglTileLayerDemo from "@demos/WebglTileLayerDemo.vue"
</script>
<ClientOnly>
<WebglTileLayerDemo />
</ClientOnly>

## Usage

```vue
<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" />

    <ol-webgl-tile-layer>
      <ol-source-osm />
    </ol-webgl-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([-90, 50]);
const zoom = ref(2);
const rotation = ref(0);
</script>
```

## Properties

### className

- **Type**: `string`
- **Default**: `ol-layer`

A CSS class name to set to the layer element.

### opacity

- **Type**: `number `
- **Default**: `1`

Opacity (0, 1).

### visible

- **Type**: `boolean`
- **Default**: `true`

Visibility.

### extent

- **Type**: `Array`

The bounding extent for layer rendering. The layer will not be rendered outside of this extent.

### zIndex

- **Type**: `number`

The z-index for layer rendering. At rendering time, the layers will be ordered, first by Z-index and then by position.

### minResolution

- **Type**: `number`

The minimum resolution (inclusive) at which this layer will be visible.

### maxResolution

- **Type**: `number`

The maximum resolution (exclusive) below which this layer will be visible.

### minZoom

- **Type**: `number`

The minimum view zoom level (exclusive) above which this layer will be visible.

### maxZoom

- **Type**: `number`

The maximum view zoom level (inclusive) at which this layer will be visible.

### preload

- **Type**: `number`
- **Default**: `0`
  Low-resolution tiles up to preload level will be load.
