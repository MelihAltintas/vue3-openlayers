# ol-attribution-control

> A Attribution control for OpenLayers.

<script setup>
import AttributionControlDemo from "@demos/AttributionControlDemo.vue"
</script>
<ClientOnly>
<AttributionControlDemo />
</ClientOnly>

## Usage

Add context menu to map

::: code-group

<<< ../../../../src/demos/AttributionControlDemo.vue

:::

## Properties

### className

- **Type**: `String`
- **Default**: `ol-attribution`

### target

- **Type**: `HTMLElement`

### collapsible

- **Type**: `Boolean`

### collapsed

- **Type**: `Boolean`
- **Default**: `true`

### tipLabel

- **Type**: `String`
- **Default**: `Attributions`

### label

- **Type**: `String`
- **Default**: `i`

### expandClassName

- **Type**: `String`
- **Default**: `ol-attribution-expand`

### collapseLabel

- **Type**: `String`
- **Default**: `»`

### collapseClassName

- **Type**: `String`
- **Default**: `ol-attribution-collapse`

### render

- **Type**: `Function`
