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

<<< src/demos/TextDemo.vue

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
