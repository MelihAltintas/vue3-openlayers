# ol-source-tile-json

> Layer source for tile data in TileJSON format.

[[toc]]

## Demo

<script setup>
import TileJSONDemo from "@demos/TileJSONDemo.vue"
</script>

<ClientOnly>
<TileJSONDemo />
</ClientOnly>

## Setup

<!--@include: ../../sources.plugin.md-->

## Usage

| Plugin Usage            |       Explicit Import        |
|-------------------------|:----------------------------:|
| `<ol-source-tile-json>` | `<Sources.OlSourceTileJSON>` |

::: code-group

<<< ../../../../src/demos/TileJSONDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_TileJSON-TileJSON.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_TileJSON-TileJSON.html) to see the available events tht will be fired.

```html
<ol-source-tile-json :url="url" crossOrigin="anonymous" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_TileJSON-TileJSON.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-tile-json :url="url" crossOrigin="anonymous" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type TileJSON from "ol/source/TileJSON";

const sourceRef = ref<{ source: TileJSON }>(null);

onMounted(() => {
  const source: TileJSON = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
