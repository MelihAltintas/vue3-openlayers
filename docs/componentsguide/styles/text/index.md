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

::: code-group

<<< ../../../../src/demos/TextDemo.vue

:::

## Properties

### font

- **Type**: `String`

### maxAngle

- **Type**: `Number`
- **Default**: `Math.PI / 4`

### offsetX

- **Type**: `Number`
- **Default**: `0`

### offsetY

- **Type**: `Number`
- **Default**: `0`

### overflow

- **Type**: `Boolean`
- **Default**: `false`

### placement

- **Type**: `String`
- **Default**: `point`

### scale

- **Type**: `Number`

### rotateWithView

- **Type**: `Boolean`
- **Default**: `false`

### rotation

- **Type**: `Number`
- **Default**: `0`

### text

- **Type**: `String`

### textAlign

- **Type**: `String`

### textBaseline

- **Type**: `String`
- **Default**: `middle`

### padding

- **Type**: `Array`
- **Default**: `() => [0, 0, 0, 0]`

### backgroundFill

- **Type**: `array`, `string`

Fill color for the text background when `placement` is 'point'. Default is no fill. Either in hexadecimal or as RGBA array with red, green, and blue values betweeen 0 and 255 and alpha value between 0 and 1 inclusive.

### backgroundStroke

- **Type**: `Object`

Stroke style for the text background when `placement` is 'point'. Default is no stroke. Please see [ol-style-stroke](/componentsguide/styles/stroke/#properties) for available options.

### fill

- **Type**: `array`, `string`

Fill color for the text. Default is '#333'. Either in hexadecimal or as RGBA array with red, green, and blue values betweeen 0 and 255 and alpha value between 0 and 1 inclusive.

### stroke

- **Type**: `Object`

Stroke style for the text. Default is no stroke. Please see [ol-style-stroke](/componentsguide/styles/stroke/#properties) for available options.
