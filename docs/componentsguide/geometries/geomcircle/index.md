# ol-geom-circle

ol-geom-circle can be used inside a ol-feature to draw a single circle.

<script setup>
import CircleDemo from "@demos/CircleDemo.vue"
</script>

<ClientOnly>
<CircleDemo />
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

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-circle :center="[30, 40]" :radius="0.2"></ol-geom-circle>
          <ol-style>
            <ol-style-stroke color="red" :width="3"></ol-style-stroke>
            <ol-style-fill color="rgba(255,200,0,0.2)"></ol-style-fill>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([30, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(10);
const rotation = ref(0);
</script>
```

## Properties

### center

- **Type**: `number[]`
  This circle's center coordinates in units of the map's projection.

### radius

- **Type**: `Number`
  This circle's radius in units of the map's projection.
