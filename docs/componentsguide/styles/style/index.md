# ol-style

> A container for a collection of styles

Use it inside ol-feature, ol-vector-layer, ol-interaction-select, ol-interaction-draw, ol-interaction-modify to give custom styles to vector features.

## Usage

<script setup>
import StyleDemo from "@demos/StyleDemo.vue"
import StyleDemo2 from "@demos/StyleDemo2.vue"
</script>

### Styling a feature.

<ClientOnly>
<StyleDemo/>
</ClientOnly>

::: code-group

<<< ../../../../src/demos/StyleDemo.vue

:::

### Styling the whole layer.

<ClientOnly>
<StyleDemo2/>
</ClientOnly>

::: code-group

<<< ../../../../src/demos/StyleDemo2.vue

:::

## Properties

### zIndex

- **Type**: `Number`

### `overrideStyleFunction`

- **Type**: `OverrideStyleFunction`

Change the style for example in cluster you can change the feature count in text style (see cluster doc)
The function has three arguments:

1. `feature: FeatureLike`: The feature the style is related to.
2. `currentStyle: Style`: The current style that's applied (you can override it here)
3. `resolution?: number`: A number representing the view's resolution
