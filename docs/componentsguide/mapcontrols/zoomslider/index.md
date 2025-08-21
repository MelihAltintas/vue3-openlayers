# ol-zoom-slider-control

> A Zoom Slider control for OpenLayers.

[[toc]]

## Demo

<script setup>
import ZoomsliderControlDemo from "@demos/ZoomsliderControlDemo.vue"
</script>
<ClientOnly>
<ZoomsliderControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage               |           Explicit Import           |
| -------------------------- | :---------------------------------: |
| `<ol-zoom-slider-control>` | `<MapControls.OlZoomSliderControl>` |

::: code-group

<<< ../../../../src/demos/ZoomsliderControlDemo.vue

:::

## Properties

### className

- **Type**: `String`
- **Default**: `ol-zoomslider`

### duration

- **Type**: `Number`
- **Default**: `200`

### render

- **Type**: `Function`
