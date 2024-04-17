# ol-source-tile-wms

Source for WMS servers providing tiled images.

[[toc]]

## Demo

<script setup>
import TileWMSDemo from "@demos/TileWMSDemo.vue"
</script>

<ClientOnly>
<TileWMSDemo />
</ClientOnly>

## Setup

<!--@include: ../../sources.plugin.md-->

## Usage

| Plugin Usage           |       Explicit Import       |
|------------------------|:---------------------------:|
| `<ol-source-tile-wms>` | `<Sources.OlSourceTileWms>` |

::: code-group

<<< ../../../../src/demos/TileWMSDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS-TileWMS.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

The following additional properties are available for setting specific `params`.

#### layers

Sets / overrides the `params.LAYERS` property.

- **Type**: `string` | `unknown[]`

#### styles

Sets / overrides the `params.STYLES` property.

- **Type**: `string` | `unknown[]`

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS-TileWMS.html) to see the available events tht will be fired.

```html
<ol-source-tile-wms :url="imgUrl" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS-TileWMS.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-tile-wms :url="url" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type TileWMS from "ol/source/TileWMS";

const sourceRef = ref<{ source: TileWMS }>(null);

onMounted(() => {
  const source: TileWMS = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
