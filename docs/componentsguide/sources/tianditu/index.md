# ol-source-tianditu

> Layer source for [Tianditu](https://www.tianditu.gov.cn/)

`ol-source-tianditu` adds ability to display tile data from Tianditu Maps. To use
this source you should get **API key** at https://console.tianditu.gov.cn/.

<script setup>
import TiandituDemo from "@demos/TiandituDemo.vue"
</script>

<ClientOnly>
<TiandituDemo />
</ClientOnly>

## Usage

Example of `ol-source-tianditu` usage

::: code-group

<<< src/demos/TiandituDemo.vue

:::

## Properties

### layerType

- **Type**: `string`
- **Default**: `img`

options: img, vec, ter, eia, cta

### tk

- **Type**: `string`

api key

### isLabel

- **Type**: `Boolean`
- **Default**: `false`

### cacheSize

- **Type**: `Number`

### crossOrigin

- **Type**: `String`

### projection

- **Type**: `String`
- **Default**: `EPSG:3857`

### hidpi

- **Type**: `Boolean`
- **Default**: `false`

### requestEncoding

- **Type**: `String`
- **Default**: `KVP`

### format

- **Type**: `String`

### version

- **Type**: `String`
- **Default**: `1.0.0`

### culture

- **Type**: `String`
- **Default**: `en-us`

### matrixSet

- **Type**: `String`

### dimensions

- **Type**: `Object`

### imageSmoothing

- **Type**: `Boolean`
- **Default**: `true`

### maxZoom

- **Type**: `Number`
- **Default**: `21`

### reprojectionErrorThreshold

- **Type**: `Number`

### tileLoadFunction

- **Type**: `Function`

### wrapX

- **Type**: `Boolean`
- **Default**: `true`

### transition

- **Type**: `Number`
