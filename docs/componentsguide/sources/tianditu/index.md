# ol-source-tianditu

> Layer source for [Tianditu](https://www.tianditu.gov.cn/)

`ol-source-tianditu` adds ability to display tile data from Tianditu Maps. To use
this source you should get **API key** at https://console.tianditu.gov.cn/.

<script setup>
import TiandituDemo from "@demos/TiandituDemo.vue"
</script>

<ClientOnly>
<TiandituDemo />
</ClientOnly>

## Usage

Example of `ol-source-tianditu` usage

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

    <ol-tile-layer>
      <ol-source-tianditu
        layerType="vec"
        projection="EPSG:4326"
        tk="dbed7e0f96194affd82763e159de4c50"
        :hidpi="true"
      ></ol-source-tianditu>
    </ol-tile-layer>

    <ol-tile-layer>
      <ol-source-tianditu
        :isLabel="true"
        layerType="vec"
        projection="EPSG:4326"
        tk="dbed7e0f96194affd82763e159de4c50"
        :hidpi="true"
      ></ol-source-tianditu>
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([116.41124529391394, 39.953530444730816]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);
</script>
```

## Properties

### layerType

- **Type**: `string`
- **Default**: `img`

options: img, vec, ter, eia, cta

### tk

- **Type**: `string`

api key

### isLabel

- **Type**: `Boolean`
- **Default**: `false`

### cacheSize

- **Type**: `Number`

### crossOrigin

- **Type**: `String`

### projection

- **Type**: `String`
- **Default**: `EPSG:3857`

### hidpi

- **Type**: `Boolean`
- **Default**: `false`

### requestEncoding

- **Type**: `String`
- **Default**: `KVP`

### format

- **Type**: `String`

### version

- **Type**: `String`
- **Default**: `1.0.0`

### culture

- **Type**: `String`
- **Default**: `en-us`

### matrixSet

- **Type**: `String`

### dimensions

- **Type**: `Object`

### imageSmoothing

- **Type**: `Boolean`
- **Default**: `true`

### maxZoom

- **Type**: `Number`
- **Default**: `21`

### reprojectionErrorThreshold

- **Type**: `Number`

### tileLoadFunction

- **Type**: `Function`

### wrapX

- **Type**: `Boolean`
- **Default**: `true`

### transition

- **Type**: `Number`
