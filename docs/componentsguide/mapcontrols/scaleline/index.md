# ol-scaleline-control

> A Scale Line control for OpenLayers.

<script setup>
import ScalelineControlDemo from "@demos/ScalelineControlDemo.vue"
</script>
<ClientOnly>
<ScalelineControlDemo />
</ClientOnly>

## Usage

::: code-group

<<< ../../../../src/demos/ScalelineControlDemo.vue

:::

## Properties

### className

- **Type**: `String`
- **Default**: `ol-scale-line`

### minWidth

- **Type**: `Number`
- **Default**: `64`

### render

- **Type**: `Function`

### target

- **Type**: `HTMLElement`

### units

- **Type**: `String`
- **Default**: `metric`

### bar

- **Type**: `Boolean`
- **Default**: `false`

### steps

- **Type**: `Number`
- **Default**: `4`

### text

- **Type**: `Boolean`
- **Default**: `false`

### dpi

- **Type**: `Number`
- **Default**: `undefined`
