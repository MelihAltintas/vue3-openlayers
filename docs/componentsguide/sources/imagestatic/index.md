# ol-source-image-static

> Layer source for displaying a single, static image.

<script setup>
import ImageLayerDemo from "@demos/ImageLayerDemo.vue"
</script>

<ClientOnly>
<ImageLayerDemo />
</ClientOnly>

## Usage

Example below shows how to use ol-image-layer component together with ol-source-image-static to render custom image on the map.
The map view is configured with a custom projection that translates image coordinates directly into map coordinates.

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
    <ol-attribution-control />
    <ol-image-layer id="xkcd">
      <ol-source-image-static
        :url="imgUrl"
        :imageSize="size"
        :imageExtent="extent"
        :projection="projection"
        :attributions="imgCopyright"
      ></ol-source-image-static>
    </ol-image-layer>
  </ol-map>
</template>

<script setup>
import { ref, reactive } from "vue";

const zoom = ref(2);
const rotation = ref(0);

const size = ref([1024, 968]);
const center = ref([size.value[0] / 2, size.value[1] / 2]);
const extent = ref([0, 0, ...size.value]);
const projection = reactive({
  code: "xkcd-image",
  units: "pixels",
  extent: extent,
});
const imgUrl = ref("https://imgs.xkcd.com/comics/online_communities.png");
const imgCopyright = ref('© <a href="http://xkcd.com/license.html">xkcd</a>');
</script>
```

## Properties

### Props from OpenLayers

Properties are passed-trough from OpenLayers directly.
Their types and default values can be checked-out [in the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageStatic-Static.html).
Only some properties deviate caused by reserved keywords from Vue / HTML.
This deviating props are described in the section below.

### Deviating Properties

None.

## Events

You have access to all Events from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageStatic-Static.html) to see the available events tht will be fired.

```html
<ol-source-image-static :url="imgUrl" @error="handleEvent" />
```

## Methods

You have access to all Methods from the underlying source.
Check out [the official OpenLayers docs](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageStatic-Static.html) to see the available methods.

To access the source, you can use a `ref()` as shown below:

```vue
<template>
  <!-- ... -->
  <ol-source-image-static :url="url" ref="sourceRef" />
  <!-- ... -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type ImageStatic from "ol/source/ImageStatic";

const sourceRef = ref<{ source: ImageStatic }>(null);

onMounted(() => {
  const source: ImageStatic = sourceRef.value?.source;
  // call your method on `source`
});
</script>
```
