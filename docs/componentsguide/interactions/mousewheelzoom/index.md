# ol-interaction-mouse-wheel-zoom

> Define the mouse wheel zoom behaviour

[[toc]]

## Demo

<script setup>
import MouseWheelZoomDemo from "@demos/MouseWheelZoomDemo.vue"
</script>

<ClientOnly>
<MouseWheelZoomDemo/>
</ClientOnly>

## Setup

<!--@include: ../../interactions.plugin.md-->

## Usage

| Plugin Usage                        |               Explicit Import                |
|-------------------------------------|:--------------------------------------------:|
| `<ol-interaction-mouse-wheel-zoom>` | `<Interactions.OlInteractionMouseWheelZoom>` |

::: code-group

<<< ../../../../src/demos/MouseWheelZoomDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_interaction_MouseWheelZoom.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying interaction.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_interaction_MouseWheelZoom.html) to see the available events tht will be fired.

```html
<ol-interaction-mouse-wheel-zoom @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying interaction.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_interaction_MouseWheelZoom.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-interaction-mouse-wheel-zoom ref="interactionRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type MouseWheelZoom from "ol/interaction/MouseWheelZoom";

const interactionRef = ref<{ mouseWheelZoom: MouseWheelZoom } | null>(null);

onMounted(() => {
  const mouseWheelZoom: MouseWheelZoom = interactionRef.value?.mouseWheelZoom;
  // call your method on `mouseWheelZoom`
});
</script>
```


