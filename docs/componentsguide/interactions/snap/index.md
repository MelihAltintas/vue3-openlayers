# ol-interaction-snap

> Handles snapping of vector features while modifying or drawing them.

## Usage

<script setup>
import SnapModifyDemo from "@demos/SnapModifyDemo.vue"
</script>

<ClientOnly>
<SnapModifyDemo/>
</ClientOnly>

::: code-group

<<< src/demos/SnapModifyDemo.vue

:::

## Properties

### pixelTolerance

- **Type**: `Number`
- **Default**: `10`

### edge

- **Type**: `Boolean`
- **Default**: `false`

### vertex

- **Type**: `Boolean`
- **Default**: `false`
