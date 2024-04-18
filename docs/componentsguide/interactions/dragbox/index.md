# ol-interaction-dragbox

> Allows the user to draw a vector box by clicking and dragging on the map,
> normally combined with a _condition_ that limits it to when the `shift` or other key is held down.

[[toc]]

## Demo

<script setup>
import VectorSourceDemo1 from "@demos/VectorSourceDemo1.vue"
</script>

<ClientOnly>
<VectorSourceDemo1/>
</ClientOnly>

## Setup

<!--@include: ../../interactions.plugin.md-->

## Usage

| Plugin Usage               |            Explicit Import            |
| -------------------------- | :-----------------------------------: |
| `<ol-interaction-dragbox>` | `<Interactions.OlInteractionDragbox>` |

::: code-group

<<< ../../../../src/demos/VectorSourceDemo1.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBox.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying interaction.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBox.html) to see the available events tht will be fired.

```html
<ol-interaction-dragbox @error="handleEvent">
  <!-- ... -->
</ol-interaction-dragbox>
```

## Methods

You have access to all Methods from the underlying interaction.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBox.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-map ref="mapRef" @error="handleEvent">
    <!-- ... -->
  </ol-map>
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type DragBox from "ol/interaction/DragBox";

const drgboxRef = ref<{ dragbox: DragBox } | null>(null);

onMounted(() => {
  const dragbox: DragBox = drgboxRef.value?.dragbox;
  // call your method on `dragbox`
});
</script>
```
