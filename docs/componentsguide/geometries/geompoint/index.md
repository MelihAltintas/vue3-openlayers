# ol-geom-point

ol-geom-point can be used inside a ol-feature to draw a single points

<script setup>
import GeomPoint from "@demos/GeomPoint.vue"
</script>

<ClientOnly>
<GeomPoint /> 
</ClientOnly>

## Usage

```html
<template>
  <button @click="()=> coordinate=coordinate.map(a=> a+0.01)">
    changecoor
  </button>
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
          <ol-geom-point :coordinates="coordinate"></ol-geom-point>
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
```

```js
import { ref } from "vue";
export default {
  setup() {
    const center = ref([40, 40]);
    const projection = ref("EPSG:4326");
    const zoom = ref(8);
    const rotation = ref(0);
    const radius = ref(40);
    const strokeWidth = ref(10);
    const strokeColor = ref("red");
    const fillColor = ref("white");
    const coordinate = ref([40, 40]);

    return {
      center,
      projection,
      zoom,
      rotation,
      radius,
      strokeWidth,
      strokeColor,
      fillColor,
      coordinate,
    };
  },
};
```

## Properties

# coordinates

- **Type**: `number[]`
  This point's coordinates in units of the map's projection.
