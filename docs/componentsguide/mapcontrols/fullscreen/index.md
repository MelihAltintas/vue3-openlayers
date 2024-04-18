# ol-fullscreen-control

> A Fullscreen control for OpenLayers.

[[toc]]

## Demo

<script setup>
import FullscreenControlDemo from "@demos/FullscreenControlDemo.vue"
</script>
<ClientOnly>
<FullscreenControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage              |           Explicit Import           |
| ------------------------- | :---------------------------------: |
| `<ol-fullscreen-control>` | `<MapControls.OlFullscreenControl>` |

::: code-group

<<< ../../../../src/demos/FullscreenControlDemo.vue

:::

## Properties

### className

- **Type**: `String`
- **Default**: `ol-full-screen`

### label

- **Type**: `String`
- **Default**: `\u2922`

### labelActive

- **Type**: `String`
- **Default**: `\u00d7`

### activeClassName

- **Type**: `String`
- **Default**: `ol-full-screen-true`

### inactiveClassName

- **Type**: `String`
- **Default**: `ol-full-screen-false`

### tipLabel

- **Type**: `String`
- **Default**: `Toggle full-screen`

### keys

- **Type**: `Boolean`
- **Default**: `false`

### target

- **Type**: `Object`

### source

- **Type**: `Object`
