# ol-source-stadia-maps

> Layer source for the StadiaMaps tile server.

[[toc]]

## Demo

<script setup>
import StadiaMapsDemo from "@demos/StadiaMapsDemo.vue"
</script>

<ClientOnly>
<StadiaMapsDemo />
</ClientOnly>

## Setup

<!--@include: ../../sources.plugin.md-->

## Usage

| Plugin Usage              |        Explicit Import         |
| ------------------------- | :----------------------------: |
| `<ol-source-stadia-maps>` | `<Sources.OlSourceStadiaMaps>` |

::: code-group

<<< ../../../../src/demos/StadiaMapsDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_StadiaMaps-StadiaMaps.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_StadiaMaps-StadiaMaps.html) to see the available events tht will be fired.

```html
<ol-source-stadia-maps layer="stamen_watercolor" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_StadiaMaps-StadiaMaps.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-stadia-maps layer="stamen_watercolor" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type StadiaMaps from "ol/source/StadiaMaps";

const sourceRef = ref<{ source: StadiaMaps }>(null);

onMounted(() => {
  const source: StadiaMaps = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
