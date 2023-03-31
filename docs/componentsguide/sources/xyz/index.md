# ol-source-xyz

Layer source for tile data with URLs in a set XYZ format that are defined in a URL template.

ol-source-xyz allows you to use any tiled source from OpenStreetMaps to google maps.

<script setup>
import XYZSourceDemo from "@demos/XYZSourceDemo.vue"
</script>

<ClientOnly>
<XYZSourceDemo />
</ClientOnly>

## Usage

Example of ol-source-xyz loading OSM tiles (Note that if you need an OSM layer you're better off using ol-source-osm, this is for demonstration purposes only).

Example of loading google maps satellite tiles. Notice that this is only allowed in places that are publicly available to the internet (as opposed to being behind a password for example).

```vue
<template>
  <select v-model="selected">
    <option value="https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png">
      OSM
    </option>
    <option value="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}">
      GOOGLE
    </option>
  </select>
  {{ selected }}
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
      <ol-source-xyz :url="selected" />
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
    const selected = ref(
      "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    );
    return {
      center,
      projection,
      zoom,
      rotation,
      selected,
    };
  },
};
</script>
```

## Properties

### cacheSize

- **Type**: `number`
- **Default**: `2048`

### crossOrigin

- **Type**: `string`

### maxZoom

- **Type**: `number`
- **Default**: `28`

### minZoom

- **Type**: `number`
- **Default**: `0`

### opaque

- **Type**: `boolean`

### projection

- **Type**: `string`
- **Default**: `EPSG:3857`

### reprojectionErrorThreshold

- **Type**: `number`
- **Default**: `0.5`

### tilePixelRatio

- **Type**: `number`
- **Default**: `1`

### tileSize

- **Type**: `array`
- **Default**: `[256, 256]`

### tileKey

- **Type**: `string`

### url

- **Type**: `string`
- **Required**: `true`

URL template

### transition

- **Type**: `number`

Duration of the opacity transition for rendering. To disable the opacity transition, pass `0`.
