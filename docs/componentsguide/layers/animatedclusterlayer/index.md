# ol-animated-clusterlayer

`ol-animated-clusterlayer` is a layer that animates clusters on zoom change.
`ol-interaction-clusterselect`. is a select interaction.
On select cluster springs apart to reveal the features.
The revealed features are themselves selectable.
Revealed features are themselves a cluster with an attribute 'features' that contain the original feature.

<script setup>
import AnimatedClusterDemo from "@demos/AnimatedClusterDemo.vue"
</script>

<ClientOnly>
<AnimatedClusterDemo />
</ClientOnly>

## Usage

::: code-group

<<< ../../../../src/demos/AnimatedClusterDemo.vue

:::

## Performance hints

The performance of a map with a huge amount of markers / clusters can be influenced by the way the data is passed to the `ol-source-vector`.
In case your map doesn't render correctly, interactive elements are blocking, or you are ending up with memory leaks, it's probably worth switching from passing the features directly to requesting features from a URL.
You can find more information in the [performance section for `ol-source-vector`](../../sources/vector/#performance-hints).

```vue
<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <!-- ... -->

    <ol-animated-clusterlayer :animationDuration="500" :distance="40">
      <ol-source-vector :url="url" :format="geoJson" />
    </ol-animated-clusterlayer>
  </ol-map>
</template>

<script setup>
import { /* ... */, computed, inject } from "vue";

// ...

const format = inject("ol-format");
const geoJson = new format.GeoJSON();
const url = computed(() => {
  return `http://localhost:3000/${count.value}`;
});
</script>
```

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

The z-index for layer rendering. When rendering, the layers will be ordered, first by Z-index and then by position.

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
