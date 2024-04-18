# ol-geom-circle

ol-geom-circle can be used inside a ol-feature to draw a single circle.

[[toc]]

## Demo

<script setup>
import CircleDemo from "@demos/CircleDemo.vue"
</script>

<ClientOnly>
<CircleDemo />
</ClientOnly>

## Setup

<!--@include: ../../geometries.plugin.md-->

## Usage

| Plugin Usage       |       Explicit Import       |
| ------------------ | :-------------------------: |
| `<ol-geom-circle>` | `<Geometries.OlGeomCircle>` |

::: code-group

<<< ../../../../src/demos/CircleDemo.vue

:::

## Properties

### center

- **Type**: `number[]`
  This circle's center coordinates in units of the map's projection.

### radius

- **Type**: `Number`
  This circle's radius in units of the map's projection.
