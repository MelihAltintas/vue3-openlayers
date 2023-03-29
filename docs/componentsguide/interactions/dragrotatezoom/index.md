# ol-interaction-dragrotatezoom

> Zoom and rotate the map by clicking and dragging on the map. By default, this interaction is limited to when the `shift` key is held down.

<script setup>
import DragRotateZoomDemo from "@demos/DragRotateZoomDemo.vue"
</script>

<ClientOnly>
<DragRotateZoomDemo/>
</ClientOnly>

## Usage

```html
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

    <ol-interaction-dragrotatezoom />
  </ol-map>
</template>
```

```js
import { ref } from "vue";
export default {
  setup() {
    const center = ref([-102.13121, 40.2436]);
    const projection = ref("EPSG:4326");
    const zoom = ref(5);

    return {
      center,
      projection,
      zoom,
    };
  },
};
```

## Properties

# condition

- **Type**: `Function`

# duration

- **Type**: `Number`
- **Default**: `400`
