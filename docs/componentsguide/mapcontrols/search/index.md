# ol-search-control

> A Search control for OpenLayers.

[[toc]]

## Demo

<script setup>
import SearchControlDemo from "@demos/SearchControlDemo.vue"
</script>
<ClientOnly>
<SearchControlDemo />
</ClientOnly>

## Setup

<!--@include: ../../mapcontrols.plugin.md-->

## Usage

| Plugin Usage          |         Explicit Import         |
| --------------------- | :-----------------------------: |
| `<ol-search-control>` | `<MapControls.OlSearchControl>` |

::: code-group

<<< ../../../../src/demos/SearchControlDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from `ol-ext` directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://viglino.github.io/ol-ext/examples/search/map.control.search.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

### select

Emits when selecting an item from the list of search results.

- **Type**: `SearchEvent`

```vue
<template>
  <ol-map ref="map" style="height: 400px">
    <!-- ... -->
    <ol-search-control :autocomplete="autocomplete" @select="select" />
  </ol-map>
</template>

<script setup lang="ts">
// ...

function select(e: SearchEvent) {
  const map: Map = e.target.getMap();
  map.getView().animate({
    center: e.search.pos,
    zoom: e.search.zoom,
    easing: easeOut,
  });
}
</script>
```
