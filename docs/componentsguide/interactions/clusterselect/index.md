# ol-interaction-clusterselect

> Interaction for selecting vector cluster features

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
    style="height:400px"
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

<script>
import { ref } from "vue";

import markerIcon from "@/assets/marker.png";

export default {
  setup() {
    const center = ref([40, 40]);
    const projection = ref("EPSG:4326");
    const zoom = ref(5);
    const rotation = ref(0);

    const overrideStyleFunction = (feature, style) => {
      let clusteredFeatures = feature.get("features");
      let size = clusteredFeatures.length;

      let color = size > 20 ? "192,0,0" : size > 8 ? "255,128,0" : "0,128,0";
      var radius = Math.max(8, Math.min(size, 20));
      let dash = (2 * Math.PI * radius) / 6;
      let calculatedDash = [0, dash, dash, dash, dash, dash, dash];

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

    return {
      center,
      projection,
      zoom,
      rotation,
      markerIcon,
      getRandomInRange,
      overrideStyleFunction,
      featureSelected,
    };
  },
};
</script>
```

## Properties

### multi

- **Type**: `String`

### filter

- **Type**: `Function`

### condition

- **Type**: `Function`

### pointRadius

Radius to calculate distance between the features

- **Type**: `Number`
- **Default**: `7`

### animate

If the cluster will animate when features spread out.

- **Type**: `Boolean`
- **Default**: `true`

### animationDuration

- **Type**: `Number`
- **Default**: `500`

### circleMaxObjects

Number of objects that can be placed on a circle.

- **Type**: `Number`

### maxObjects

Number of objects that can be drawn, other are hidden.

- **Type**: `Number`

### spiral

- **Type**: `Boolean`
- **Default**: `true`

### selectCluster

`false` if you don't want to get cluster selected.

- **Type**: `Boolean`
- **Default**: `true`

### autoClose

If selecting a cluster should close previously selected clusters.
Set to`false` to get toggle feature.

- **Type**: `Boolean`
- **Default**: `true`

### featureStyle

It is used to style the revealed features as options
The style is used by the Select interaction.

- **Type**: `Function`

### style

- **Type**: `Function`
