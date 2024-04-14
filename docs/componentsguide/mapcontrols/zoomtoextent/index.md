# ol-zoomtoextent-control

> A Zoom to extent control for OpenLayers.

[[toc]]

## Demo

<script setup>
import ZoomtoextentControlDemo from "@demos/ZoomtoextentControlDemo.vue"
</script>
<ClientOnly>
<ZoomtoextentControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage                |            Explicit Import            |
|-----------------------------|:-------------------------------------:|
| `<ol-zoomtoextent-control>` | `<MapControls.OlZoomToExtentControl>` |

::: code-group

<<< ../../../../src/demos/ZoomtoextentControlDemo.vue

:::

## Properties

### className

- **Type**: `String`
- **Default**: `ol-zoom-extent`

### target

- **Type**: `HTMLElement`

### label

- **Type**: `String`
- **Default**: `E`

### tipLabel

- **Type**: `String`
- **Default**: `Fit to extent`

### extent

- **Type**: `Array`
