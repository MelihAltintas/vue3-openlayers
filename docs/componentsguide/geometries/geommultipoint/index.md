# ol-geom-multi-point

ol-geom--multi-point can be used inside a ol-feature to draw multiple points at once.

<script setup>
import MultiPoint from "@demos/MultiPoint.vue"
</script>
<ClientOnly>
<MultiPoint />
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

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-multi-point
            :coordinates="[
              [116.544921, 40.451633],
              [116.545264, 40.451649],
              [116.545865, 40.451698],
              [116.546144, 40.451551],
              [116.546337, 40.451274],
              [116.546788, 40.451143],
              [116.547324, 40.451078],
              [116.547539, 40.450996],
              [116.547839, 40.450719],
              [116.54844, 40.450506],
              [116.548933, 40.450604],
              [116.549448, 40.450604],
              [116.550242, 40.450376],
              [116.550865, 40.450163],
              [116.551702, 40.449935],
              [116.552581, 40.449576],
            ]"
          ></ol-geom-multi-point>
          <ol-style>
            <ol-style-circle :radius="radius">
              <ol-style-fill :color="fillColor"></ol-style-fill>
              <ol-style-stroke
                :color="strokeColor"
                :width="strokeWidth"
              ></ol-style-stroke>
            </ol-style-circle>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const center = ref([116.54875, 40.45064]);
    const projection = ref("EPSG:4326");
    const zoom = ref(17);
    const rotation = ref(0);
    const radius = ref(10);
    const strokeWidth = ref(4);
    const strokeColor = ref("red");
    const fillColor = ref("white");
    return {
      center,
      projection,
      zoom,
      rotation,
      radius,
      strokeWidth,
      strokeColor,
      fillColor,
    };
  },
};
</script>
```

## Properties

### coordinates

- **Type**: `number[][]`
  An array of points in units of the map's projection.
