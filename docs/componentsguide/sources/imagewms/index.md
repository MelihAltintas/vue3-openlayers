# ol-source-image-wms

Source for WMS servers providing single, untiled images.

<script setup>
import ImageWMSDemo from "@demos/ImageWMSDemo.vue"
</script>

<ClientOnly>
<ImageWMSDemo />
</ClientOnly>

## Usage

```vue
<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />
    <ol-zoom-control />

    <ol-tile-layer :zIndex="1000">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-image-layer :zIndex="1001">
      <ol-source-image-wms
        url="https://ahocevar.com/geoserver/wms"
        :extent="[-13884991, 2870341, -7455066, 6338219]"
        layers="topp:states"
        serverType="geoserver"
      />
    </ol-image-layer>
  </ol-map>
</template>

<script lang="ts">
import { ref } from "vue";

const zoom = ref(4);
const rotation = ref(0);
const center = ref([-10997148, 4569099]);
</script>
```

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageWMS-ImageWMS.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

The following additional properties are available for setting specific `params`.

#### layers

Sets / overrides the `params.LAYERS` property.

- **Type**: `string` | `unknown[]`

#### styles

Sets / overrides the `params.STYLES` property.

- **Type**: `string` | `unknown[]`

#### time

Sets / overrides the `params.TIME` property.

- **Type**: `string`

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageWMS-ImageWMS.html) to see the available events tht will be fired.

```html
<ol-source-image-wms :url="imgUrl" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageWMS-ImageWMS.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-image-wms :url="url" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type ImageWMS from "ol/source/ImageWMS";

const sourceRef = ref<{ source: ImageWMS }>(null);

onMounted(() => {
  const source: ImageWMS = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
