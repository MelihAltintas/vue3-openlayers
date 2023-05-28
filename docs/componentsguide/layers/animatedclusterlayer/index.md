# ol-animated-clusterlayer

ol-animated-clusterlayer is a layer that animates clusters on zoom change. ol-interaction-clusterselect. is a select interaction. On select cluster springs apart to reveal the features. The revealed features are themselves selectable. Revealed features are themselves a cluster with an attribute 'features' that contain the original feature.

<script setup>
import AnimatedClusterDemo from "@demos/AnimatedClusterDemo.vue"
</script>

<ClientOnly>
<AnimatedClusterDemo />
</ClientOnly>

## Usage

```vue
<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-interaction-clusterselect @select="featureSelected" :pointRadius="20">
      <ol-style>
        <ol-style-stroke color="green" :width="5"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.5)"></ol-style-fill>
        <ol-style-icon :src="markerIcon" :scale="0.05"></ol-style-icon>
      </ol-style>
    </ol-interaction-clusterselect>

    <ol-animated-clusterlayer :animationDuration="500" :distance="40">
      <ol-source-vector ref="vectorsource">
        <ol-feature v-for="index in 500" :key="index">
          <ol-geom-point
            :coordinates="[
              getRandomInRange(24, 45, 3),
              getRandomInRange(35, 41, 3),
            ]"
          ></ol-geom-point>
        </ol-feature>
      </ol-source-vector>

      <ol-style :overrideStyleFunction="overrideStyleFunction">
        <ol-style-stroke color="red" :width="2"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>

        <ol-style-circle :radius="20">
          <ol-style-stroke
            color="black"
            :width="15"
            :lineDash="[]"
            lineCap="butt"
          ></ol-style-stroke>
          <ol-style-fill color="black"></ol-style-fill>
        </ol-style-circle>

        <ol-style-text>
          <ol-style-fill color="white"></ol-style-fill>
        </ol-style-text>
      </ol-style>
    </ol-animated-clusterlayer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

import markerIcon from "@/assets/marker.png";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(5);
const rotation = ref(0);

const overrideStyleFunction = (feature, style) => {
  const clusteredFeatures = feature.get("features");
  const size = clusteredFeatures.length;

  const color = size > 20 ? "192,0,0" : size > 8 ? "255,128,0" : "0,128,0";
  const radius = Math.max(8, Math.min(size, 20));
  const dash = (2 * Math.PI * radius) / 6;
  const calculatedDash = [0, dash, dash, dash, dash, dash, dash];

  style.getImage().getStroke().setLineDash(dash);
  style
    .getImage()
    .getStroke()
    .setColor("rgba(" + color + ",0.5)");
  style.getImage().getStroke().setLineDash(calculatedDash);
  style
    .getImage()
    .getFill()
    .setColor("rgba(" + color + ",1)");

  style.getImage().setRadius(radius);

  style.getText().setText(size.toString());
};

const getRandomInRange = (from, to, fixed) => {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
};

const featureSelected = (event) => {
  console.log(event);
};
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
