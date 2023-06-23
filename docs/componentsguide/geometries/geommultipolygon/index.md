# ol-geom-multi-polygon

ol-geom-multi-polygon can be used inside a ol-feature to draw multiple polygons at once on the map.

<script setup>
import MultiPolygon from "@demos/MultiPolygon.vue"
</script>
<ClientOnly>
<MultiPolygon />
</ClientOnly>

## Usage

::: code-group

<<< src/demos/MultiPolygon.vue

:::

## Properties

### coordinates

- **Type**: `number[][][][]`
  An array of polygons with coordinates in the map's projection.
