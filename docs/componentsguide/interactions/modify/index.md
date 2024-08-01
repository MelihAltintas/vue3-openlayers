# ol-interaction-modify

> Interaction for modifying feature geometries.

[[toc]]

## Demo

<script setup>
import ModifySourceDemo from "@demos/ModifySourceDemo.vue";
import SnapModifyDemo from "@demos/SnapModifyDemo.vue";
</script>

## Setup

<!--@include: ../../interactions.plugin.md-->

## Usage

| Plugin Usage              |           Explicit Import            |
| ------------------------- | :----------------------------------: |
| `<ol-interaction-modify>` | `<Interactions.OlInteractionModify>` |

### Modify the source vector components features

<ClientOnly>
<ModifySourceDemo/>
</ClientOnly>

::: code-group

<<< ../../../../src/demos/ModifySourceDemo.vue

:::

### Modify passed `features`

<ClientOnly>
<SnapModifyDemo/>
</ClientOnly>

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

### source

- **Type**: `VectorSource`
