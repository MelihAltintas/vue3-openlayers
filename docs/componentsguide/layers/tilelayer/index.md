# ol-tile-layer

ol-tile-layer can render images from sources that provide pre-rendered, tiled images in grids organized by zoom levels. It should be used together with tiled source components like ol-source-xyz, ol-source-wmts, ol-source-osm, ol-source-bingmaps

## Usage

Example below shows how to use ol-layer-tile component together with ol-source-wmts and with ol-source-osm.

```html
<template>
<ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:400px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom"/>

    <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer>
        <ol-source-wmts :attributions="attribution" :url="url" :matrixSet="matrixSet" :format="format" :layer="layerName" :style="styleName"></ol-source-wmts>
    </ol-tile-layer>

</ol-map>
</template>
```

```js
import {
    ref
} from 'vue'
export default {
    setup() {
        const center = ref([-90, 50])
        const zoom = ref(2)
        const rotation = ref(0)
        const url = ref('https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/')
        const layerName = ref('0')
        const matrixSet = ref('EPSG:3857')
        const format = ref('image/png')
        const styleName = ref('default')
        const attribution = ref('Tiles © <a href="https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/">ArcGIS</a>')

        
        return {
            center,
            zoom,
            rotation,
            url,
            layerName,
            matrixSet,
            format,
            styleName,
            attribution
        }
    },
}
```

# Output

<script setup>
import TileLayerDemo from "@demos/TileLayerDemo.vue"
</script>
<TileLayerDemo />

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

# preload

- **Type**: `number`
- **Default**: `0`		
Low-resolution tiles up to preload level will be load.

