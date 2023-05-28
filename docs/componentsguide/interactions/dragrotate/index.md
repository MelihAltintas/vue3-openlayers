# ol-interaction-dragrotate

> Rotate the map by clicking and dragging on the map, normally combined with an `ol/events/condition` that limits it to when the `alt` and `shift` keys are held down.

<script setup>
import DragRotateDemo from "@demos/DragRotateDemo.vue"
</script>

<ClientOnly>
<DragRotateDemo/>
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
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-interaction-dragrotate />
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([-102.13121, 40.2436]);
const projection = ref("EPSG:4326");
const zoom = ref(5);
</script>
```

## Properties

### condition

- **Type**: `Function`

### duration

- **Type**: `Number`
- **Default**: `250`
