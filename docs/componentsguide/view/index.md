# ol-view

A View object represents a simple 2D view of the map.

This is the object to act upon to change the center, resolution, and rotation of the map.

A View has a projection. The projection determines the coordinate system of the center, and its units determine the units of the resolution (projection units per pixel). The default projection is Spherical Mercator (EPSG:3857).

<script setup>
import ViewDemo from "@demos/ViewDemo.vue"
</script>

<ClientOnly>
<ViewDemo />
</ClientOnly>

## Usage

Example of simple map with view in EPSG:4326 projection.
See also documentation of ol-map component

```html
<template>
  <ol-map style="height:400px">
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
      @zoomChanged="zoomChanged"
      @centerChanged="centerChanged"
      @resolutionChanged="resolutionChanged"
      @rotationChanged="rotationChanged"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>

  <div>
    center : {{currentCenter}} zoom : {{currentZoom}} resolution :
    {{currentResolution}} rotation : {{currentRotation}}
  </div>
</template>
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
  data() {
    return {
      currentCenter: this.center,
      currentZoom: this.zoom,
      currentResolution: this.resolution,
      currentRotation: this.rotation,
    };
  },
  methods: {
    zoomChanged(currentZoom) {
      this.currentZoom = currentZoom;
    },
    resolutionChanged(resolution) {
      this.currentResolution = resolution;
    },
    centerChanged(center) {
      this.currentCenter = center;
    },
    rotationChanged(rotation) {
      this.currentRotation = rotation;
    },
  },
};
```

## Properties

# center

- **Type**: `number[]`
- **Default**: `[0, 0]`

The center coordinate of the map view in the provided `projection`.

# zoom

- **Type**: `number`
- **Default**: `0`

Zoom level used to calculate the resolution for the view as `int` value.
Only used if `resolution` is not defined.

# rotation

- **Type**: `number`
- **Default**: `0`

The initial rotation for the view in **radians** (positive rotation clockwise).

# resolution

- **Type**: `number`
- **Default**: `undefined`

The initial resolution for the view. The units are projection units per pixel
(e.g. meters per pixel). An alternative to setting this is to set `zoom`

# resolutions

- **Type**: `number[]`
- **Default**: `undefined`

Resolutions to determine the resolution constraint. If set the `max-resolution`,
`min-resolution`, `min-zoom`, `max-zoom`, and `zoom-factor` options are ignored.

# projection

- **Type**: `string` or `object (options projection)`
- **Default**: `EPSG:3857`

The view internal projection. This is the projection with which OpenLayers component

# maxZoom

- **Type**: `number`
- **Default**: `28`

The maximum zoom level used to determine the resolution constraint.

# minZoom

- **Type**: `number`
- **Default**: `0`

The minimum zoom level used to determine the resolution constraint.

# maxResolution

- **Type**: `number`
- **Default**: `undefined`

The maximum resolution used to determine the resolution constraint.

# minResolution

- **Type**: `number`
- **Default**: `undefined`

The minimum resolution used to determine the resolution constraint.

# constrainRotation

- **Type**: `boolean | number`
- **Default**: `true`

Rotation constraint. `false` means no constraint. `true` means no constraint, but
snap to zero near zero. A number constrains the rotation to that number of values.
For example, `4` will constrain the rotation to `0`, `90`, `180`, and `270` degrees.

# enableRotation

- **Type**: `boolean`
- **Default**: `true`

Enable rotation. Default is `true`. If `false` a rotation constraint that
always sets the rotation to zero is used.

# extent

- **Type**: `number[leftBottomX, leftBottomY, rightTopX, rightTopY]`
- **Default**: `undefined`

The extent that constrains the `center` defined in the view projection, in other words,
center cannot be set outside this extent.

# zoomFactor

- **Type**: `number`
- **Default**: `2`

The zoom factor used to determine the resolution constraint.

# constrainOnlyCenter

- **Type**: `Boolean`
- **Default**: `false`

If true, the extent constraint will only apply to the view center and not the whole extent.

# smoothExtentConstraint

- **Type**: `Boolean`
- **Default**: `true`

If true, the extent constraint will be applied smoothly, i.e. allow the view to go slightly outside of the given extent.

# multiWorld

- **Type**: `Boolean`
- **Default**: `false`

If false the view is constrained so only one world is visible, and you cannot pan off the edge. If true the map may show multiple worlds at low zoom levels. Only used if the projection is global. Note that if extent is also provided it is given precedence.

# constrainResolution

- **Type**: `Boolean`
- **Default**: `false`

If true, the view will always animate to the closest zoom level after an interaction; false means intermediary zoom levels are allowed.

# smoothResolutionConstraint

- **Type**: `Boolean`
- **Default**: `true`

If true, the resolution min/max values will be applied smoothly, i. e. allow the view to exceed slightly the given resolution or zoom bounds.

# showFullExtent

- **Type**: `Boolean`
- **Default**: `false`

If true, the resolution min/max values will be applied smoothly, i. e. allow the view to exceed slightly the given resolution or zoom bounds.

# padding

- **Type**: `Array`
- **Default**: `() => [0, 0, 0, 0]`

If true, the resolution min/max values will be applied smoothly, i. e. allow the view to exceed slightly the given resolution or zoom bounds.

## Events

- `centerChanged`
- `zoomChanged`
- `resolutionChanged`
- `rotationChanged`

## Methods

# adjustCenter(deltaCoordinates)

Adds relative coordinates to the center of the view. Any extent constraint will apply.

- **Arguments**:
- `deltaCoordinates {module:ol/coordinate~Coordinate}`
  Relative value to add.

# adjustResolution(ratio, opt_anchor)

Multiply the view resolution by a ratio, optionally using an anchor. Any resolution constraint will apply.

- **Arguments**:
- `ratio {number}`
  The ratio to apply on the view resolution.
- `anchor {module:ol/coordinate~Coordinate}`
  The origin of the transformation.

# adjustRotation(delta, opt_anchor)

Adds a value to the view rotation, optionally using an anchor. Any rotation constraint will apply.

- **Arguments**:
- `delta {number}`
  Relative value to add to the zoom rotation, in radians.
- `anchor {module:ol/coordinate~Coordinate}`
  The rotation center.

# adjustZoom(delta, opt_anchor)

Adds a value to the view zoom level, optionally using an anchor. Any resolution constraint will apply.

- **Arguments**:
- `delta {number}`
  Relative value to add to the zoom level.
- `anchor {module:ol/coordinate~Coordinate}`
  The origin of the transformation.

# beginInteraction()

Notify the View that an interaction has started. The view state will be resolved to a stable one if needed (depending on its constraints).

# calculateExtent(opt_size)

Calculate the extent for the current view state and the passed size. The size is the pixel dimensions of the box into which the calculated extent should fit. In most cases you want to get the extent of the entire map, that is map.getSize().

- **Arguments**:
- `size {module:ol/size~Size}`
  Box pixel size. If not provided, the size of the map that uses this view will be used.

# cancelAnimations()

Cancel any ongoing animations.

# centerOn(coordinate, size, position)

Center on coordinate and view position.

- **Arguments**:
- `coordinate {module:ol/coordinate~Coordinate}`
  Coordinate.
- `size {module:ol/size~Size}`
  Box pixel size.
- `position {module:ol/pixel~Pixel}`
  Position on the view to center on.

# endInteraction(opt_duration, opt_resolutionDirection, opt_anchor)

Notify the View that an interaction has ended. The view state will be resolved to a stable one if needed (depending on its constraints).

- **Arguments**:
- `duration {number}`
  Animation duration in ms.
- `resolutionDirection {number}`
  Which direction to zoom.
- `anchor {module:ol/coordinate~Coordinate}}`
  The origin of the transformation.

# getAnimating()

Determine if the view is being animated.

Returns:
The view is being animated.

# getCenter()

Get the view center.

Returns:
The center of the view.

# getInteracting()

Determine if the user is interacting with the view, such as panning or zooming.

Returns:
The view is being interacted with.

# getMaxResolution()

Get the maximum resolution of the view.

Returns:
The maximum resolution of the view.

# getMaxZoom()

Get the maximum zoom level for the view.

Returns:
The maximum zoom level.

# getMinResolution()

Get the minimum resolution of the view.

Returns:
The minimum resolution of the view.

# getMinZoom()

Get the minimum zoom level for the view.

Returns:
The minimum zoom level.

# getProjection()

Get the view projection.

Returns:
The projection of the view.

# getResolution()

Get the view resolution.

Returns:
The resolution of the view.

# getResolutionForExtent(extent, opt_size)

Get the resolution for a provided extent (in map units) and size (in pixels).

- **Arguments**:
- `extent {module:ol/extent~Extent}`
  Extent.
- `size {module:ol/size~Size}`
  Box pixel size.

Returns:
The resolution at which the provided extent will render at the given size.

# getResolutionForZoom(zoom)

Get the resolution for a zoom level.

- **Arguments**:
- `zoom {number}`
  Zoom level.

Returns:
The view resolution for the provided zoom level.

# getResolutions()

Get the resolutions for the view. This returns the array of resolutions passed to the constructor of the View, or undefined if none were given.

Returns:
The resolutions of the view.

# getRotation()

Get the view rotation.

Returns:
The rotation of the view in radians.

# getZoom()

Get the current zoom level. This method may return non-integer zoom levels if the view does not constrain the resolution, or if an interaction or animation is underway.

Returns:
Zoom.

# getZoomForResolution(resolution)

Get the zoom level for a resolution.

- **Arguments**:
- `resolution {number}`
  The resolution.

Returns:
The zoom level for the provided resolution.

# setCenter(center)

Set the center of the current view. Any extent constraint will apply.

- **Arguments**:
- `center {	module:ol/coordinate~Coordinate | undefined}`
  The center of the view.

# setConstrainResolution(enabled)

Set whether the view shoud allow intermediary zoom levels.

- **Arguments**:
- `enabled {boolean}`
  Whether the resolution is constrained.

# setMaxZoom(zoom)

Set a new maximum zoom level for the view.

- **Arguments**:
- `zoom {number}`
  The maximum zoom level.

# setMinZoom(zoom)

Set a new minimum zoom level for the view.

- **Arguments**:
- `zoom {number}`
  The minimum zoom level.

# setResolution(resolution)

Set the resolution for this view. Any resolution constraint will apply.

- **Arguments**:
- `resolution {number | undefined}`
  The resolution of the view.

# setRotation(rotation)

Set the rotation for this view. Any rotation constraint will apply.

- **Arguments**:
- `rotation {number}`
  The rotation of the view in radians.

# setZoom(zoom)

Zoom to a specific zoom level. Any resolution constrain will apply.

- **Arguments**:
- `zoom {number}`
  Zoom level.

# fit(geometryOrExtent, opt_options)

Fit the given geometry or extent based on the given map size and border. The size is pixel dimensions of the box to fit the extent into. In most cases you will want to use the map size, that is map.getSize(). Takes care of the map angle.
