# ol-source-geo-tiff

Source for GeoTIFF tiles.

[[toc]]

## Demo

<script setup>
import GeoTIFFDemo from "@demos/GeoTIFFDemo.vue"
</script>

<ClientOnly>
<GeoTIFFDemo />
</ClientOnly>

## Setup

<!--@include: ../../sources.plugin.md-->

## Usage

| Plugin Usage           |       Explicit Import       |
|------------------------|:---------------------------:|
| `<ol-source-geo-tiff>` | `<Sources.OlSourceGeoTIFF>` |

::: code-group

<<< ../../../../src/demos/GeoTIFFDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_GeoTIFF.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

none.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_GeoTIFF.html) to see the available events tht will be fired.

```html
<ol-source-tile-wms :url="imgUrl" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_GeoTIFF.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-tile-wms :url="url" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type GeoTIFF from "ol/source/GeoTIFF";

const sourceRef = ref<{ source: GeoTIFF }>(null);

onMounted(() => {
  const source: GeoTIFF = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
