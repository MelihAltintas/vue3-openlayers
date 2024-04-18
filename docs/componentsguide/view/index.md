# ol-view

A View object represents a simple 2D view of the map.

This is the object to act upon to change the center, resolution, and rotation of the map.

A View has a projection. The projection determines the coordinate system of the center, and its units determine the units of the resolution (projection units per pixel). The default projection is Spherical Mercator (EPSG:3857).

[[toc]]

## Demo

<script setup>
import ViewDemo from "@demos/ViewDemo.vue"
</script>

<ClientOnly>
<ViewDemo />
</ClientOnly>

## Setup

<!--@include: ../map.plugin.md-->

## Usage

| Plugin Usage | Explicit Import |
| ------------ | :-------------: |
| `<ol-view>`  | `<Map.OlView>`  |

Example of simple map with view in EPSG:4326 projection.
See also documentation of ol-map component

::: code-group

<<< ../../../src/demos/ViewDemo.vue

:::

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

### `enableRotation`

Rotation is enabled by default.
Setting this to `false` prevents from any rotation even when the property `rotation` is set or by using methods such ad `adjustRotation` or `setRotation`.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) to see the available events tht will be fired.

```html
<ol-view @error="handleEvent">
  <!-- ... -->
</ol-view>
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-view ref="viewRef" @error="handleEvent">
    <!-- ... -->
  </ol-view>
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type View from "ol/View";

const viewRef = ref<{ view: View }>(null);

onMounted(() => {
  const view: View = viewRef.value?.view;
  // call your method on `view`
});
</script>
```
