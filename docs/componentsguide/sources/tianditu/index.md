# ol-source-tianditu

> Layer source for [Tianditu](https://www.tianditu.gov.cn/)

`ol-source-tianditu` adds ability to display tile data from Tianditu Maps. To use
this source you should get **API key** at https://console.tianditu.gov.cn/.

<script setup>
import Tianditu from "@demos/Tianditu.vue"
</script>

<ClientOnly>
<Tianditu />
</ClientOnly>

## Usage

Example of `ol-source-tianditu` usage

```html
<template>


<ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:400px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-tile-layer>
      <ol-source-tianditu
        layerType="vec"
        projection="EPSG:4326"
        tk="************************" //your key
        :hidpi="true"
      ></ol-source-tianditu>
    </ol-tile-layer>

    <ol-tile-layer>
      <ol-source-tianditu
        :isLabel="true"
        layerType="vec"
        projection="EPSG:4326"
        tk="********************************" //your key
        :hidpi="true"
      ></ol-source-tianditu>
    </ol-tile-layer>

</ol-map>
</template>
```

```js
import { ref } from "vue";
export default {
  setup() {
    const center = ref([116.41124529391394, 39.953530444730816]);
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
```

## Properties

# layerType

- **Type**: `string`
- **Default**: `img`

options: img, vec, ter, eia, cta

# tk

- **Type**: `string`

api key

# isLabel

- **Type**: `Boolean`
- **Default**: `false`

# cacheSize

- **Type**: `Number`

# crossOrigin

- **Type**: `String`

# projection

- **Type**: `String`
- **Default**: `EPSG:3857`

# hidpi

- **Type**: `Boolean`
- **Default**: `false`

# requestEncoding

- **Type**: `String`
- **Default**: `KVP`

# format

- **Type**: `String`

# version

- **Type**: `String`
- **Default**: `1.0.0`

# culture

- **Type**: `String`
- **Default**: `en-us`

# matrixSet

- **Type**: `String`

# dimensions

- **Type**: `Object`

# imageSmoothing

- **Type**: `Boolean`
- **Default**: `true`

# maxZoom

- **Type**: `Number`
- **Default**: `21`

# reprojectionErrorThreshold

- **Type**: `Number`

# tileLoadFunction

- **Type**: `Function`

# wrapX

- **Type**: `Boolean`
- **Default**: `true`

# transition

- **Type**: `Number`
