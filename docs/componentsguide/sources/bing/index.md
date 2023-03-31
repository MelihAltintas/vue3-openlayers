# ol-source-bingmaps

> Layer source for [Bing Maps API](https://www.bing.com/maps)

`ol-source-bingmaps` adds ability to display tile data from Bing Maps. To use
this source you should get **API key** at https://www.bingmapsportal.com.

<script setup>
import BingMapsDemo from "@demos/BingMapsDemo.vue"
</script>

<ClientOnly>
<BingMapsDemo />
</ClientOnly>

## Usage

Example of `ol-source-bingmaps` usage

```vue
<template>
  <select v-model="selected">
    <option value="AerialWithLabels">AerialWithLabels</option>
    <option value="RoadOnDemand">RoadOnDemand</option>
    <option value="CanvasDark">CanvasDark</option>
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
      <ol-source-bingmaps
        apiKey="AjtUzWJBHlI3Ma_Ke6Qv2fGRXEs0ua5hUQi54ECwfXTiWsitll4AkETZDihjcfeI"
        :imagerySet="selected"
      />
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
    const selected = ref("AerialWithLabels");
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

Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.

### hidpi

- **Type**: `boolean`
- **Default**: `false`

If true hidpi tiles will be requested.

### culture

- **Type**: `String`
- **Default**: `en-us`

Culture code.

### apiKey

- **Type**: `String`

Bing Maps API key

### imagerySet

- **Type**: `String`

Type of imagery.

### imageSmoothing

- **Type**: `boolean`
- **Default**: `TRUE`

Enable image smoothing.

### maxZoom

- **Type**: `number`
- **Default**: 21
  Max zoom.

### reprojectionErrorThreshold

- **Type**: `number `
- **Default**: 0.5

Maximum allowed reprojection error (in pixels). Higher values can increase reprojection performance, but decrease precision.

### tileLoadFunction

- **Type**: `Function`
- **Default**:

```js
(imageTile, src) => (imageTile.getImage().src = src);
```

Optional function to load a tile given a URL

### transition

- **Type**: `number`

Duration of the opacity transition for rendering. To disable the opacity transition, pass transition: 0.

### wrapX

- **Type**: `boolean `
- **Default**: true
  Whether to wrap the world horizontally.
