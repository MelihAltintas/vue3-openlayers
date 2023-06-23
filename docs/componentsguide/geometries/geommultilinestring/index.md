# ol-geom-multi-line-string

ol-geom-multi-line-string can be used inside a ol-feature to draw multiple lines on the map.

<script setup>
import MultiLineString from "@demos/MultiLineString.vue"
</script>
<ClientOnly>
<MultiLineString />
</ClientOnly>

## Usage

::: code-group

<<< src/demos/MultiLineString.vue

:::

## Properties

### coordinates

- **Type**: `number[][][]`
  An array of lines, each of which is a line string in units of the map's projection.
