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

### overrideStyleFunction

- **Type**: `Function`

Change the style forexample in cluster sytem you can change the feature count in text style (see cluster doc)
