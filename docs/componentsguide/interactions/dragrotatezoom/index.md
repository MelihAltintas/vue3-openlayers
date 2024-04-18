# ol-interaction-dragrotatezoom

> Zoom and rotate the map by clicking and dragging on the map. By default, this interaction is limited to when the `shift` key is held down.

[[toc]]

## Demo

<script setup>
import DragRotateZoomDemo from "@demos/DragRotateZoomDemo.vue"
</script>

<ClientOnly>
<DragRotateZoomDemo/>
</ClientOnly>

## Setup

<!--@include: ../../interactions.plugin.md-->

## Usage

| Plugin Usage                      |               Explicit Import                |
| --------------------------------- | :------------------------------------------: |
| `<ol-interaction-dragrotatezoom>` | `<Interactions.OlInteractionDragrotatezoom>` |

::: code-group

<<< ../../../../src/demos/DragRotateZoomDemo.vue

:::

## Properties

### condition

- **Type**: `Function`

### duration

- **Type**: `Number`
- **Default**: `400`
