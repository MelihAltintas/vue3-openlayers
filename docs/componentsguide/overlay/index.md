# vl-overlay

> HTML element attached to geographical coordinate

`ol-overlay` component creates a HTML element that would be displayed over
the map. It has **default** scoped slot to render your custom content.

<script setup>
import OverlayDemo from "@demos/OverlayDemo.vue"
</script>

<ClientOnly>
<OverlayDemo />

</ClientOnly>

## Usage

Example below shows how to add custom content on to the map.

```html
<template>
  <ol-map style="height:400px">
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

    <ol-overlay :position="[40,40]">
      <template v-slot="slotProps">
        <div class="overlay-content">
          Hello world!<br />
          Position: {{ slotProps.position }}
        </div>
      </template>
    </ol-overlay>
  </ol-map>
</template>

<style>
  .overlay-content {
    background: #efefef;
    box-shadow: 0 5px 10px rgb(2 2 2 / 20%);
    padding: 10px 20px;
    font-size: 16px;
  }
</style>
```

```js
import { ref } from "vue";
export default {
  setup() {
    const center = ref([40, 40]);
    const projection = ref("EPSG:4326");
    const zoom = ref(8);
    const rotation = ref(0);

    return {
      center,
      projection,
      zoom,
      rotation,
    };
  },
};
```

## Properties

# position

- **Type**: `number[]`
- **Required**

Coordinate of the overlay position in view

# offset

- **Type**: `number[]`
- **Default**: `[0, 0]`

XY axis offset in pixels used when positioning the overlay.

# positioning

- **Type**: `string`
- **Default**: `top-left`

The overlay positioning relative to its Possible values: `bottom-left`,
`bottom-center`, `bottom-right`, `center-left`, `center-center`, `center-right`, `top-left`, `top-center`,
and `top-right`.

# stopEvent

- **Type**: `boolean`
- **Default**: `true`

Whether pointer event propagation from overlay element to the map viewport should be stopped. When set to `true`
the overlay will be placed in the same container with map controls.

# insertFirst

- **Type**: `boolean`
- **Default**: `true`

Determines whether the overlay will be prepended or appended in the overlay container.
When `stop-event` is set to `true` you will probably set `insert-first` to `true`
so the overlay is displayed below controls.

# autoPan

- **Type**: `boolean`
- **Default**: `false`

Enables map panning when the overlay will be added, so the overlay will be visible in the current viewport.

# autoPanMargin

- **Type**: `boolean`
- **Default**: `20`

The margin (in pixels) between the overlay and the viewport borders.

# autoPanAnimation

- **Type**: `Object`
- **Default**: `undefined`

The animation options used to pan the overlay into view.

## Events

- `elementChanged`
- `offsetChanged`
- `positionChanged`
- `positioningChanged`
