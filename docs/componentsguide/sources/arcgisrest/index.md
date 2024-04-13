# ol-source-tile-arcgis-rest

Layer source for tile data from ArcGIS Rest services. Map and Image Services are supported.

For cached ArcGIS services, better performance is available using the XYZ data source.

[[toc]]

## Demo

<script setup>
import TileArcGISRestSourceDemo from "@demos/TileArcGISRestSourceDemo.vue"
</script>

<ClientOnly>
<TileArcGISRestSourceDemo />
</ClientOnly>

## Setup

<!--@include: ../../sources.plugin.md-->

## Usage

| Plugin Usage                   |          Explicit Import           |
|--------------------------------|:----------------------------------:|
| `<ol-source-tile-arcgis-rest>` | `<Sources.OlSourceTileArcGISRest>` |

Example of `ol-source-tile-arcgis-rest` usage. Information about the arcgis service used, available at https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/CadastreObjects/MapServer.

::: code-group

<<< ../../../../src/demos/TileArcGISRestSourceDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_TileArcGISRest-TileArcGISRest.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

### `tileSize`

Size of tile for the grid pattern for sources accessing tiled-image servers.
This property will only be used, when the `tileGrid` property is not defined.
It uses the [`createXYZ`](https://openlayers.org/en/latest/apidoc/module-ol_tilegrid.html#.createXYZ) function to create a tile grid with the given `tileSize`.

- **Type**: `Array[Number]`
- **default**: `[256, 256]`

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_TileArcGISRest-TileArcGISRest.html) to see the available events tht will be fired.

```html
<ol-source-tile-arcgis-rest :url="url" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_TileArcGISRest-TileArcGISRest.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-tile-arcgis-rest :url="url" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type TileArcGISRest from "ol/source/TileArcGISRest";

const sourceRef = ref<{ source: TileArcGISRest }>(null);

onMounted(() => {
  const source: TileArcGISRest = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
