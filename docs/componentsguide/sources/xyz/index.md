# ol-source-xyz

Layer source for tile data with URLs in a set XYZ format that are defined in a URL template.

ol-source-xyz allows you to use any tiled source from OpenStreetMaps to google maps.

[[toc]]

## Demo

<script setup>
import XYZSourceDemo from "@demos/XYZSourceDemo.vue"
</script>

<ClientOnly>
<XYZSourceDemo />
</ClientOnly>

## Setup

<!--@include: ../../sources.plugin.md-->

## Usage

| Plugin Usage      |     Explicit Import     |
| ----------------- | :---------------------: |
| `<ol-source-xyz>` | `<Sources.OlSourceXyz>` |

Example of ol-source-xyz loading OSM tiles (Note that if you need an OSM layer you're better off using ol-source-osm, this is for demonstration purposes only).

Example of loading google maps satellite tiles. Notice that this is only allowed in places that are publicly available to the internet (as opposed to being behind a password for example).

::: code-group

<<< ../../../../src/demos/XYZSourceDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_XYZ-XYZ.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

The following additional properties are available for setting specific `params`.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_XYZ-XYZ.html) to see the available events tht will be fired.

```html
<ol-source-xyz :url="url" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_XYZ-XYZ.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-xyz :url="url" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type XYZ from "ol/source/XYZ";

const sourceRef = ref<{ source: XYZ }>(null);

onMounted(() => {
  const source: XYZ = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
