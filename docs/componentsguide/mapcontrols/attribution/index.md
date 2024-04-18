# ol-attribution-control

> A Attribution control for OpenLayers.

[[toc]]

## Demo

<script setup>
import AttributionControlDemo from "@demos/AttributionControlDemo.vue"
</script>
<ClientOnly>
<AttributionControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage               |           Explicit Import            |
| -------------------------- | :----------------------------------: |
| `<ol-attribution-control>` | `<MapControls.OlAttributionControl>` |

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
