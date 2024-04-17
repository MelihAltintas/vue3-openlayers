# ol-interaction-draw

> Interaction for drawing feature geometries.

ol-interaction-draw handles click events on the map and makes easier to draw geometries.

[[toc]]

## Demo

<script setup>
import DrawDemo from "@demos/DrawDemo.vue"
import DrawMeasureDemo from "@demos/DrawMeasureDemo.vue"
</script>

## Setup

<!--@include: ../../interactions.plugin.md-->

## Usage

| Plugin Usage            |          Explicit Import           |
|-------------------------|:----------------------------------:|
| `<ol-interaction-draw>` | `<Interactions.OlDrawInteraction>` |

### Example 1: Draw Features

<ClientOnly>
<DrawDemo/>
</ClientOnly>

::: code-group

<<< ../../../../src/demos/DrawDemo.vue

:::

### Example 2: Measure Distance

<ClientOnly>
<DrawMeasureDemo/>
</ClientOnly>

::: code-group

<<< ../../../../src/demos/DrawMeasureDemo.vue

:::

## Properties

### type

- **Type**: `String`

### clickTolerance

- **Type**: `Number`
- **Default**: `6`

### dragVertexDelay

- **Type**: `Number`
- **Default**: `500`

### snapTolerance

- **Type**: `Number`
- **Default**: `12`

### stopClick

- **Type**: `Boolean`
- **Default**: `false`

### maxPoints

- **Type**: `Number`

### minPoints

- **Type**: `Number`

### finishCondition

- **Type**: `Function`

### geometryFunction

- **Type**: `Function`

### geometryName

- **Type**: `String`

### condition

- **Type**: `Function`

### freehand

- **Type**: `Boolean`
- **Default**: `false`

### freehandCondition

- **Type**: `Function`

### wrapX

- **Type**: `Boolean`
- **Default**: `false`
