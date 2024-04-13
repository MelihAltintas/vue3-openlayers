# ol-source-osm

Source layer ready to load OpenStreetMaps tiles

[[toc]]

## Demo

<script setup>
import ViewDemo from "@demos/ViewDemo.vue"
</script>

<ClientOnly>
<ViewDemo />
</ClientOnly>

## Setup

<!--@include: ../../sources.plugin.md-->

## Usage

| Plugin Usage      |     Explicit Import     |
|-------------------|:-----------------------:|
| `<ol-source-osm>` | `<Sources.OlSourceOSM>` |

Loading a simple OSM base layer.

::: code-group

<<< ../../../../src/demos/ViewDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html) to see the available events tht will be fired.

```html
<ol-source-osm :url="url" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-osm :url="url" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type OSM from "ol/source/OSM";

const sourceRef = ref<{ source: OSM }>(null);

onMounted(() => {
  const source: OSM = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
