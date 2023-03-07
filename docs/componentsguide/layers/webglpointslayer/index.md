# ol-webglpoints-layer


<script setup>
import WebglPointsLayerDemo from "@demos/WebglPointsLayerDemo.vue"
</script>
<ClientOnly>
<WebglPointsLayerDemo />
</ClientOnly>


## Usage


```html
<template>
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:400px">
        <ol-view
            ref="view"
            :center="center"
            :rotation="rotation"
            :zoom="zoom"
            :projection="projection"
        />

        <ol-tile-layer>
            <ol-source-osm />
        </ol-tile-layer>

        <ol-webglpoints-layer :style="webglPointsStyle">
            <ol-source-webglpoints
                :format="geoJson"
                url="https://openlayers.org/en/latest/examples/data/geojson/world-cities.geojson"
            />
        </ol-webglpoints-layer>
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
        const center = ref([40, 40])
        const projection = ref('EPSG:4326')
        const zoom = ref(3)
        const rotation = ref(0)

        const format = inject('ol-format');
        const geoJson = new format.GeoJSON();

        const webglPointsStyle = {
            symbol: {
                symbolType: 'circle',
                size: [
                    'interpolate',
                    ['linear'],
                    ['get', 'population'],
                    40000,
                    8,
                    2000000,
                    28,
                ],
                color: '#ffed02',
                rotateWithView: false,
                offset: [0, 0],
                opacity: [
                    'interpolate',
                    ['linear'],
                    ['get', 'population'],
                    40000,
                    0.6,
                    2000000,
                    0.92,
                ],
            },
        }

        return {
            center,
            projection,
            zoom,
            rotation,
            geoJson,
            webglPointsStyle
        }
    },
}
```


## Properties


# disableHitDetection

- **Type**: `boolean`
- **Default**: `false`
	

# style

- **Type**: `object`
- **Default**: `() => ({
                symbol: {
                    symbolType: 'circle',
                    size: 8,
                    color: '#33AAFF',
                    opacity: 0.9
                }
            })`
	



