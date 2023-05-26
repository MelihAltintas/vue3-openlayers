# ol-feature

> A container for geometry

`ol-feature` can be used together with `ol-vector-layer` and `ol-source-vector` to add GeoJSON features to the map.
The `ol-feature` must contain a single child element (Geometry), e. .g `ol-geom-point` and a `ol-style` which defined the style for the Geometry.
If you want to display multiple Geometries, you need to add multiple `ol-feature`'s.

<script setup>
import GeomPoint from "@demos/GeomPoint.vue"
</script>

## Usage

```vue
<template>
  <button @click="() => (coordinate = coordinate.map((a) => a + 0.01))">
    changecoor
  </button>
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

<script setup>
import { ref } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);
const radius = ref(40);
const strokeWidth = ref(10);
const strokeColor = ref("red");
const fillColor = ref("white");
const coordinate = ref([40, 40]);
</script>
```

<ClientOnly>
<GeomPoint />
</ClientOnly>

## Properties

### properties

Properties to connect with the feature.

- **Type**: ` [Geometry, Object, Array]`
