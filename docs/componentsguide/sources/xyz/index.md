# ol-source-xyz

Layer source for tile data with URLs in a set XYZ format that are defined in a URL template.

ol-source-xyz allows you to use any tiled source from OpenStreetMaps to google maps.

<script setup>
import XYZSourceDemo from "@demos/XYZSourceDemo.vue"
</script>

<ClientOnly>
<XYZSourceDemo />
</ClientOnly>

## Usage

Example of ol-source-xyz loading OSM tiles (Note that if you need an OSM layer you're better off using ol-source-osm, this is for demonstration purposes only).

Example of loading google maps satellite tiles. Notice that this is only allowed in places that are publicly available to the internet (as opposed to being behind a password for example).

::: code-group

<<< src/demos/XYZSourceDemo.vue

:::

## Properties

### cacheSize

- **Type**: `number`
- **Default**: `2048`

### crossOrigin

- **Type**: `string`

### maxZoom

- **Type**: `number`
- **Default**: `28`

### minZoom

- **Type**: `number`
- **Default**: `0`

### opaque

- **Type**: `boolean`

### projection

- **Type**: `string`
- **Default**: `EPSG:3857`

### reprojectionErrorThreshold

- **Type**: `number`
- **Default**: `0.5`

### tilePixelRatio

- **Type**: `number`
- **Default**: `1`

### tileSize

- **Type**: `array`
- **Default**: `[256, 256]`

### tileKey

- **Type**: `string`

### url

- **Type**: `string`
- **Required**: `true`

URL template

### transition

- **Type**: `number`

Duration of the opacity transition for rendering. To disable the opacity transition, pass `0`.
