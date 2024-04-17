# ol-mouseposition-control

> A Mouse Position control for OpenLayers.

[[toc]]

## Demo

<script setup>
import MousepositionControlDemo from "@demos/MousepositionControlDemo.vue"
</script>
<ClientOnly>
<MousepositionControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage                 |            Explicit Import             |
|------------------------------|:--------------------------------------:|
| `<ol-mouseposition-control>` | `<MapControls.OlMousepositionControl>` |

::: code-group

<<< ../../../../src/demos/MousepositionControlDemo.vue

:::

## Properties

### className

- **Type**: `String`
- **Default**: `ol-mouse-position`

### coordinateFormat

- **Type**: `String`

### projection

- **Type**: `String`

### render

- **Type**: `Function`

### target

- **Type**: `HTMLElement`
