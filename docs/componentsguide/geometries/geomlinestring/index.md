# ol-geom-line-string

ol-geom-line-string can be used inside a ol-feature to draw lines on the map.

[[toc]]

## Demo

<script setup>
import LineString from "@demos/LineString.vue"
</script>
<ClientOnly>
<LineString />
</ClientOnly>

## Setup

<!--@include: ../../geometries.plugin.md-->

## Usage

| Plugin Usage            |         Explicit Import         |
|-------------------------|:-------------------------------:|
| `<ol-geom-line-string>` | `<Geometries.OlGeomLineString>` |

::: code-group

<<< ../../../../src/demos/LineString.vue

:::

## Properties

### coordinates

- **Type**: `number[][]`
  An array of pairs of coordinates as specified by the geojson spec in units of the map's projection.
