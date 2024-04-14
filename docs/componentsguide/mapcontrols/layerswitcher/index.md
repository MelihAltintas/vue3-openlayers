# ol-layerswitcher-control

> A control for switching between layers.

[[toc]]

## Demo

<script setup>
import LayerswitcherControlDemo from "@demos/LayerswitcherControlDemo.vue"
</script>
<ClientOnly>
<LayerswitcherControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage                 |            Explicit Import             |
|------------------------------|:--------------------------------------:|
| `<ol-layerswitcher-control>` | `<MapControls.OlLayerSwitcherControl>` |

::: code-group

<<< ../../../../src/demos/LayerswitcherControlDemo.vue

:::

## Properties

### selection

enable layer selection when click on the title

- **Type**: `boolean`

### displayInLayerSwitcher

function that takes a layer and return a boolean if the layer is displayed in the switcher, default test the displayInLayerSwitcher layer attribute

- **Type**: `function`

### show_progress

show a progress bar on tile layers

- **Type**: `boolean`
- **Default**: `false`

### mouseover

show the panel on mouseover

- **Type**: `boolean`
- **Default**: `false`

### reordering

allow layer reordering

- **Type**: `boolean`
- **Default**: `true`

### trash

add a trash button to delete the layer

- **Type**: `boolean`
- **Default**: `false`

### oninfo

callback on click on info button, if none no info button is shown DEPRECATED: use on(info) instead

- **Type**: `function`

### extent

add an extent button to zoom to the extent of the layer

- **Type**: `boolean`

### onextent

callback when click on extent, default fits view to extent

- **Type**: `function`

### drawDelay

delay in ms to redraw the layer (usefull to prevent flickering when manipulating the layers)

- **Type**: `number`

### collapsed

collapse the layerswitcher at beginning

- **Type**: `boolean`
- **Default**: `true`

### layerGroup

a layer group to display in the switcher, default display all layers of the map

- **Type**: `ol.layerGroup`

### noScroll

prevent handle scrolling

- **Type**: `boolean`
- **Default**: `false`

### onchangeCheck

optional callback on click on checkbox, you can call this method for doing operations after check/uncheck a layer.
Layers attributes that control the switcher.

- `allwaysOnTop` {`boolean`} true to force layer stay on top of the others while reordering, default `false`
- `displayInLayerSwitcher` {`boolean`} display the layer in switcher, default `true`
- `noSwitcherDelete` {`boolean`} to prevent layer deletion (w. trash option = `true`), default `false`

- **Type**: `function`
