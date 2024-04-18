# ol-source-tile-debug

A pseudo tile source, which does not fetch tiles from a server, but renders a grid outline for the tile grid/projection along with the coordinates for each tile.
See examples/canvas-tiles for an example.

[[toc]]

## Demo

<script setup>
import TileDebugDemo from "@demos/TileDebugDemo.vue"
import ProjectionRegisterDemo from "@demos/ProjectionRegisterDemo.vue"
</script>

<ClientOnly>
<ProjectionRegisterDemo />
<hr />
<TileDebugDemo />
</ClientOnly>

## Setup

<!--@include: ../../sources.plugin.md-->

## Usage

| Plugin Usage             |        Explicit Import        |
| ------------------------ | :---------------------------: |
| `<ol-source-tile-debug>` | `<Sources.OlSourceTileDebug>` |

::: code-group

<<< ../../../../src/demos/TileDebugDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_TileDebug-TileDebug.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_TileDebug-TileDebug.html) to see the available events tht will be fired.

```html
<ol-source-tile-debug @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_TileDebug-TileDebug.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-tile-debug ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type TileDebug from "ol/source/TileDebug";

const sourceRef = ref<{ source: TileDebug }>(null);

onMounted(() => {
  const source: TileDebug = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
