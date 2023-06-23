# ol-tile-layer

ol-tile-layer can render images from sources that provide pre-rendered, tiled images in grids organized by zoom levels. It should be used together with tiled source components like ol-source-xyz, ol-source-wmts, ol-source-osm, ol-source-bingmaps

<script setup>
import TileLayerDemo from "@demos/TileLayerDemo.vue"
</script>
<ClientOnly>
<TileLayerDemo />
</ClientOnly>

## Usage

Example below shows how to use ol-layer-tile component together with ol-source-wmts and with ol-source-osm.

::: code-group

<<< ../../../../src/demos/TileLayerDemo.vue

:::

## Properties

### className

- **Type**: `string`
- **Default**: `ol-layer`

A CSS class name to set to the layer element.

### opacity

- **Type**: `number `
- **Default**: `1`

Opacity (0, 1).

### visible

- **Type**: `boolean`
- **Default**: `true`

Visibility.

### extent

- **Type**: `Array`

The bounding extent for layer rendering. The layer will not be rendered outside of this extent.

### zIndex

- **Type**: `number`

The z-index for layer rendering. At rendering time, the layers will be ordered, first by Z-index and then by position.

### minResolution

- **Type**: `number`

The minimum resolution (inclusive) at which this layer will be visible.

### maxResolution

- **Type**: `number`

The maximum resolution (exclusive) below which this layer will be visible.

### minZoom

- **Type**: `number`

The minimum view zoom level (exclusive) above which this layer will be visible.

### maxZoom

- **Type**: `number`

The maximum view zoom level (inclusive) at which this layer will be visible.

### preload

- **Type**: `number`
- **Default**: `0`
  Low-resolution tiles up to preload level will be load.
