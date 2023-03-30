# ol-style-text

> Style the text of a shape

<script setup>
import TextDemo from "@demos/TextDemo.vue"
</script>

<ClientOnly>
<TextDemo/>
</ClientOnly>

## Usage

Add text to shapes

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

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-polygon
            :coordinates="[
              [
                [-98.844959, 19.691586],
                [-98.842749, 19.69098],
                [-98.84217, 19.693122],
                [-98.844358, 19.693667],
                [-98.844959, 19.691586],
              ],
            ]"
          ></ol-geom-polygon>
          <ol-style>
            <ol-style-stroke
              :color="strokeColor"
              :width="strokeWidth"
            ></ol-style-stroke>
            <ol-style-fill color="white" :width="strokeWidth"></ol-style-fill>
            <ol-style-text text="Hellooooo"></ol-style-text>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const center = ref([-98.8449, 19.6869]);
    const projection = ref("EPSG:4326");
    const zoom = ref(15);
    const rotation = ref(0);
    const radius = ref(40);
    const strokeWidth = ref(10);
    const strokeColor = ref("red");

    return {
      center,
      projection,
      zoom,
      rotation,
      radius,
      strokeWidth,
      strokeColor,
    };
  },
};
</script>
```

## Properties

# font

- **Type**: `String`

# maxAngle

- **Type**: `Number`
- **Default**: `Math.PI / 4`

# offsetX

- **Type**: `Number`
- **Default**: `0`

# offsetY

- **Type**: `Number`
- **Default**: `0`

# overflow

- **Type**: `Boolean`
- **Default**: `false`

# placement

- **Type**: `String`
- **Default**: `point`

# scale

- **Type**: `Number`

# rotateWithView

- **Type**: `Boolean`
- **Default**: `false`

# rotation

- **Type**: `Number`
- **Default**: `0`

# text

- **Type**: `String`

# textAlign

- **Type**: `String`

# textBaseline

- **Type**: `String`
- **Default**: `middle`

# padding

- **Type**: `Array`
- **Default**: `() => [0, 0, 0, 0]`
