# ol-webgl-vector-layer

> A layer for rendering lines with WebGL

Please note, that you can't use `ol-style` and related style components here as child components.
For more information please checkout the [`ol-source-webglvector` docs](../../sources/webglvector/) as well.

<script setup>
import WebglVectorLayerDemo from "@demos/WebglVectorLayerDemo.vue"
</script>
<ClientOnly>
<WebglVectorLayerDemo />
</ClientOnly>

## Usage

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
