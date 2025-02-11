# ol-source-vector

ol-source-vector can be used together with ol-vector-layer to draw any vector data on the map.

[[toc]]

<script setup>
import GeomPoint from "@demos/GeomPoint.vue"
import VectorSourceDemo1 from "@demos/VectorSourceDemo1.vue"
import VectorSourceDemo2 from "@demos/VectorSourceDemo2.vue"
import VectorSourceDemo3 from "@demos/VectorSourceDemo3.vue"
import AnimatedClusterDemo2 from "@demos/AnimatedClusterDemo2.vue"
</script>

## Setup

<!--@include: ../../sources.plugin.md-->

## Usage

| Plugin Usage         |      Explicit Import       |
| -------------------- | :------------------------: |
| `<ol-source-vector>` | `<Sources.OlSourceVector>` |

### `ol-feature` component (GeoJSON)

Static features with the help of `ol-feature`, should be used only for tiny static layers.

<ClientOnly>
<GeomPoint />
</ClientOnly>

::: code-group

<<< ../../../../src/demos/GeomPoint.vue

:::

### `url` property

Load features simply by providing url value and format GeoJSON

<ClientOnly>
<VectorSourceDemo1 />
</ClientOnly>

::: code-group

<<< ../../../../src/demos/VectorSourceDemo1.vue

:::

### `features` property

<ClientOnly>
<AnimatedClusterDemo2 />
</ClientOnly>

::: code-group

<<< ../../../../src/demos/AnimatedClusterDemo2.vue

:::

### `urlFunction`

Next example loads features from remote WFS service by viewport BBOX. With format and strategy you can define custom vector source format and loading strategy.

<ClientOnly>
<VectorSourceDemo2/>
</ClientOnly>

::: code-group

<<< ../../../../src/demos/VectorSourceDemo2.vue

:::

### TopoJSON

You can also use other Vector formats like TopoJSON.

<ClientOnly>
<VectorSourceDemo3/>
</ClientOnly>

::: code-group

<<< ../../../../src/demos/VectorSourceDemo3.vue

:::

## Performance hints

When rendering a large number of markers on a map using OpenLayers, there can be performance differences between requesting data from a URL as GeoJSON and passing the features directly through the source vector.

**Data Transfer:**
When requesting data from a URL, the GeoJSON data is transferred over the network as needed, rather than loading the entire dataset upfront.
This can be advantageous when dealing with large datasets, as it minimizes the initial data transfer and reduces the time required to load the markers onto the map.

**Data Streaming:**
Requesting data from a URL allows for streaming the GeoJSON data in smaller chunks, which can significantly improve performance when rendering a large number of markers.
The data can be fetched progressively and rendered incrementally, providing a smoother user experience and reducing the strain on system resources.

**Memory Management:**
By requesting data from a URL, the GeoJSON data is loaded on-demand and can be efficiently managed by OpenLayers.
When passing the features directly through the source vector, all the data is loaded into memory at once, which can cause performance issues and potentially lead to out-of-memory errors when dealing with extremely large datasets.

**Data Filtering and Caching:**
Requesting data from a URL allows for server-side data filtering, which means you can request only the necessary markers based on certain criteria.
Additionally, the server can cache the GeoJSON data, enabling faster subsequent requests and reducing the load on the server and the network.

**Dynamic Data Updates:**
If your data is dynamic and frequently updated, requesting data from a URL provides a convenient way to fetch the latest information without having to reload the entire dataset.
This can be particularly useful when working with real-time data or when updates occur frequently.

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html) to see the available events tht will be fired.

```html
<ol-source-vector :url="url" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-vector :url="url" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type VectorSource from "ol/source/vector";

const sourceRef = ref<{ source: VectorSource }>(null);

onMounted(() => {
  const source: VectorSource = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
