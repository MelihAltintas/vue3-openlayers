# ol-vector-layer

ol-vector-layer can render vector from various backend services. It should be used with together with ol-source-vector component.



## Usage

Example below shows how you can use ol-vector-layer and ol-source-vector to render some vector features from remote backend.

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

# Output

<!-- <script setup>
import VectorLayerDemo from "@demos/VectorLayerDemo.vue"
</script>
<VectorLayerDemo /> -->

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

# renderBuffer

- **Type**: `number`
- **Default**: `100`		
The buffer in pixels around the viewport extent used by the renderer when getting features from the vector source for the rendering or hit-detection. Recommended value: the size of the largest symbol, line width or label.

# updateWhileAnimating

- **Type**: `Boolean`
- **Default**: `false`			
When set to true, feature batches will be recreated during animations. This means that no vectors will be shown clipped, but the setting will have a performance impact for large amounts of vector data. When set to false, batches will be recreated when no animation is active.

# updateWhileInteracting

- **Type**: `Boolean`
- **Default**: `false`				
When set to true, feature batches will be recreated during interactions. See also updateWhileAnimating.

