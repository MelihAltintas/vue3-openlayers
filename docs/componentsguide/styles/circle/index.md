# ol-style-circle

> Styles points as circles.

Use it inside ol-style to style points as circles.

<script setup>
import StyleDemo from "@demos/StyleDemo.vue"
</script>

<ClientOnly>
<StyleDemo/>
</ClientOnly>

## Usage

Styling a feature inside a vector layer.



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



## Properties

# radius

- **Type**: `Number`

# scale

- **Type**: `Number`