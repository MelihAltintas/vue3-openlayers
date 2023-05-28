# ol-zone-control

> A control to jump from one zone to another.

## Demo

See [App Demo page for all Map Controls](../../../demo.md)

## Properties

### className

- **Type**: `String`

### zone

an array of zone: `{ name, extent (in EPSG:4326) }`

- **Type**: `Array.<any>`

### layer

layer to display in the control or a function that takes a zone and returns a layer to add to the control

- **Type**: `ol.layer.Layer | function`

### projection

- **Type**: `String or Object`
- **default**: `EPSG:3857`

Projection. Default is the view projection. The projection code must contain a numeric end portion separated by : or the entire code must form a valid ArcGIS SpatialReference definition.

### centerOnClick

center on click when a zone is clicked (or listen to 'select' event to do something), default true

- **Type**: `Boolean`
