# ol-geom-multi-point

ol-geom--multi-point can be used inside a ol-feature to draw multiple points at once.

[[toc]]

## Demo

<script setup>
import MultiPoint from "@demos/MultiPoint.vue"
</script>
<ClientOnly>
<MultiPoint />
</ClientOnly>

## Setup

<!--@include: ../../geometries.plugin.md-->

## Usage

| Plugin Usage            |         Explicit Import         |
| ----------------------- | :-----------------------------: |
| `<ol-geom-multi-point>` | `<Geometries.OlGeomMultiPoint>` |

::: code-group

<<< ../../../../src/demos/MultiPoint.vue

:::

## Properties

### coordinates

- **Type**: `number[][]`
  An array of points in units of the map's projection.
