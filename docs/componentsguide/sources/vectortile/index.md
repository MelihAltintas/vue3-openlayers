# ol-source-vector-tile

ol-source-vector-tile can be used together with ol-vector-tile-layer to draw any vector tile data on the map.

[[toc]]

## Demo

<script setup>
import VectorTileLayerDemo from "@demos/VectorTileLayerDemo.vue"
</script>
<ClientOnly>
<VectorTileLayerDemo />
</ClientOnly>

## Setup

<!--@include: ../../sources.plugin.md-->

## Usage

| Plugin Usage              |        Explicit Import         |
| ------------------------- | :----------------------------: |
| `<ol-source-vector-tile>` | `<Sources.OlSourceVectorTile>` |

Example below shows how you can use ol-vector-tile-layer and ol-source-vector-tile to render some vector-tile features from remote backend.

::: code-group

<<< ../../../../src/demos/VectorTileLayerDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_VectorTile-VectorTile.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_VectorTile-VectorTile.html) to see the available events tht will be fired.

```html
<ol-source-vector-tile :url="url" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_VectorTile-VectorTile.html) to see the available methods.
