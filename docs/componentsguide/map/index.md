# ol-map

> The core component of Vue3 OpenLayers

This is the main container for all other Vue3 OpenLayers components and has one `default`
slot to place them all. Usually you will use it together with `ol-view`
component to setup `zoom`, `center`, `projection` and other view related propeties for the map.

# Usage
Example of a simple map.  
See also documentation of `ol-view` component.
```html
<template>
<ol-map style="height:400px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" 
    :projection="projection" />

    <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer>
    
</ol-map>
</template>
```

```js
import {
    ref
} from 'vue'
export default {
    setup() {
        const center = ref([40, 40])
        const projection = ref('EPSG:4326')
        const zoom = ref(8)
        const rotation = ref(0)
        return {
            center,
            projection,
            zoom,
            rotation
        }
    },
}
```
# Output
<script setup>
import MapDemo from "@demos/MapDemo.vue"
</script>
<MapDemo />

## Properties

### controls

- **Type**: `Object, boolean`
- **Default**: `true`

Options for default controls are added to the map by default. Set to `false` to disable 
all map controls. Object value is used to configure controls.

### keyboard-event-target

- **Type**: `string, Element, Document`
- **Default**: `this.$el`

The element to listen to keyboard events on. For example, if this option is set 
to `document` the keyboard interactions will always trigger. If this option is 
not specified, the element the library listens to keyboard events on is the 
component root element.

### load-tiles-while-animating

- **Type**: `boolean`
- **Default**: `false`

When set to `true`, tiles will be loaded during animations.

### load-tiles-while-interacting

- **Type**: `boolean`
- **Default**: `false`

When set to `true`, tiles will be loaded while interacting with the map.

### logo

- **Type**: `boolean, string, Object, Element`

The map logo. If a **string** is provided, it will be set as the image source of the 
logo. If an **object** is provided, the `src` property should be the URL for an image 
and the `href` property should be a URL for creating a link. If an **element** is provided, 
the element will be used. To disable the map logo, set the option to `false`. 
By default, the OpenLayers logo is shown.

### move-tolerance

- **Type**: `number`
- **Default**: `1`

The minimum distance in pixels the cursor must move to be detected as a map move 
event instead of a click. Increasing this value can make it easier to click on the map.

### pixel-ratio

- **Type**: `number`
- **Default**: `1`

The ratio between physical pixels and device-independent pixels (dips) on the device.

### renderer

- **Type**: `string, string[]`
- **Default**: `['canvas', 'webgl']`

The map renderer. By default, **Canvas** and **WebGL** renderers are tested for support in that order, 
and the first supported used. 

### tabindex

- **Type**: `number`

Root element `tabindex` attribute value. Value should be provided to allow 
keyboard events on map.

### data-projection

- **Type**: `string`
- **Default**: `undefined`

Projection of input/output plain coordinates in properties, events and etc.
See [Global data projection](/docs/quickstart.md#global-data-projection) setup guide.

## Events

Pointer events that emits [`ol.MapBrowserEvent`](http://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html)

- `click`
- `dblclick`
- `singleclick`
- `pointerdrag`
- `pointermove` 

Other events that emit [`ol.MapEvent`](http://openlayers.org/en/latest/apidoc/module-ol_MapEvent-MapEvent.html)

- `movestart`
- `moveend`
- `postrender`
- `precompose`
- `postcompose`

## Methods

### focus()

Triggers focus on map container.

### forEachFeatureAtPixel(pixel, callback, options = {})

- **Arguments**:
    - `pixel {number[]}`
    - `callback {function(ol.Feature, ?ol.layer.Layer): *}` 
      Feature callback. The callback will be called with two arguments: OpenLayers `feature` 
      at the pixel and `layer` of the feature (will be null for unmanaged layers). 
      To stop detection, callback functions can return a truthy value.
    - `[options] {Object | undefined}`
        - `layerFilter {function(ol.layer.Layer): boolean}` Layer filter function.
        - `hitTolerance {number | undefined}` Hit-detection tolerance in pixels.
          Default is `0`.
- **Returns**: `*` Truthy value returned from the callback.

Detect features that intersect a pixel on the viewport, and execute a callback 
with each intersecting feature. Layers included in the detection can be configured 
through the `layerFilter` option in `options`.

### forEachLayerAtPixel(pixel, callback, layerFilter)

- **Arguments**:
    - `pixel {number[]}`
    - `callback {function(ol.layer.Layer, ?(number[] | Uint8Array)): *}` Layer callback.
      The callback will receive `layer` and array representing `[R, G, B, A]` pixel values.
      To stop detection, callback functions can return a truthy value.
    - `[layerFilter] {function(ol.layer.Layer): boolean | undefined}` Layer filter function.
- **Returns**: `*` Truthy value returned from the callback.

Detect layers that have a color value at a pixel on the viewport, and execute 
a callback with each matching layer. Layers included in the detection can be 
configured through `layerFilter`.

### getCoordinateFromPixel(pixel)

- **Arguments**:
    - `pixel {number[]}`
- **Returns**: `number[]` Coordinates of the pixel in map view projection.

Get the coordinate for a given pixel. 

### refresh()

- **Returns**: `{Promise<void>}`

Updates map size and re-renders map.

### render()

- **Returns**: `{Promise<void>}`

Request a map rendering (at the next animation frame).

### updateSize()

Updates map size.