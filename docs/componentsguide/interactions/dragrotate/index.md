# ol-interaction-dragrotate

> Rotate the map by clicking and dragging on the map, normally combined with an `ol/events/condition` that limits it to when the `alt` and `shift` keys are held down.

[[toc]]

## Demo

<script setup>
import DragRotateDemo from "@demos/DragRotateDemo.vue"
</script>

<ClientOnly>
<DragRotateDemo/>
</ClientOnly>

## Setup

<!--@include: ../../interactions.plugin.md-->

## Usage

| Plugin Usage                  |             Explicit Import              |
| ----------------------------- | :--------------------------------------: |
| `<ol-interaction-dragrotate>` | `<Interactions.OlInteractionDragrotate>` |

::: code-group

<<< ../../../../src/demos/DragRotateDemo.vue

:::

## Properties

### condition

- **Type**: `Function`

### duration

- **Type**: `Number`
- **Default**: `250`
