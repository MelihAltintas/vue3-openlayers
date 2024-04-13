# ol-source-bingmaps

> Layer source for [Bing Maps API](https://www.bing.com/maps)

`ol-source-bingmaps` adds ability to display tile data from Bing Maps. To use
this source you should get **API key** at https://www.bingmapsportal.com.

[[toc]]

## Demo

<script setup>
import BingMapsDemo from "@demos/BingMapsDemo.vue"
</script>

<ClientOnly>
<BingMapsDemo />
</ClientOnly>

## Setup

<!--@include: ../../sources.plugin.md-->

## Usage

| Plugin Usage           |       Explicit Import        |
|------------------------|:----------------------------:|
| `<ol-source-bingmaps>` | `<Sources.OlSourceBingMaps>` |

Example of `ol-source-bingmaps` usage

::: code-group

<<< ../../../../src/demos/BingMapsDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_BingMaps-BingMaps.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

### `key` ➡ `apiKey`

The property `key` from OpenLayers BingMaps is exposed as `apiKey` as the `key` attribute is reserved in Vue and cannot be used as a component property.
Please refer to the `key` property [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_BingMaps-BingMaps.html) but pass it as `apiKey`.

```html
<ol-source-bingmaps apiKey="YOUR_API_KEY" />
```

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_BingMaps-BingMaps.html) to see the available events tht will be fired.

```html
<ol-source-bingmaps apiKey="YOUR_API_KEY" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_BingMaps-BingMaps.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-bingmaps apiKey="YOUR_API_KEY" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type BingMaps from "ol/source/BingMaps";

const sourceRef = ref<{ source: BingMaps }>(null);

onMounted(() => {
  const source: BingMaps = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
