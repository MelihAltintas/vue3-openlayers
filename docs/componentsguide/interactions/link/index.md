# ol-interaction-link

The link interaction allows you to synchronize the map state with the URL.
By default the view center, zoom level, and rotation will be reflected in the URL as you navigate around the map.
Layer visibility is also reflected in the URL.
Reloading the page restores the map view state.

[[toc]]

## Demo

<script setup>
import ViewDemo from "@demos/ViewDemo.vue"
</script>

<ClientOnly>
<ViewDemo/>
</ClientOnly>

## Setup

<!--@include: ../../interactions.plugin.md-->

## Usage

| Plugin Usage            |           Explicit Import           |
|-------------------------|:-----------------------------------:|
| `<ol-interaction-link>` | `<Interactions.OlLinktInteraction>` |

::: code-group

<<< ../../../../src/demos/ViewDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Link-Link.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying interaction.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Link-Link.html) to see the available events tht will be fired.

```html
<ol-interaction-link @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying interaction.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Link-Link.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-interaction-link ref="interactionRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type Link from "ol/interaction/Link";

const interactionRef = ref<{ link: Link } | null>(null);

onMounted(() => {
  const link: Link = interactionRef.value?.link;
  // call your method on `link`
});
</script>
```
