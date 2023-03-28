# ol-geolocation

> HTML5 Geolocation wrapper

`ol-geoloc` provides HTML5 Geolocation capabilities as a Vue component.
The [Geolocation API](https://www.w3.org/TR/geolocation-API/) is used to locate
a user's position. You can place it to the **default slot** of `ol-map` component.

<script setup>
import GeoLocationDemo from "@demos/GeoLocationDemo.vue"
</script>

<ClientOnly>
<GeoLocationDemo />
</ClientOnly>

```html
<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height:400px"
    ref="map"
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

    <ol-geolocation :projection="projection" @positionChanged="geoLocChange">
      <template v-slot="slotProps">
        <ol-vector-layer :zIndex="2">
          <ol-source-vector>
            <ol-feature ref="positionFeature">
              <ol-geom-point :coordinates="slotProps.position"></ol-geom-point>
              <ol-style>
                <ol-style-icon :src="hereIcon" :scale="0.1"></ol-style-icon>
              </ol-style>
            </ol-feature>
          </ol-source-vector>
        </ol-vector-layer>
      </template>
    </ol-geolocation>
  </ol-map>
</template>
```

```js
import hereIcon from "@/assets/here.png";
import { ref } from "vue";
export default {
  setup() {
    const center = ref([40, 40]);
    const projection = ref("EPSG:4326");
    const zoom = ref(8);
    const rotation = ref(0);

    const view = ref(null);
    const map = ref(null);

    const geoLocChange = (loc) => {
      console.log(loc);
      view.value.fit([loc[0], loc[1], loc[0], loc[1]], {
        maxZoom: 14,
      });
    };

    return {
      center,
      projection,
      zoom,
      rotation,
      hereIcon,
      view,
      map,
      geoLocChange,
    };
  },
};
```

## Properties

# tracking

- **Type**: `boolean`
- **Default**: `true`

Enables / disables tracking.

# tracking-options

- **Type**: `Object`
- **Default**: `undefined`

Tracking options. See [PositionOptions](https://www.w3.org/TR/geolocation-API/#position_options_interface) documentation.

# projection

- **Type**: `string`
- **Default**: `EPSG:3857`

Projection of the current position.

## Emits

- `positionChanged`
- `speedChanged`
- `headingChanged`
- `altitudeChanged`
- `altitudeAccuracyChanged`
- `accuracyGeometryChanged`
