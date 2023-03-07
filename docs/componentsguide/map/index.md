# ol-map

> The core component of Vue3 OpenLayers

This is the main container for all other Vue3 OpenLayers components and has one `default`
slot to place them all. Usually you will use it together with `ol-view`
component to setup `zoom`, `center`, `projection` and other view related propeties for the map.

<script setup>
import MapDemo from "@demos/MapDemo.vue"
</script>

<ClientOnly>
<MapDemo />
</ClientOnly>

## Usage
Example of a simple map.  
See also documentation of `ol-view` component.
```html
<template>
<ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:400px">

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



## Properties


# loadTilesWhileAnimating

- **Type**: `boolean`
- **Default**: `false`

When set to `true`, tiles will be loaded during animations.

# loadTilesWhileInteracting

- **Type**: `boolean`
- **Default**: `false`

When set to `true`, tiles will be loaded while interacting with the map.

# moveTolerance

- **Type**: `number`
- **Default**: `1`

The minimum distance in pixels the cursor must move to be detected as a map move 
event instead of a click. Increasing this value can make it easier to click on the map.

# pixelRatio

- **Type**: `number`
- **Default**: `1`

The ratio between physical pixels and device-independent pixels (dips) on the device.


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

# focus()

Triggers focus on map container.

# forEachFeatureAtPixel(pixel, callback, options = {})

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

# forEachLayerAtPixel(pixel, callback, layerFilter)

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

# getCoordinateFromPixel(pixel)

- **Arguments**:
    - `pixel {number[]}`
- **Returns**: `number[]` Coordinates of the pixel in map view projection.

Get the coordinate for a given pixel. 

# refresh()

- **Returns**: `{Promise<void>}`

Updates map size and re-renders map.

# render()

- **Returns**: `{Promise<void>}`

Request a map rendering (at the next animation frame).

# updateSize()

Updates map size.