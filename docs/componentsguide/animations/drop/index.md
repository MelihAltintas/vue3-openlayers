# ol-animation-drop

> Drop animation for feature

<script setup>
import DropAnimation from "@demos/DropAnimation.vue"
</script>

<ClientOnly>
<DropAnimation />
</ClientOnly>

```html
<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height:700px"
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

    <ol-vector-layer
      :updateWhileAnimating="true"
      :updateWhileInteracting="true"
    >
      <ol-source-vector ref="vectorsource">
        <ol-animation-drop :duration="2000">
          <ol-feature v-for="index in 20" :key="index">
            <ol-geom-point
              :coordinates="[getRandomInRange(24,45,3),getRandomInRange(35,41,3)]"
            ></ol-geom-point>

            <ol-style>
              <ol-style-icon :src="starIcon" :scale="0.1"></ol-style-icon>
            </ol-style>
          </ol-feature>
        </ol-animation-drop>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>
```

```js
import { ref } from "vue";
import starIcon from "@/assets/star.png";
export default {
  setup() {
    const center = ref([40, 40]);
    const projection = ref("EPSG:4326");
    const zoom = ref(6);
    const rotation = ref(0);
    const getRandomInRange = (from, to, fixed) => {
      return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    };
    return {
      center,
      projection,
      zoom,
      rotation,
      getRandomInRange,
      starIcon,
    };
  },
};
```

## Properties

# duration

- **Type**: `Number`
- **Default**: `1000`

duration of the animation in ms, default 1000

# revers

- **Type**: `Boolean`
- **Default**: `false`

revers the animation direction

# repeat

- **Type**: `Number`
- **Default**: `0`

number of time to repeat the animation, default 0

# hiddenStyle

- **Type**: `ol.style.Style`

a style to display the feature when playing the animation to be used to make the feature selectable when playing animation , default the feature will be hidden when playing (and not selectable)

# fade

- **Type**: `function`
- **Default**: `none`

an easing function used to fade in the feature, default none

# easing

- **Type**: `function`
- **Default**: `0`

an easing function for the animation, default ol.easing.linear

# speed

- **Type**: `Number`

speed of the feature if 0 the duration parameter will be used instead, default 0

# side

- **Type**: `Number`
- **Default**: `0`

top or bottom, default top
