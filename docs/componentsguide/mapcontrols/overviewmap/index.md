# ol-overviewmap-control

> A Overview Map control for OpenLayers.

[[toc]]

## Demo

<script setup>
import OverviewmapControlDemo from "@demos/OverviewmapControlDemo.vue"
</script>
<ClientOnly>
<OverviewmapControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage               |           Explicit Import            |
|----------------------------|:------------------------------------:|
| `<ol-overviewmap-control>` | `<MapControls.OlOverviewMapControl>` |

::: code-group

<<< ../../../../src/demos/OverviewmapControlDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-overviewmap-control :ref="controlRef">
    <!-- ... -->
  </ol-overviewmap-control>
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type OverviewMap from "ol/control/OverviewMap";

const controlRef = ref<{ control: OverviewMap }>(null);

onMounted(() => {
  const controlRef: OverviewMap = sourceRef.value?.control;
  // call your method on `control`
});
</script>
```
