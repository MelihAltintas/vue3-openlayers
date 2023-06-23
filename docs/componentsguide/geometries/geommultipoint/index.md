# ol-geom-multi-point

ol-geom--multi-point can be used inside a ol-feature to draw multiple points at once.

<script setup>
import MultiPoint from "@demos/MultiPoint.vue"
</script>
<ClientOnly>
<MultiPoint />
</ClientOnly>

## Usage

::: code-group

<<< src/demos/MultiPoint.vue

:::

## Properties

### coordinates

- **Type**: `number[][]`
  An array of points in units of the map's projection.
