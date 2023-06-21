# ol-source-webglpoints

> A vector source for rendering points with WebGL

Please note, that you can't use `ol-style` and related style components here as child components.
You have to apply styles directly via the `style` prop on the `ol-webgl-points-layer` component.

<script setup>
import WebglPointsLayerDemo from "@demos/WebglPointsLayerDemo.vue"
import WebglPointsSourceDemo from "@demos/WebglPointsSourceDemo.vue"
</script>

## Usage

### with `url` prop

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

    <ol-webgl-points-layer :styles="webglPointsStyle">
      <ol-source-webglpoints
        :format="geoJson"
        url="https://openlayers.org/en/latest/examples/data/geojson/world-cities.geojson"
      />
    </ol-webgl-points-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(3);
const rotation = ref(0);

const format = inject("ol-format");
const geoJson = new format.GeoJSON();

const webglPointsStyle = {
  symbol: {
    symbolType: "circle",
    size: [
      "interpolate",
      ["linear"],
      ["get", "population"],
      40000,
      8,
      2000000,
      28,
    ],
    color: "#ffed02",
    rotateWithView: false,
    offset: [0, 0],
    opacity: [
      "interpolate",
      ["linear"],
      ["get", "population"],
      40000,
      0.6,
      2000000,
      0.92,
    ],
  },
};
</script>
```

<ClientOnly>
<WebglPointsLayerDemo />
</ClientOnly>

### `ol-feature` child component

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

    <ol-webgl-points-layer :styles="webglPointsStyle">
      <ol-source-webglpoints :format="geoJson">
        <ol-feature v-for="index in 20" :key="index">
          <ol-geom-point
            :coordinates="[
              getRandomInRange(24, 45, 3),
              getRandomInRange(35, 41, 3),
            ]"
          ></ol-geom-point>
        </ol-feature>
      </ol-source-webglpoints>
    </ol-webgl-points-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(5);
const rotation = ref(0);

const format = inject("ol-format");
const geoJson = new format.GeoJSON();

const getRandomInRange = (from, to, fixed) => {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
};

const webglPointsStyle = {
  symbol: {
    symbolType: "circle",
    size: [
      "interpolate",
      ["linear"],
      ["get", "population"],
      40000,
      8,
      2000000,
      28,
    ],
    color: "#ffed02",
    rotateWithView: false,
    offset: [0, 0],
    opacity: [
      "interpolate",
      ["linear"],
      ["get", "population"],
      40000,
      0.6,
      2000000,
      0.92,
    ],
  },
};
</script>
```

<ClientOnly>
<WebglPointsSourceDemo />
</ClientOnly>

## Properties

### attributions

- **Type**: ` [String, Array]`
- **Default**: `EPSG:3857`

### features

- **Type**: `Array`
- **Default**: `() => []`

### format

- **Type**: `Format`

formats available with `inject('ol-format')`

### loader

- **Type**: `Function`

### overlaps

- **Type**: `Boolean`
- **Default**: `true`

### projection

- **Type**: `String`
- **Default**: 'EPSG:3857'

### strategy

- **Type**: `Function`

strategy available with inject('ol-loadingstrategy');

### url

- **Type**: `[String, Function]`

### useSpatialIndex

- **Type**: `Boolean`

- **Default**: `true`

### wrapX

- **Type**: `Boolean`
- **Default**: `true`

## Events

- `addfeature`
- `change`
- `changefeature`
- `clear`
- `error`
- `featuresloadend`
- `featuresloaderror`
- `featuresloadstart`
- `propertychange`
- `removefeature`
