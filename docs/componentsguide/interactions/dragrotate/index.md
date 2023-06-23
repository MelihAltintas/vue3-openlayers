# ol-interaction-dragrotate

> Rotate the map by clicking and dragging on the map, normally combined with an `ol/events/condition` that limits it to when the `alt` and `shift` keys are held down.

<script setup>
import DragRotateDemo from "@demos/DragRotateDemo.vue"
</script>

<ClientOnly>
<DragRotateDemo/>
</ClientOnly>

## Usage

::: code-group

<<< ../../../../src/demos/DragRotateDemo.vue

:::

## Properties

### condition

- **Type**: `Function`

### duration

- **Type**: `Number`
- **Default**: `250`
