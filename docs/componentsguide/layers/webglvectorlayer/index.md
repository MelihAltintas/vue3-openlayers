# ol-webgl-vector-layer

> A layer for rendering points, lines and polygons using WebGL

Please note, that you can't use `ol-style` and related style components here as child components.
For more information please checkout the [`ol-source-vector` docs](../../sources/vector/) as well.

## Usage

### WebGL Points, Lines, Polygons

<script setup>
import WebglVectorLayerDemo from "@demos/WebglVectorLayerDemo.vue"
</script>

<ClientOnly>
<WebglVectorLayerDemo />
</ClientOnly>

::: code-group

<<< ../../../../src/demos/WebglVectorLayerDemo.vue

:::

## Properties

### disableHitDetection

- **Type**: `boolean`
- **Default**: `false`

### style

- **Type**: `object`
- **Default**: `() => ({
    'stroke-color' : 'green',
    'stroke-width' : 2
})`
