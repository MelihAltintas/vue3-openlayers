# ol-overlay

> HTML element attached to geographical coordinate

`ol-overlay` component creates a HTML element that would be displayed over
the map. It has **default** scoped slot to render your custom content.

[[toc]]

<script setup>
import OverlayDemo from "@demos/OverlayDemo.vue"
import DrawMeasureDemo from "@demos/DrawMeasureDemo.vue"
</script>

## Setup

<!--@include: ../map.plugin.md-->

## Usage

| Plugin Usage   |  Explicit Import  |
| -------------- | :---------------: |
| `<ol-overlay>` | `<Map.OlOverlay>` |

### Example 1: Overlay Content

Example below shows how to add custom content on to the map.

<ClientOnly>
<OverlayDemo />
</ClientOnly>

::: code-group

<<< ../../../src/demos/OverlayDemo.vue

:::

### Example 2: Measure Distance

<ClientOnly>
<DrawMeasureDemo/>
</ClientOnly>

::: code-group

<<< ../../../src/demos/DrawMeasureDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

### `element`

The property `element` from OpenLayers is filled by the vue components template ref.
However, you are still able to override it and bind the component to another differing HTML element.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html) to see the available events tht will be fired.

```html
<ol-overlay @error="handleEvent">My Overlay Text</ol-overlay>
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-overlay ref="overlayRef">My Overlay Text</ol-overlay>
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type Overlay from "ol/Overlay";

const overlayRef = ref<{ overlay: Overlay }>(null);

onMounted(() => {
  const overlay: Overlay = overlayRef.value?.overlay;
  // call your method on `overlay`
});
</script>
```
