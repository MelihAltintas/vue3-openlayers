# ol-swipe-control

> A Swipe control for OpenLayers.

[[toc]]

## Demo

<script setup>
import SwipeControlDemo from "@demos/SwipeControlDemo.vue"
</script>
<ClientOnly>
<SwipeControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage         |        Explicit Import         |
| -------------------- | :----------------------------: |
| `<ol-swipe-control>` | `<MapControls.OlSwipeControl>` |

::: code-group

<<< ../../../../src/demos/SwipeControlDemo.vue

:::

## Properties

### layers

Layers that should be rendered on the left (or top depending on the `orientation`) of the slider.

- **Type**: `Array<Layer>`

### rightLayers

Layers that should be rendered on the right (or bottom depending on the `orientation`) of the slider.

- **Type**: `Array<Layer>`

### className

- **Type**: `String`

### position

- **Type**: `Number`
- **Default**: `0.5`

### orientation

- **Type**: `String`
- **Default**: `vertical`
