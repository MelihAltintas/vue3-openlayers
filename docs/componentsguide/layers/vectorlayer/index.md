# ol-vector-layer

ol-vector-layer can render vector from various backend services. It should be used with together with ol-source-vector component.

<script setup>
import VectorSourceDemo1 from "@demos/VectorSourceDemo1.vue"
import FeatureSelectDemo from "@demos/FeatureSelectDemo.vue"
</script>

## Usage

### Example 1

<ClientOnly>
<VectorSourceDemo1 />
</ClientOnly>

Example below shows how you can use ol-vector-layer and ol-source-vector to render some vector features from remote backend.

Load features simply by providing url value and format GeoJSON

::: code-group

<<< ../../../../src/demos/VectorSourceDemo1.vue

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

- **Type**: `number`
- **Default**: `1`

Opacity (0, 1).

### background

- **Type**: `BackgroundColor`

A css color, or a function called with a view resolution returning a css color.

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

### renderBuffer

- **Type**: `number`
- **Default**: `100`
  The buffer in pixels around the viewport extent used by the renderer when getting features from the vector source for the rendering or hit-detection. Recommended value: the size of the largest symbol, line width or label.

### updateWhileAnimating

- **Type**: `Boolean`
- **Default**: `false`
  When set to true, feature batches will be recreated during animations. This means that no vectors will be shown clipped, but the setting will have a performance impact for large amounts of vector data. When set to false, batches will be recreated when no animation is active.

### updateWhileInteracting

- **Type**: `Boolean`
- **Default**: `false`
  When set to true, feature batches will be recreated during interactions. See also updateWhileAnimating.
