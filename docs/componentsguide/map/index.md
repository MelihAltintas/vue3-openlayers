# ol-map

> The core component of vue3-openlayers

This is the main container for all other vue3-openlayers components and has one `default`
slot to place them all. Usually you will use it together with `ol-view`
component to setup `zoom`, `center`, `projection` and other view related propeties for the map.

<script setup>
import ViewDemo from "@demos/ViewDemo.vue"
</script>

<ClientOnly>
<ViewDemo />
</ClientOnly>

## Usage

Example of a simple map.
See also documentation of `ol-view` component.

::: code-group

<<< ../../../src/demos/ViewDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) to see the available events tht will be fired.

```html
<ol-map @error="handleEvent">
  <!-- ... -->
</ol-map>
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-map ref="mapRef" @error="handleEvent">
    <!-- ... -->
  </ol-map>
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type Map from "ol/Map";

const mapRef = ref<{ map: Map }>(null);

onMounted(() => {
  const map: Map = mapRef.value?.map;
  // call your method on `map`
});
</script>
```
