# ol-interaction-modify

> Interaction for modifying feature geometries.

<script setup>
import SnapModifyDemo from "@demos/SnapModifyDemo.vue"
</script>

<ClientOnly>
<SnapModifyDemo/>
</ClientOnly>

## Usage

::: code-group

<<< ../../../../src/demos/SnapModifyDemo.vue

:::

## Properties

### condition

- **Type**: `Function`

### deleteCondition

- **Type**: `Function`

### insertVertexCondition

- **Type**: `Function`

### pixelTolerance

- **Type**: `Number`
- **Default**: `10`

### wrapX

- **Type**: `Boolean`
- **Default**: `false`

### hitDetection

- **Type**: `Boolean`

  ### features

- **Type**: `[Collection,Object]`
