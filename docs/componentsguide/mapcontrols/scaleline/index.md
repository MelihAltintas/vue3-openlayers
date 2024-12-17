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
| ------------------------ | :--------------------------------: |
| `<ol-scaleline-control>` | `<MapControls.OlScalelineControl>` |

::: code-group

<<< ../../../../src/demos/ScalelineControlDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_control_ScaleLine-ScaleLine.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.
