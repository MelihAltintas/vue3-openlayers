# ol-style

> A container for a collection of styles

Use it inside ol-feature, ol-vector-layer, ol-interaction-select, ol-interaction-draw, ol-interaction-modify to give custom styles to vector features.

## Usage

Styling a feature.

<script setup>
import StyleDemo from "@demos/StyleDemo.vue"
import StyleDemo2 from "@demos/StyleDemo2.vue"
</script>

```html
<template>
<ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:400px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
        <ol-source-vector>
            <ol-feature>
                <ol-geom-point :coordinates="[40,40]"></ol-geom-point>
                <ol-style>
                    <ol-style-circle radius="30">
                        <ol-style-fill color="white"></ol-style-fill>
                        <ol-style-stroke color="red" :width="10" ></ol-style-stroke>
                    </ol-style-circle>
                </ol-style>
            </ol-feature>

        </ol-source-vector>

    </ol-vector-layer>

</ol-map>
</template>
```

```js
import {
    ref
} from 'vue'
export default {
    setup() {
        const center = ref([40, 40])
        const projection = ref('EPSG:4326')
        const zoom = ref(8)
        const rotation = ref(0)

        return {
            center,
            projection,
            zoom,
            rotation
        }
    },
}
```

<ClientOnly>
<StyleDemo/>
</ClientOnly>

Styling the whole layer.

```html
<template>
<ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:400px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
        <ol-source-vector :url="url" :format="geoJson">

        </ol-source-vector>
        <ol-style>
            <ol-style-stroke color="red" :width="2"></ol-style-stroke>
            <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
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
        const center = ref([0, 0])
        const projection = ref('EPSG:4326')
        const zoom = ref(3)
        const rotation = ref(0)

        const url = ref("https://openlayers.org/en/latest/examples/data/geojson/countries.geojson")
        const format = inject('ol-format');
        console.log(format)
        const geoJson = new format.GeoJSON();

        return {
            center,
            projection,
            zoom,
            rotation,
            url,
            geoJson
        }
    },
}
```

<ClientOnly>
<StyleDemo2/>
</ClientOnly>

## Properties

# zIndex

- **Type**: `Number`

# overrideStyleFunction

- **Type**: `Function`

Change the style forexample in cluster sytem you can change the feature count in text style (see cluster doc)
