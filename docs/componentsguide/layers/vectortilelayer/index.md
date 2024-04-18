# ol-vector-tile-layer

ol-vector-tile-layer can render vector tile from various backend services. It should be used with together with ol-source-vector-tile component.

[[toc]]

## Demo

<script setup>
import VectorTileLayerDemo from "@demos/VectorTileLayerDemo.vue"
import FeatureSelectDemo from "@demos/FeatureSelectDemo.vue"
</script>

## Setup

<!--@include: ../../layers.plugin.md-->

## Usage

| Plugin Usage             |       Explicit Import        |
| ------------------------ | :--------------------------: |
| `<ol-vector-tile-layer>` | `<Layers.OlVectorTileLayer>` |

### Example 1

Example below shows how you can use ol-vector-tile-layer and ol-source-vector-tile to render some vector-tile features from remote backend.

Load features simply by providing url value and format MVT

<ClientOnly>
<VectorTileLayerDemo />
</ClientOnly>

::: code-group

<<< ../../../../src/demos/VectorTileLayerDemo.vue

:::

### Example 2

The Example below shows how you can copy features from a `ol-vector-tile-layer` to a `ol-vector-layer`. It also visualizes how you can use the [Turf](https://turfjs.org/) library in combination with vue3-openlayers.

> #### Important Notes:
>
> - You can use the `{ featureClass: Feature }` option, when defining the `ol-source-vector-tile` format to Control the Type of Features visible in the Map
> - [Turf](https://turfjs.org/) is only Compatible with [EPSG:4326](https://epsg.io/4326). Openlayers uses [EPSG:3857](https://epsg.io/3857), so you need to convert between them.

<ClientOnly>
<FeatureSelectDemo />
</ClientOnly>

::: code-group

<<< ../../../../src/demos/FeatureSelectDemo.vue

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

### renderMode

- **Type**: `'hybrid' | 'vector'`
- **Default**: `hybrid`

Render mode for vector tiles.

- `hybrid`: Polygon and line elements are rendered as images, so pixels are scaled during zoom animations. Point symbols and texts are accurately rendered as vectors and can stay upright on rotated views.
- `vector`: Everything is rendered as vectors. Use this mode for improved performance on vector tile layers with only a few rendered features (e.g. for highlighting a subset of features of another layer with the same source).
