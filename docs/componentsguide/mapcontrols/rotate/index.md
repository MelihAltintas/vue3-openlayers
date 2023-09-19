# ol-rotate-control

> A Rotate control for OpenLayers.

<script setup>
import RotateControlDemo from "@demos/RotateControlDemo.vue"
</script>
<ClientOnly>
<RotateControlDemo />
</ClientOnly>

## Usage

::: code-group

<<< ../../../../src/demos/RotateControlDemo.vue

:::

## Properties

### className

- **Type**: `String`
- **Default**: `ol-rotate`

### label

- **Type**: `String`
- **Default**: `⇧`

### tipLabel

- **Type**: `String`
- **Default**: `Reset rotation`

### compassClassName

- **Type**: `String`
- **Default**: `ol-compass`

### duration

- **Type**: `Number`
- **Default**: `250`

### autoHide

- **Type**: `Boolean`
- **Default**: `false`

### render

- **Type**: `Function`

### resetNorth

- **Type**: `Function`

### target

- **Type**: `HTMLElement`
