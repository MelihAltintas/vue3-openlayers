# ol-interaction-draw

> Interaction for drawing feature geometries.

ol-interaction-draw handles click events on the map and makes easier to draw geometries.

<script setup>
import DrawDemo from "@demos/DrawDemo.vue"
</script>

<ClientOnly>
<DrawDemo/>
</ClientOnly>

## Usage

::: code-group

<<< ../../../../src/demos/DrawDemo.vue

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
