# ol-source-webglpoints

> A vector source for rendering points with WebGL

Please note, that you can't use `ol-style` and related style components here as child components.
You have to apply styles directly via the `style` prop on the `ol-webgl-points-layer` component.

<script setup>
import WebglPointsLayerDemo from "@demos/WebglPointsLayerDemo.vue"
import WebglPointsSourceDemo from "@demos/WebglPointsSourceDemo.vue"
</script>

## Usage

### with `url` prop

<ClientOnly>
<WebglPointsLayerDemo />
</ClientOnly>

::: code-group

<<< src/demos/WebglPointsLayerDemo.vue

:::

### `ol-feature` child component

<ClientOnly>
<WebglPointsSourceDemo />
</ClientOnly>

::: code-group

<<< src/demos/WebglPointsSourceDemo.vue

:::

## Properties

### attributions

- **Type**: ` [String, Array]`
- **Default**: `EPSG:3857`

### features

- **Type**: `Array`
- **Default**: `() => []`

### format

- **Type**: `Format`

formats available with `inject('ol-format')`

### loader

- **Type**: `Function`

### overlaps

- **Type**: `Boolean`
- **Default**: `true`

### projection

- **Type**: `String`
- **Default**: 'EPSG:3857'

### strategy

- **Type**: `Function`

strategy available with inject('ol-loadingstrategy');

### url

- **Type**: `[String, Function]`

### useSpatialIndex

- **Type**: `Boolean`

- **Default**: `true`

### wrapX

- **Type**: `Boolean`
- **Default**: `true`

## Events

- `addfeature`
- `change`
- `changefeature`
- `clear`
- `error`
- `featuresloadend`
- `featuresloaderror`
- `featuresloadstart`
- `propertychange`
- `removefeature`
