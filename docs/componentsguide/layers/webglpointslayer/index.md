# ol-webgl-points-layer

> A layer for rendering points with WebGL

Please note, that you can't use `ol-style` and related style components here as child components.
For more information please checkout the [`ol-source-webglpoints` docs](../../sources/webglpoints/) as well.

<script setup>
import WebglPointsLayerDemo from "@demos/WebglPointsLayerDemo.vue"
</script>
<ClientOnly>
<WebglPointsLayerDemo />
</ClientOnly>

## Usage

::: code-group

<<< src/demos/WebglPointsLayerDemo.vue

:::

## Properties

### disableHitDetection

- **Type**: `boolean`
- **Default**: `false`

### style

- **Type**: `object`
- **Default**: `() => ({
    symbol: {
        symbolType: 'circle',
        size: 8,
        color: '#33AAFF',
        opacity: 0.9
    }
})`
