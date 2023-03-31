# ol-source-osm

Source layer ready to load OpenStreetMaps tiles

<script setup>
import MapDemo from "@demos/MapDemo.vue"
</script>

<ClientOnly>
<MapDemo />
</ClientOnly>

## Usage

Loading a simple OSM base layer.

```vue
<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height:400px"
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
  </ol-map>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const center = ref([40, 40]);
    const projection = ref("EPSG:4326");
    const zoom = ref(8);
    const rotation = ref(0);

    return {
      center,
      projection,
      zoom,
      rotation,
    };
  },
};
</script>
```

## Properties

### attributions

- **Type**: `string`

Attributions.

### cacheSize

- **Type**: `number`
- **Default**: `2048`

Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.

### crossOrigin

- **Type**: `string`
- **Default**: `anonymous`

The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you want to access pixel data with the Canvas renderer.

### imageSmoothing

- **Type**: `boolean`
- **Default**: `true`
  Enable image smoothing.

### maxZoom

- **Type**: `number`
- **Default**: 19
  Max zoom.

### minZoom

- **Type**: `number`
- **Default**: 0
  Min zoom.

### opaque

- **Type**: `boolean`
- **Default**: true
  Whether the layer is opaque.

### reprojectionErrorThreshold

- **Type**: `number `
- **Default**: 0.5
  Maximum allowed reprojection error (in pixels). Higher values can increase reprojection performance, but decrease precision.

### transition

- **Type**: `number`
- **Default**: 250
  Duration of the opacity transition for rendering. To disable the opacity transition, pass transition: 0.

### url

- **Type**: `string`
- **Default**: `https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png`
  URL template. Must include {x}, {y} or {-y}, and {z} placeholders.

### wrapX

- **Type**: `boolean `
- **Default**: true
  Whether to wrap the world horizontally.
