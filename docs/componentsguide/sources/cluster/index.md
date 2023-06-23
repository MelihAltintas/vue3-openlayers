# ol-source-cluster

> Layer source to cluster vector data.

Works out of the box with point geometries.
For other geometry types, or if not all geometries should be considered for clustering, a custom `geometryFunction` can be defined.

<script setup>
import ClusterDemo from "@demos/ClusterDemo.vue"
</script>

<ClientOnly>
<ClusterDemo />
</ClientOnly>

## Usage

This example shows how to do clustering on 1000 point features.

::: code-group

<<< ../../../../src/demos/ClusterDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_Cluster-Cluster.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_Cluster-Cluster.html) to see the available events tht will be fired.

```html
<ol-source-cluster @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_Cluster-Cluster.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-cluster :distance="40" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Cluster } from "ol/source";

const sourceRef = ref<{ source: Cluster }>(null);

onMounted(() => {
  const source: Cluster = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
