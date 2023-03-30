# ol-source-image-static

A layer source for displaying a single, static image.

<script setup>
import ImageLayerDemo from "@demos/ImageLayerDemo.vue"
</script>

<ClientOnly>
<ImageLayerDemo />
</ClientOnly>

## Usage

Example below shows how to use ol-image-layer component together with ol-source-image-static to render custom image on the map. The map view is configured with a custom projection that translates image coordinates directly into map coordinates.

```vue
<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height:400px"
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
    <ol-image-layer>
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

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
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
    const imgCopyright = ref(
      '© <a href="http://xkcd.com/license.html">xkcd</a>'
    );
    return {
      center,
      projection,
      zoom,
      rotation,
      size,
      extent,
      imgUrl,
      imgCopyright,
    };
  },
};
</script>
```

## Properties

### attributions

- **Type**: `string`

Attributions

### crossOrigin

- **Type**: `string`
- **Default**: `ol-layer`

The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you want to access pixel data with the Canvas renderer.

### imageExtent

- **Type**: `Array`

Extent of the image in map coordinates. This is the [left, bottom, right, top] map coordinates of your image.

### imageSmoothing

- **Type**: `boolean`
- **Default**: `true`

Enable image smoothing.

### projection

- **Type**: `string or object (options projection)`
- **Default**: `Projection. Default is the view projection.`

The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you want to access pixel data with the Canvas renderer.

### imageSize

- **Type**: `Array`

Size of the image in pixels. Usually the image size is auto-detected, so this only needs to be set if auto-detection fails for some reason.

### url

- **Type**: `string`

Image URL.
