# ol-source-wmts

Layer source for tile data from WMTS servers.

[[toc]]

## Demo

<script setup>
import TileLayerDemo from "@demos/TileLayerDemo.vue"
</script>

<ClientOnly>
<TileLayerDemo />
</ClientOnly>

## Setup

<!--@include: ../../sources.plugin.md-->

## Usage

| Plugin Usage       |     Explicit Import      |
| ------------------ | :----------------------: |
| `<ol-source-wmts>` | `<Sources.OlSourceWmts>` |

Example below shows how to use ol-layer-tile component together with ol-source-wmts and with ol-source-osm.

::: code-group

<<< ../../../../src/demos/TileLayerDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_WMTS-WMTS.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

#### `styles`

Sets the WMTS source `style` property.

- **Type**: `string`

#### `tileZoomLevel`

Sets the zoom level to calculate the used `WMTSTileGrid`.
It's only used, when the `tileGrid` property isn't set.

- **Type**: `number`
- **Default**: `30`

#### `tileMatrixPrefix`

Sets the matrix prefix string to create the used `WMTSTileGrid`.
It's only used, when the `tileGrid` property isn't set.

- **Type**: `string`
- **Default**: `""`

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_WMTS-WMTS.html) to see the available events tht will be fired.

```html
<ol-source-wmts :url="imgUrl" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_WMTS-WMTS.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-wmts :url="url" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type WMTS from "ol/source/WMTS";

const sourceRef = ref<{ source: WMTS }>(null);

onMounted(() => {
  const source: WMTS = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
