# ol-geom-multi-line-string

ol-geom-multi-line-string can be used inside a ol-feature to draw multiple lines on the map.

[[toc]]

## Demo

<script setup>
import MultiLineString from "@demos/MultiLineString.vue"
</script>
<ClientOnly>
<MultiLineString />
</ClientOnly>

## Setup

<!--@include: ../../geometries.plugin.md-->

## Usage

| Plugin Usage                  |           Explicit Import            |
| ----------------------------- | :----------------------------------: |
| `<ol-geom-multi-line-string>` | `<Geometries.OlGeomMultiLineString>` |

::: code-group

<<< ../../../../src/demos/MultiLineString.vue

:::

## Properties

### coordinates

- **Type**: `number[][][]`
  An array of lines, each of which is a line string in units of the map's projection.
