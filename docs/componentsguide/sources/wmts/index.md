# ol-source-wmts

Layer source for tile data from WMTS servers.

<script setup>
import TileLayerDemo from "@demos/TileLayerDemo.vue"
</script>

<ClientOnly>
<TileLayerDemo />
</ClientOnly>

## Usage

Example below shows how to use ol-layer-tile component together with ol-source-wmts and with ol-source-osm.

```vue
<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer>
      <ol-source-wmts
        :attributions="attribution"
        :url="url"
        :matrixSet="matrixSet"
        :format="format"
        :layer="layerName"
        :styles="styleName"
      ></ol-source-wmts>
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([-11158582, 4813697]);
const zoom = ref(4);
const rotation = ref(0);
const url = ref("https://mrdata.usgs.gov/mapcache/wmts");
const layerName = ref("sgmc2");
const matrixSet = ref("GoogleMapsCompatible");
const format = ref("image/png");
const styleName = ref("default");
const attribution = ref(
  'Tiles © <a href="https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/">ArcGIS</a>'
);
</script>
```

## Properties

### attributions

- **Type**: `string`

Attributions.

### cacheSize

- **Type**: `number`

Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.

### crossOrigin

- **Type**: `string`
- **Default**: `ol-layer`

Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.

### imageSmoothing

- **Type**: `boolean `
- **Default**: true

Enable image smoothing.

### projection

- **Type**: `[String, Object]`
- **Default**: true

Projection. Default is the view projection.

### reprojectionErrorThreshold

- **Type**: `Number`
- **Default**: 0.5

Maximum allowed reprojection error (in pixels). Higher values can increase reprojection performance, but decrease precision.

### tilePixelRatio

- **Type**: `Number`
- **Default**: 1

The pixel ratio used by the tile service. For example, if the tile service advertizes 256px by 256px tiles but actually sends 512px by 512px images (for retina/hidpi devices) then tilePixelRatio should be set to 2.

### format

- **Type**: `String`
- **Default**: `image/jpeg`

Image format. Only used when requestEncoding is 'KVP'.

### version

- **Type**: `String`
- **Default**: `1.0.0`

WMTS version.

### matrixSet

- **Type**: `String`

Matrix set.

### tileGrid

- **Type**: `ol/tilegrid/TileGrid`

An optional tile grid object. If not given, a tile grid will be generated from the `projection` and `tileZoomLevel` properties.

### dimensions

- **Type**: `Object`

Additional "dimensions" for tile requests. This is an object with properties named like the advertised WMTS dimensions.

### url

- **Type**: `string`

A URL for the service. For the RESTful request encoding, this is a URL template. For KVP encoding, it is normal URL. A {?-?} template pattern, for example subdomain{a-f}.domain.com, may be used instead of defining each one separately in the urls option.

### urls

- **Type**: `Array.<string>`

An array of URLs. Requests will be distributed among the URLs in this array.

### wrapX

- **Type**: `boolean `
- **Default**: false

Whether to wrap the world horizontally.

### transition

- **Type**: `number`

Duration of the opacity transition for rendering. To disable the opacity transition, pass transition: 0.

### layer

- **Type**: `string`

Layer name as advertised in the WMTS capabilities.

### style

- **Type**: `string`

Style name as advertised in the WMTS capabilities.
