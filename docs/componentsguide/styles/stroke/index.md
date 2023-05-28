# ol-style-stroke

> Style the stroke of a line or polygon.

Use it inside ol-style to style lines and polygons, inside ol-style-circle to style circles,inside ol-style-text to style texts.

<script setup>
import LineString from "@demos/LineString.vue"
</script>
<ClientOnly>
<LineString />
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

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-line-string
            :coordinates="[
              [116.544921, 40.451633],
              [116.545264, 40.451649],
              [116.545865, 40.451698],
              [116.546144, 40.451551],
              [116.546337, 40.451274],
              [116.546788, 40.451143],
              [116.547324, 40.451078],
              [116.547539, 40.450996],
              [116.547839, 40.450719],
              [116.54844, 40.450506],
              [116.548933, 40.450604],
              [116.549448, 40.450604],
              [116.550242, 40.450376],
              [116.550865, 40.450163],
              [116.551702, 40.449935],
              [116.552581, 40.449576],
            ]"
          ></ol-geom-line-string>
          <ol-style>
            <ol-style-stroke
              :color="strokeColor"
              :width="strokeWidth"
            ></ol-style-stroke>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([116.54875, 40.45064]);
const projection = ref("EPSG:4326");
const zoom = ref(17);
const rotation = ref(0);
const strokeWidth = ref(10);
const strokeColor = ref("red");
</script>
```

## Properties

### color

- **Type**: `array`, `string`

Stroke color. Either in hexadecimal or as RGBA array with red, green, and blue values betweeen 0 and 255 and alpha value between 0 and 1 inclusive.

### lineCap

- **Type**: `string`
- **Default**: `round`,

How to style the ends of the lines if any. Options are `round`, `butt`, and `square`.

### lineJoin

- **Type**: `string`
- **Default**: `round`,

How to style line segment joints. Choices are `round`, `bevel`, `miter`

### lineDash

- **Type**: `array`

An Array of numbers that specify distances to alternately draw a line and a gap.

### lineDashOffset

- **Type**: `number`
- **Default**: `0`

Offsets the starting point of the dash pattern by the given amount.

### miterLimit

- **Type**: `number`
- **Default**: `10`

When to cut corners on sharp angles. For reference check [this entry](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) on Mozilla Developer Network.

### width

- **Type**: `Number`
- **Default**: `1.25`

Width of the stroke.
