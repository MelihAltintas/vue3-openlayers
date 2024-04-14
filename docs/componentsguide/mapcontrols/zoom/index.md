# ol-zoom-control

> A Zoom control for OpenLayers.

[[toc]]

## Demo

<script setup>
import ZoomControlDemo from "@demos/ZoomControlDemo.vue"
</script>
<ClientOnly>
<ZoomControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage        |        Explicit Import        |
|---------------------|:-----------------------------:|
| `<ol-zoom-control>` | `<MapControls.OlZoomControl>` |

::: code-group

<<< ../../../../src/demos/ZoomControlDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageStatic-Static.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageStatic-Static.html) to see the available events tht will be fired.

```html
<ol-zoom-control @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageStatic-Static.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-zoom-control ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type Zoom from "ol/control/Zoom";

const sourceRef = ref<{ source: Zoom }>(null);

onMounted(() => {
  const zoom: Zoom = sourceRef.value?.control;
  // call your method on `control`
});
</script>
```
