# ol-source-stamen

> Layer source for the Stamen tile server.

<script setup>
import StamenDemo from "@demos/StamenDemo.vue"
</script>

<ClientOnly>
<StamenDemo />
</ClientOnly>

## Usage

::: code-group

<<< ../../../../src/demos/StamenDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_Stamen-Stamen.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_Stamen-Stamen.html) to see the available events tht will be fired.

```html
<ol-source-stamen layer="watercolor" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_Stamen-Stamen.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-stamen layer="watercolor" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type Stamen from "ol/source/Stamen";

const sourceRef = ref<{ source: Stamen }>(null);

onMounted(() => {
  const source: Stamen = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
