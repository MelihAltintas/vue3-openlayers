# ol-style-fill

> Color the filling of a polygon or mulipolygon in a vector layer

Use it inside ol-style, ol-style-circle, ol-style-text along with ol-style-stroke to style polygons and other shapes with area like circles.

[[toc]]

## Demo

<script setup>
import MultiPoint from "@demos/MultiPoint.vue"
</script>
<ClientOnly>
<MultiPoint />
</ClientOnly>

## Setup

<!--@include: ../../styles.plugin.md-->

## Usage

| Plugin Usage      |    Explicit Import     |
|-------------------|:----------------------:|
| `<ol-style-fill>` | `<Styles.OlStyleFill>` |

Styling a feature

::: code-group

<<< ../../../../src/demos/MultiPoint.vue

:::

## Properties

### color

- **Type**: `Number`

The color either in hexadecimal or as RGB array with red, green, and blue values between 0 and 255 and alpha between 0 and 1 inclusive.
