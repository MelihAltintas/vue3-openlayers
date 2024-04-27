# ol-interaction-pointer

Component that handles user-defined functions on `down`, `move`, `up` and `drag` events.

[[toc]]

## Demo

<script setup>
import PointerDemo from "@demos/PointerDemo.vue"
</script>

<ClientOnly>
<PointerDemo/>
</ClientOnly>

## Setup

<!--@include: ../../interactions.plugin.md-->

## Usage

| Plugin Usage               |            Explicit Import            |
|----------------------------|:-------------------------------------:|
| `<ol-interaction-pointer>` | `<Interactions.OlInteractionPointer>` |

::: code-group

<<< ../../../../src/demos/PointerDemo.vue

:::

## Properties

### stopDown

Should the down event be propagated to other interactions, or should be stopped?

- **Type**: `((arg0: boolean) => boolean) | undefined`

## Events

You have access to all Events from the underlying interaction.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html) to see the available events tht will be fired.

In addition, the events `down`, `move`, `up`, `drag` and `event`, are fired.

```html
<ol-interaction-pointer
  @down="handleDownEvent"
  @move="handleMoveEvent"
  @up="handleUpEvent"
  @drag="handleDragEvent"
  @error="handleErrorEvent"
/>
```

## Methods

You have access to all Methods from the underlying interaction.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-interaction-pointer ref="pointerRef" @down="handleDownEvent" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type Pointer from "ol/interaction/Pointer";

const pointerRef = ref<{ pointer: Pointer } | null>(null);

onMounted(() => {
  const pointer: Pointer = pointerRef.value?.pointer;
  // call your method on `pointer`
});
</script>
```
