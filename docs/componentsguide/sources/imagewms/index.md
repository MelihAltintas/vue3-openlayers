# ol-source-image-wms

Source for WMS servers providing single, untiled images.

<script setup>
import ImageWMSDemo from "@demos/ImageWMSDemo.vue"
</script>

<ClientOnly>
<ImageWMSDemo />
</ClientOnly>

## Usage

```vue
<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />
    <ol-zoom-control />

    <ol-tile-layer :zIndex="1000">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-image-layer :zIndex="1001">
      <ol-source-image-wms
        url="https://ahocevar.com/geoserver/wms"
        :extent="[-13884991, 2870341, -7455066, 6338219]"
        layers="topp:states"
        serverType="geoserver"
      />
    </ol-image-layer>
  </ol-map>
</template>

<script lang="ts">
import { ref } from "vue";

const zoom = ref(4);
const rotation = ref(0);
const center = ref([-10997148, 4569099]);
</script>
```

## Properties

### attributions

- **Type**: `string`

Attributions

### crossOrigin

- **Type**: `string`
- **Default**: `ol-layer`

The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you want to access pixel data with the Canvas renderer.

### hidpi

- **Type**: `Boolean`
- **Default**: `true`

### serverType

- **Type**: `string`

The type of the remote WMS server: mapserver, geoserver or qgis. Only needed if hidpi is true.

### imageLoadFunction

- **Type**: `Function`

Optional function to load an image given a URL

### imageSmoothing

- **Type**: `Boolean`
- **Default**: `true`

Enable image smoothing.

### layers

- **Type**: `[String,Array]`

### styles

- **Type**: `[String,Array]`

### ratio

- **Type**: `number`
- **Default**: `1.5`

Ratio. 1 means image requests are the size of the map viewport, 2 means twice the width and height of the map viewport, and so on. Must be 1 or higher.

### resolutions

- **Type**: `Array<number>`

Resolutions. If specified, requests will be made for these resolutions only.

### url

- **Type**: `string`

WMS service URL.
