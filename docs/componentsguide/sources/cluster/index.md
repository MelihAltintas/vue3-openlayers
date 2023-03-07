# ol-source-cluster

Layer source to cluster vector data. Works out of the box with point geometries. For other geometry types, or if not all geometries should be considered for clustering, a custom geometryFunction can be defined.

<script setup>
import ClusterDemo from "@demos/ClusterDemo.vue"

</script>

<ClientOnly>
<ClusterDemo />
</ClientOnly>

## Usage
This example shows how to do clustering on 1000 point features.

```html
<template>
<ol-map ref="map" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:800px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>

        <ol-source-cluster :distance="40">

            <ol-source-vector>
                <ol-feature v-for="index in 1000" :key="index">
                    <ol-geom-point :coordinates="[getRandomInRange(24,45,3),getRandomInRange(35,41,3)]"></ol-geom-point>
                </ol-feature>
            </ol-source-vector>

        </ol-source-cluster>

        <ol-style :overrideStyleFunction="overrideStyleFunction">
            <ol-style-stroke color="red" :width="2"></ol-style-stroke>
            <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>

            <ol-style-circle :radius="10">
                <ol-style-fill color="#3399CC"></ol-style-fill>
                <ol-style-stroke color="#fff" :width="1"></ol-style-stroke>

            </ol-style-circle>
            <ol-style-text>
                <ol-style-fill color="#fff"></ol-style-fill>
            </ol-style-text>
        </ol-style>

    </ol-vector-layer>

</ol-map>
</template>

```

```js
import {
    ref,
    inject
} from 'vue'

export default {
    setup() {
        const center = ref([34, 39.13])
        const projection = ref('EPSG:4326')
        const zoom = ref(6.8)
        const rotation = ref(0)

        const overrideStyleFunction = (feature, style) => {

            let clusteredFeatures = feature.get('features');
            let size = clusteredFeatures.length;

            style.getText().setText(size.toString());

        }

        const getRandomInRange = (from, to, fixed) => {
            return (Math.random() * (to - from) + from).toFixed(fixed) * 1;

        }

        return {
            center,
            projection,
            zoom,
            rotation,
            overrideStyleFunction,
            getRandomInRange

        }
    },
}
```


## Properties

# attributions

- **Type**: ` [String, Array]`
- **Default**: `EPSG:3857` 

Attributions.

# distance

- **Type**: `number`
- **Default**: `20` 
	
Minimum distance in pixels between clusters.

# geometryFunction

- **Type**: `Function`
- **Default**: 
```js
function(feature) {
  return feature.getGeometry();
}
```
Function that takes an module:ol/Feature as argument and returns an module:ol/geom/Point as cluster calculation point for the feature. When a feature should not be considered for clustering, the function should return null. The default, which works when the underyling source contains point features only, is


# wrapX

- **Type**: `Boolean`
- **Default**: `true` 

Whether to wrap the world horizontally.
