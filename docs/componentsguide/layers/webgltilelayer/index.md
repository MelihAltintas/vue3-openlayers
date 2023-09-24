# ol-webgl-tile-layer

This example uses WebGL to raster tiles on a map.

<script setup>
import GeoTIFFDemo from "@demos/GeoTIFFDemo.vue"
</script>
<ClientOnly>
<GeoTIFFDemo />
</ClientOnly>

## Usage

::: code-group

<<< ../../../../src/demos/GeoTIFFDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_layer_WebGLTile-WebGLTileLayer.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

**`visible`**

The value for `visible` is set to `true` by default.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_layer_WebGLTile-WebGLTileLayer.html) to see the available events tht will be fired.

```html
<ol-webgl-tile-layer @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_layer_WebGLTile-WebGLTileLayer.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-webgl-tile-layer ref="layerRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type WebGLTileLayer from "ol/layer/WebGLTile";

const layerRef = ref<{ tileLayer: WebGLTileLayer }>(null);

onMounted(() => {
  const layer: WebGLTileLayer = sourceRef.value?.tileLayer;
  // call your method on `layer`
});
</script>
```
