# ol-style-icon

> Style the icon of a points

Use it inside ol-style to style points

<script setup>
import IconDemo from "@demos/IconDemo.vue"
</script>

<ClientOnly>
<IconDemo />
</ClientOnly>

## Usage

```vue
<template>
  <ol-map
    ref="map"
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height:500px"
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
      <ol-source-vector
        url="https://raw.githubusercontent.com/alpers/Turkey-Maps-GeoJSON/master/tr-cities-airports.json"
        :format="geoJson"
        :projection="projection"
      >
      </ol-source-vector>
      <ol-style>
        <ol-style-stroke color="red" :width="2"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
        <ol-style-icon :src="markerIcon" :scale="0.1"></ol-style-icon>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<script>
import { ref, inject } from "vue";

import markerIcon from "@/assets/marker.png";
export default {
  setup() {
    const center = ref([34, 39.13]);
    const projection = ref("EPSG:4326");
    const zoom = ref(6.8);
    const rotation = ref(0);

    const format = inject("ol-format");

    const geoJson = new format.GeoJSON();

    return {
      center,
      projection,
      zoom,
      rotation,
      geoJson,
      markerIcon,
    };
  },
};
</script>
```

## Properties

# anchor

- **Type**: `Array`

# anchorOrigin

- **Type**: `String`
- **Default**: `top-left`

# anchorXUnits

- **Type**: `String`
- **Default**: `fraction`

# anchorYUnits

- **Type**: `String`
- **Default**: `fraction`

# color

- **Type**: `String`

# crossOrigin

- **Type**: `String`

# img

- **Type**: `[HTMLImageElement, HTMLCanvasElement]`

# offset

- **Type**: `Array`
- **Default**: `() => [0, 0]`

# displacement

- **Type**: `Array`
- **Default**: `() => [0, 0]`

# offsetOrigin

- **Type**: `String`
- **Default**: `top-left`

# opacity

- **Type**: `Number`
- **Default**: `1`

# scale

- **Type**: `Number`
- **Default**: `1`

# rotateWithView

- **Type**: `Boolean`
- **Default**: `false`

# rotation

- **Type**: `Number`
- **Default**: `0`

# size

- **Type**: `Array`

  # imgSize

- **Type**: `Array`

# src

- **Type**: `String`
