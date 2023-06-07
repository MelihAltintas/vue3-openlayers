# ol-source-tile-wms

Source for WMS servers providing tiled images.

<script setup>
import TileWMSDemo from "@demos/TileWMSDemo.vue"
</script>

<ClientOnly>
<TileWMSDemo />
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

    <ol-tile-layer :zIndex="1001">
      <ol-source-tile-wms
        url="https://ahocevar.com/geoserver/wms"
        :extent="[-13884991, 2870341, -7455066, 6338219]"
        layers="topp:states"
        serverType="geoserver"
        :transition="0"
      />
    </ol-tile-layer>
  </ol-map>
</template>

<script setup lang="ts">
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

### cacheSize

- **Type**: `Number`

### crossOrigin

- **Type**: `string`
- **Default**: `ol-layer`

The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you want to access pixel data with the Canvas renderer.

### interpolate

- **Type**: `Boolean`
- **Default**: `true`

### styles

- **Type**: `[String,Array]`

### layers

- **Type**: `[String,Array]`

### hidpi

- **Type**: `Boolean`
- **Default**: `true`

### projection

- **Type**: `string`
- **Default**: `EPSG:3857`

### reprojectionErrorThreshold

- **Type**: `number `
- **Default**: 0.5

Maximum allowed reprojection error (in pixels). Higher values can increase reprojection performance, but decrease precision.

### tileGrid

- **Type**: `TileGrid|undefined`
- **Default**: 0.5

Tile grid. Base this on the resolutions, tilesize and extent supported by the server. If this is not defined, a default grid will be used: if there is a projection extent, the grid will be based on that; if not, a grid based on a global extent with origin at 0,0 will be used.

### serverType

- **Type**: `string`

The type of the remote WMS server: mapserver, geoserver or qgis. Only needed if hidpi is true.

### tileLoadFunction

- **Type**: `Function`

### url

- **Type**: `string`

WMS service URL.

### urls

- **Type**: `Array.<string>`

An array of URLs. Requests will be distributed among the URLs in this array.

### params

- **Type**: `Object.<string, *>`

WMS request parameters.

### wrapX

- **Type**: `Boolean`
- **Default**: `false`

### transition

- **Type**: `number`
- **Default**: 250
  Duration of the opacity transition for rendering. To disable the opacity transition, pass transition: 0.
