# ol-source-xyz

Layer source for tile data from ArcGIS Rest services. Map and Image Services are supported.

For cached ArcGIS services, better performance is available using the XYZ data source.

<script setup>
import TileArcGISRestSourceDemo from "@demos/TileArcGISRestSourceDemo.vue"
</script>

<ClientOnly>
<TileArcGISRestSourceDemo />
</ClientOnly>

## Usage

Example of `ol-source-tile-arcgis-rest` usage. Information about the arcgis service used, available at https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/CadastreObjects/MapServer.

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

    <ol-tile-layer>
      <ol-source-tile-arcgis-rest
        :url="arcgisUrl"
        :tileSize="[1024, 1024]"
        :params="requestParams"
      />
    </ol-tile-layer>
  </ol-map>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const center = ref([4340075, 5628816]);
    const projection = ref("EPSG:3857");
    const zoom = ref(15);
    const rotation = ref(0);
    const arcgisUrl =
      "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/CadastreObjects/MapServer/export";
    const requestParams = {
      layers: "show:30,27,24,23,22",
      format: "PNG32",
      f: "image",
      dpi: 96,
      transparent: true,
      bboxSR: 102100,
      imageSR: 102100,
      size: "1024,1024",
      _ts: false,
    };

    return {
      center,
      projection,
      zoom,
      rotation,
      arcgisUrl,
      requestParams,
    };
  },
};
</script>
```

## Properties

### attributions

- **Type**: `String`

Attributions.

### cacheSize

- **Type**: `Number`

Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.

### crossOrigin

- **Type**: `String`

The `crossOrigin` attribute for loaded images. Note that you must provide a `crossOrigin` value if you want to access pixel data with the Canvas renderer. See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.

### interpolate

- **Type**: `Boolean`
- **default**: `true`

Use interpolated values when resampling. By default, linear interpolation is used when resampling. Set to false to use the nearest neighbor instead.

### params

- **Type**: `Object`
- **default**: `() => ({})`

ArcGIS Rest parameters. This field is optional. Service defaults will be used for any fields not specified. `FORMAT` is `PNG32` by default. `F` is `IMAGE` by default. `TRANSPARENT` is `true` by default. `BBOX`, `SIZE`, `BBOXSR`, and `IMAGESR` will be set dynamically. Set `LAYERS` to override the default service layer visibility. See https://developers.arcgis.com/rest/services-reference/export-map.htm for further reference.

### hidpi

- **Type**: `Boolean`
- **default**: `true`

Use the `ol/Map#pixelRatio` value when requesting the image from the remote server.

### projection

- **Type**: `String or Object`
- **default**: `EPSG:3857`

Projection. Default is the view projection. The projection code must contain a numeric end portion separated by : or the entire code must form a valid ArcGIS SpatialReference definition.

### reprojectionErrorThreshold

- **Type**: `Number`
- **default**: `0.5`

Maximum allowed reprojection error (in pixels). Higher values can increase reprojection performance, but decrease precision.

### tileLoadFunction

- **Type**: `Function`
- **default**: `(imageTile, src) => (imageTile.getImage().src = src)`

Optional function to load a tile given a URL.

### url

- **Type**: `String`

ArcGIS Rest service URL for a Map Service or Image Service. The url should include /MapServer or /ImageServer.

### wrapX

- **Type**: `String`
- **default**: `true`

Whether to wrap the world horizontally.

### transition

- **Type**: `Number`

Duration of the opacity transition for rendering. To disable the opacity transition, pass `transition: 0`.

### urls

- **Type**: `Array`

ArcGIS Rest service urls. Use this instead of `url` when the ArcGIS Service supports multiple urls for export requests.

### tileSize

- **Type**: `Array[Number]`
- **default**: `[256, 256]`

Size of tile for the grid pattern for sources accessing tiled-image servers.
