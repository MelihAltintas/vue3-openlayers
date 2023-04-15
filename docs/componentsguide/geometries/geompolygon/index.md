# ol-geom-polygon

ol-geom-polygon can be used inside a ol-feature to draw a single polygon on the map.
The polygon may contain holes in it.
A polygon is defined by exactly one LinearRing as its circumference, and any number of additional LinearRings representing holes that are cut out.
Check the usage section for more info on this.

<script setup>
import PolygonDemo from "@demos/PolygonDemo.vue"
</script>
<ClientOnly>
<PolygonDemo />
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
          <ol-geom-polygon
            :coordinates="[
              [
                [-98.844959, 19.691586],
                [-98.842749, 19.69098],
                [-98.84217, 19.693122],
                [-98.844358, 19.693667],
                [-98.844959, 19.691586],
              ],
              [
                [-98.84573034297229, 19.691206743587088],
                [-98.84236332851385, 19.69026183008994],
                [-98.84133866368556, 19.69351739026062],
                [-98.8447693829186, 19.694312532467134],
                [-98.84573034297229, 19.691206743587088],
              ],
            ]"
          ></ol-geom-polygon>
          <ol-style>
            <ol-style-stroke color="red" :width="2"></ol-style-stroke>
            <ol-style-fill color="rgba(255,0,0,0.2)"></ol-style-fill>
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
    const center = ref([-98.8449, 19.6869]);
    const projection = ref("EPSG:4326");
    const zoom = ref(15);
    const rotation = ref(0);
    const radius = ref(40);
    const strokeWidth = ref(10);
    const strokeColor = ref("red");

    return {
      center,
      projection,
      zoom,
      rotation,
      radius,
      strokeWidth,
      strokeColor,
    };
  },
};
</script>
```

## Properties

### coordinates

- **Type**: `number[][][]`
  A polygon with coordinates in the map's projection.
