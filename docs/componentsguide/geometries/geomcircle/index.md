# ol-geom-circle

ol-geom-circle can be used inside a ol-feature to draw a single circle.

<script setup>
import CircleDemo from "@demos/CircleDemo.vue"
</script>

<ClientOnly>
<CircleDemo />
</ClientOnly>

## Usage

::: code-group

<<< ../../../../src/demos/CircleDemo.vue

:::

## Properties

### center

- **Type**: `number[]`
  This circle's center coordinates in units of the map's projection.

### radius

- **Type**: `Number`
  This circle's radius in units of the map's projection.
