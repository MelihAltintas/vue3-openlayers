# ol-image-layer

ol-image-layer components can render any server-rendered image, it is a container for raster source, like ol-source-image-static

<script setup>
import ImageLayerDemo from "@demos/ImageLayerDemo.vue"
</script>

<ClientOnly>
<ImageLayerDemo />
</ClientOnly>

## Usage

Example below shows how to use ol-image-layer component together with ol-source-image-static to render custom image on the map. The map view is configured with a custom projection that translates image coordinates directly into map coordinates.

```html
<template>
<ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:400px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />
    <ol-zoom-control />
    <ol-attribution-control/>
    <ol-image-layer>
        <ol-source-image-static :url="imgUrl" :imageSize="size" :imageExtent="extent" :projection="projection" :attributions="imgCopyright"></ol-source-image-static>
    </ol-image-layer>

</ol-map>
</template>
```

```js
import {
    ref,
    reactive
} from 'vue'
export default {
    setup() {

        const zoom = ref(2)
        const rotation = ref(0)

        const size = ref([1024, 968])
        const center = ref([size.value[0] / 2, size.value[1] / 2])
        const extent = ref([0, 0, ...size.value])
        const projection = reactive({
            code: 'xkcd-image',
            units: 'pixels',
            extent: extent,
        });
        const imgUrl = ref('https://imgs.xkcd.com/comics/online_communities.png');
        const imgCopyright = ref('© <a href="http://xkcd.com/license.html">xkcd</a>');
        return {
            center,
            projection,
            zoom,
            rotation,
            size,
            extent,
            imgUrl,
            imgCopyright
        }
    },
}
```



## Properties


# className

- **Type**: `string`
- **Default**: `ol-layer`
	
A CSS class name to set to the layer element.

# opacity

- **Type**: `number `
- **Default**: `1`
	
Opacity (0, 1).


# visible

- **Type**: `boolean  `
- **Default**: `true`
		
Visibility.

# extent

- **Type**: `Array`
		
The bounding extent for layer rendering. The layer will not be rendered outside of this extent.

# zIndex

- **Type**: `number`
		
The z-index for layer rendering. At rendering time, the layers will be ordered, first by Z-index and then by position. 

# minResolution

- **Type**: `number`
		
The minimum resolution (inclusive) at which this layer will be visible.

# maxResolution

- **Type**: `number`
		
The maximum resolution (exclusive) below which this layer will be visible.

# minZoom

- **Type**: `number`
		
The minimum view zoom level (exclusive) above which this layer will be visible.

# maxZoom

- **Type**: `number`
		
The maximum view zoom level (inclusive) at which this layer will be visible.

