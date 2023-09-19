# ol-overviewmap-control

> A Overview Map control for OpenLayers.

<script setup>
import OverviewmapControlDemo from "@demos/OverviewmapControlDemo.vue"
</script>
<ClientOnly>
<OverviewmapControlDemo />
</ClientOnly>

## Usage

::: code-group

<<< ../../../../src/demos/OverviewmapControlDemo.vue

:::

## Properties

### className

- **Type**: `String`
- **Default**: `ol-overviewmap`

### collapsed

- **Type**: `Boolean`
- **Default**: `true`

### collapseLabel

- **Type**: `String`
- **Default**: `«`

### collapsible

- **Type**: `Boolean`
- **Default**: `true`

### label

- **Type**: `String`
- **Default**: `»`

### render

- **Type**: `Function`

### rotateWithView

- **Type**: `Boolean`
- **Default**: `false`

### target

- **Type**: `HTMLElement`

### tipLabel

- **Type**: `String`
- **Default**: `Overview map`
