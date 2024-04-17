# ol-geolocation

> HTML5 Geolocation wrapper

`ol-geoloc` provides HTML5 Geolocation capabilities as a Vue component.
The [Geolocation API](https://www.w3.org/TR/geolocation-API/) is used to locate
a user's position. You can place it to the **default slot** of `ol-map` component.

[[toc]]

## Demo

<script setup>
import GeoLocationDemo from "@demos/GeoLocationDemo.vue"
</script>

<ClientOnly>
<GeoLocationDemo />
</ClientOnly>

## Setup

<!--@include: ../map.plugin.md-->

## Usage

| Plugin Usage       |    Explicit Import    |
|--------------------|:---------------------:|
| `<ol-geolocation>` | `<Map.OlGeolocation>` |

::: code-group

<<< ../../../src/demos/GeoLocationDemo.vue

:::

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_Geolocation-Geolocation.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying OpenLayers Geolocation API.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_Geolocation-Geolocation.html) to see the available events tht will be fired.

```html
<ol-geolocation :projection="projection" @change:position="geoLocChange" />
```

## Methods

You have access to all Methods from the underlying OpenLayers Geolocation API.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_Geolocation-Geolocation.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-geolocation :projection="projection" ref="geoLocRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type Geolocation from "ol/Geolocation";

const geoLocRef = ref<{ geoLoc: Geolocation }>(null);

onMounted(() => {
  const geoLocation: Geolocation = geoLocRef.value?.geoLoc;
  // call your method on `geoLocation`
});
</script>
```
