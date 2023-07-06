# ol-style-flowline

> Style of a flowline in a vector layer

<script setup>
import FlowLineDemo from "@demos/FlowLineDemo.vue"
</script>
<ClientOnly>
<FlowLineDemo />
</ClientOnly>

## Usage

::: code-group

<<< ../../../../src/demos/FlowLineDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

### `overrideStyleFunction`

- **Type**: `OverrideStyleFunction`

Change / override the applied style.
The function has three arguments:

1. `feature: FeatureLike`: The feature the style is related to.
2. `currentStyle: Style`: The current style that's applied (you can override it here)
3. `resolution?: number`: A number representing the view's resolution
