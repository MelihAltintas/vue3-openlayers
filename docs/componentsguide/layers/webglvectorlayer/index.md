# ol-webgl-vector-layer

NEW: points added

> A layer for rendering points, lines and polygons using WebGL

Please note, that you can't use `ol-style` and related style components here as child components.
For more information please checkout the [`ol-source-webglvector` docs](../../sources/webglvector/) as well.

Also note that the style format changed in OpenLayers 8.0.

## Usage

### WebGL Points
<script setup>
import WebglVectorLayerDemo_points from "@demos/WebglVectorLayerDemo_points.vue"
import WebglVectorLayerDemo_lines from "@demos/WebglVectorLayerDemo_lines.vue"
import WebglVectorLayerDemo_polygons from "@demos/WebglVectorLayerDemo_polygons.vue"
</script>

<ClientOnly>
<WebglVectorLayerDemo_points />
</ClientOnly>

::: code-group

<<< ../../../../src/demos/WebglVectorLayerDemo_points.vue

:::

### WebGL Lines
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
