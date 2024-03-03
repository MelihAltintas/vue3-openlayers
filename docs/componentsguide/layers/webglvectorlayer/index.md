# ol-webgl-vector-layer

> A layer for rendering lines and polygons with WebGL

Please note, that you can't use `ol-style` and related style components here as child components.
For more information please checkout the [`ol-source-webglvector` docs](../../sources/webglvector/) as well.

## Usage

### WebGL Lines
<script setup>
import WebglVectorLayerDemo from "@demos/WebglVectorLayerDemo.vue"
import WebglVectorLayerDemo_lines from "@demos/WebglVectorLayerDemo_lines.vue"
import WebglVectorLayerDemo_polygons from "@demos/WebglVectorLayerDemo_polygons.vue"
</script>

<ClientOnly>
<WebglVectorLayerDemo_lines />
</ClientOnly>

::: code-group

<<< ../../../../src/demos/WebglVectorLayerDemo_lines.vue

:::

### WebGL Polygons
<ClientOnly>
<WebglVectorLayerDemo_polygons />
</ClientOnly>

::: code-group

<<< ../../../../src/demos/WebglVectorLayerDemo_polygons.vue

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
