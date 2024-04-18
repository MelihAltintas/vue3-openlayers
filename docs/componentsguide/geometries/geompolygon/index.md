# ol-geom-polygon

ol-geom-polygon can be used inside a ol-feature to draw a single polygon on the map.
The polygon may contain holes in it.
A polygon is defined by exactly one LinearRing as its circumference, and any number of additional LinearRings representing holes that are cut out.
Check the usage section for more info on this.

[[toc]]

## Demo

<script setup>
import PolygonDemo from "@demos/PolygonDemo.vue"
</script>
<ClientOnly>
<PolygonDemo />
</ClientOnly>

## Setup

<!--@include: ../../geometries.plugin.md-->

## Usage

| Plugin Usage        |       Explicit Import        |
| ------------------- | :--------------------------: |
| `<ol-geom-polygon>` | `<Geometries.OlGeomPolygon>` |

::: code-group

<<< ../../../../src/demos/PolygonDemo.vue

:::

## Properties

### coordinates

- **Type**: `number[][][]`
  A polygon with coordinates in the map's projection.
