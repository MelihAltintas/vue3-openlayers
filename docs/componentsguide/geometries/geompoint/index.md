# ol-geom-point

ol-geom-point can be used inside a ol-feature to draw a single points

<script setup>
import GeomPoint from "@demos/GeomPoint.vue"
</script>

<ClientOnly>
<GeomPoint />
</ClientOnly>

## Usage

::: code-group

<<< src/demos/GeomPoint.vue

:::

## Properties

### coordinates

- **Type**: `number[]`
  This point's coordinates in units of the map's projection.
