# ol-source-tianditu

> Layer source for [Tianditu](https://www.tianditu.gov.cn/)

`ol-source-tianditu` adds ability to display tile data from Tianditu Maps. To use
this source you should get **API key** at https://console.tianditu.gov.cn/.

<script setup>
import TiandituDemo from "@demos/TiandituDemo.vue"
</script>

<ClientOnly>
<TiandituDemo />
</ClientOnly>

## Usage

Example of `ol-source-tianditu` usage

::: code-group

<<< ../../../../src/demos/TiandituDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_WMTS-WMTS.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

### layerType

- **Type**: `string`
- **Default**: `img`

options: img, vec, ter, eia, cta

### tk

- **Type**: `string`

api key

### isLabel

- **Type**: `Boolean`
- **Default**: `false`

### culture

- **Type**: `String`
- **Default**: `en-us`

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_WMTS-WMTS.html) to see the available events tht will be fired.

```html
<ol-source-tianditu :url="url" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_WMTS-WMTS.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-tianditu :url="url" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup>
import { ref, onMounted } from "vue";

const sourceRef = ref(null);

onMounted(() => {
  const source = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
