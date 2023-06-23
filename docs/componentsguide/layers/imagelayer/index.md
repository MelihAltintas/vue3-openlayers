# ol-image-layer

ol-image-layer components can render any server-rendered image, it is a container for raster source, like ol-source-image-static

<script setup>
import ImageLayerDemo from "@demos/ImageLayerDemo.vue"
</script>

<ClientOnly>
<ImageLayerDemo />
</ClientOnly>

## Usage

Example below shows how to use ol-image-layer component together with ol-source-image-static to render custom image on the map. The map view is configured with a custom projection that translates image coordinates directly into map coordinates.

::: code-group

<<< src/demos/ImageLayerDemo.vue

:::

## Properties

### className

- **Type**: `string`
- **Default**: `ol-layer`

A CSS class name to set to the layer element.

### opacity

- **Type**: `number`
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
