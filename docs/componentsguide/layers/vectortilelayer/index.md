# ol-vector-tile-layer

ol-vector-tile-layer can render vector tile from various backend services. It should be used with together with ol-source-vector-tile component.

<script setup>
import VectorTileLayerDemo from "@demos/VectorTileLayerDemo.vue"
</script>
<ClientOnly>
<VectorTileLayerDemo />
</ClientOnly>

## Usage

Example below shows how you can use ol-vector-tile-layer and ol-source-vector-tile to render some vector-tile features from remote backend.

Load features simply by providing url value and format MVT

::: code-group

<<< ../../../../src/demos/VectorTileLayerDemo.vue

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
