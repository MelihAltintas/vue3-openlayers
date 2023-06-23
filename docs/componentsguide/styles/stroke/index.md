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

::: code-group

<<< src/demos/LineString.vue

:::

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
