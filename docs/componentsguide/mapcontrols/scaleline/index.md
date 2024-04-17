# ol-scaleline-control

> A Scale Line control for OpenLayers.

[[toc]]

## Demo

<script setup>
import ScalelineControlDemo from "@demos/ScalelineControlDemo.vue"
</script>
<ClientOnly>
<ScalelineControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage             |          Explicit Import           |
|--------------------------|:----------------------------------:|
| `<ol-scaleline-control>` | `<MapControls.OlScalelineControl>` |

::: code-group

<<< ../../../../src/demos/ScalelineControlDemo.vue

:::

## Properties

### className

- **Type**: `String`
- **Default**: `ol-scale-line`

### minWidth

- **Type**: `Number`
- **Default**: `64`

### render

- **Type**: `Function`

### target

- **Type**: `HTMLElement`

### units

- **Type**: `String`
- **Default**: `metric`

### bar

- **Type**: `Boolean`
- **Default**: `false`

### steps

- **Type**: `Number`
- **Default**: `4`

### text

- **Type**: `Boolean`
- **Default**: `false`

### dpi

- **Type**: `Number`
- **Default**: `undefined`
