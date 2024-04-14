# ol-style-circle

> Styles points as circles.

Use it inside ol-style to style points as circles.

[[toc]]

## Demo

<script setup>
import GeomPoint from "@demos/GeomPoint.vue"
</script>

<ClientOnly>
<GeomPoint/>
</ClientOnly>

## Setup

<!--@include: ../../styles.plugin.md-->

## Usage

| Plugin Usage        |     Explicit Import      |
|---------------------|:------------------------:|
| `<ol-style-circle>` | `<Styles.OlStyleCircle>` |

Styling a feature inside a vector layer.

::: code-group

<<< ../../../../src/demos/GeomPoint.vue

:::

## Properties

### radius

- **Type**: `Number`

### scale

- **Type**: `Number`
