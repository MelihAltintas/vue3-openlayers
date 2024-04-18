# ol-heatmap-layer

ol-heatmap-layer can render vector data as a heatmap from various backend services. It should be used with together with ol-source-vector component.

[[toc]]

## Demo

<script setup>
import HeatmapLayerDemo from "@demos/HeatmapLayerDemo.vue"
</script>

<ClientOnly>
<HeatmapLayerDemo />
</ClientOnly>

## Setup

<!--@include: ../../layers.plugin.md-->

## Usage

| Plugin Usage         |      Explicit Import      |
| -------------------- | :-----------------------: |
| `<ol-heatmap-layer>` | `<Layers.OlHeatmapLayer>` |

Example below shows how you can use ol-heatmap-layer and ol-source-vector to render a heatmap from a backend source.

::: code-group

<<< ../../../../src/demos/HeatmapLayerDemo.vue

:::

## Properties

### weight

- **Type**: `String` | `Function`
- **Default**: `'weight'`

The feature attribute to use for the weight or a function that returns a weight from a feature.
Weight values should range from 0 to 1 (and values outside will be clamped to that range).

### extent

- **Type**: `Array`

The bounding extent for layer rendering. The layer will not be rendered outside of this extent.

### blur

- **Type**: `Number`
- **Default**: `15`

The blur size in pixels.

### radius

- **Type**: `Number`

The radius size in pixels.
