# ol-feature

> A container for geometry

`ol-feature` can be used together with `ol-vector-layer` and `ol-source-vector` to add GeoJSON features to the map.
The `ol-feature` must contain a single child element (Geometry), e. .g `ol-geom-point` and a `ol-style` which defined the style for the Geometry.
If you want to display multiple Geometries, you need to add multiple `ol-feature`'s.

[[toc]]

## Demo

<script setup>
import GeomPoint from "@demos/GeomPoint.vue"
</script>

## Setup

<!--@include: ../map.plugin.md-->

## Usage

| Plugin Usage   |  Explicit Import  |
|----------------|:-----------------:|
| `<ol-feature>` | `<Map.OlFeature>` |

<ClientOnly>
<GeomPoint />
</ClientOnly>

::: code-group

<<< ../../../src/demos/GeomPoint.vue

:::

## Properties

### properties

Properties to connect with the feature.

- **Type**: ` [Geometry, Object, Array]`
