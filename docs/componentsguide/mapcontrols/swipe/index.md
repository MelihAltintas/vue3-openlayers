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
|----------------------|:------------------------------:|
| `<ol-swipe-control>` | `<MapControls.OlSwipeControl>` |

::: code-group

<<< ../../../../src/demos/SwipeControlDemo.vue

:::

## Properties

### layerList

- **Type**: `Array`

### className

- **Type**: `String`

### position

- **Type**: `Number`
- **Default**: `0.5`

### orientation

- **Type**: `String`
- **Default**: `vertical`
