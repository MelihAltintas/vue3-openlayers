# ol-source-vector

ol-source-vector can be used together with ol-vector-layer to draw any vector data on the map.

<script setup>
import GeomPoint from "@demos/GeomPoint.vue"
import VectorSourceDemo1 from "@demos/VectorSourceDemo1.vue"
import VectorSourceDemo2 from "@demos/VectorSourceDemo2.vue"
</script>

## Usage

Static features with the help of ol-feature, should be used only for tiny static layers.

```html
<template>
  <button @click="()=> coordinate=coordinate.map(a=> a+0.01)">
    changecoor
  </button>
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

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-point :coordinates="coordinate"></ol-geom-point>
          <ol-style>
            <ol-style-circle :radius="radius">
              <ol-style-fill :color="fillColor"></ol-style-fill>
              <ol-style-stroke
                :color="strokeColor"
                :width="strokeWidth"
              ></ol-style-stroke>
            </ol-style-circle>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>
```

```js
import { ref } from "vue";
export default {
  setup() {
    const center = ref([40, 40]);
    const projection = ref("EPSG:4326");
    const zoom = ref(8);
    const rotation = ref(0);
    const radius = ref(40);
    const strokeWidth = ref(10);
    const strokeColor = ref("red");
    const fillColor = ref("white");
    const coordinate = ref([40, 40]);

    return {
      center,
      projection,
      zoom,
      rotation,
      radius,
      strokeWidth,
      strokeColor,
      fillColor,
      coordinate,
    };
  },
};
```

<ClientOnly>
<GeomPoint />
</ClientOnly>

Load features simply by providing url value and format GeoJSON

```html
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

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector :url="url" :format="geoJson"> </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>
```

```js
import { ref, inject } from "vue";
export default {
  setup() {
    const center = ref([0, 0]);
    const projection = ref("EPSG:4326");
    const zoom = ref(3);
    const rotation = ref(0);

    const url = ref(
      "https://openlayers.org/en/latest/examples/data/geojson/countries.geojson"
    );

    const format = inject("ol-format");
    const geoJson = new format.GeoJSON();

    return {
      center,
      projection,
      zoom,
      rotation,
      url,
      geoJson,
    };
  },
};
```

<ClientOnly>
<VectorSourceDemo1 />
</ClientOnly>

Next example loads features from remote WFS service by viewport BBOX. With format and strategy you can define custom vector source format and loading strategy.

```html
<ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:400px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
        <ol-source-vector :url="urlFunction" :strategy="bbox" :format="GeoJSON" :projection="projection">

        </ol-source-vector>
        <ol-style>
            <ol-style-stroke color="red" :width="5"></ol-style-stroke>
        </ol-style>
    </ol-vector-layer>

</ol-map>
</template>
```

```js
import { ref, inject } from "vue";
export default {
  setup() {
    const center = ref([-8908887.277395891, 5381918.072437216]);
    const projection = ref("EPSG:3857");
    const zoom = ref(14);
    const rotation = ref(0);

    const urlFunction = (extent, resolution, projection) => {
      var proj = projection.getCode();
      let url =
        "https://ahocevar.com/geoserver/wfs?service=WFS&" +
        "version=1.1.0&request=GetFeature&typename=osm:water_areas&" +
        "outputFormat=application/json&srsname=" +
        proj +
        "&" +
        "bbox=" +
        extent.join(",") +
        "," +
        proj;
      return url;
    };

    const strategy = inject("ol-loadingstrategy");
    const bbox = strategy.bbox;
    console.log(bbox);
    const format = inject("ol-format");
    const GeoJSON = new format.GeoJSON();

    return {
      center,
      projection,
      zoom,
      rotation,
      urlFunction,
      bbox,
      GeoJSON,
    };
  },
};
```

<ClientOnly>
<VectorSourceDemo2/>
</ClientOnly>

## Properties

# attributions

- **Type**: ` [String, Array]`
- **Default**: `EPSG:3857`

# features

- **Type**: `Array`
- **Default**: `() => []`

# format

- **Type**: `Format`

formats available with inject('ol-format')

# loader

- **Type**: `Function`

# overlaps

- **Type**: `Boolean`
- **Default**: `true`

# projection

- **Type**: `String`
- **Default**: 'EPSG:3857'

# strategy

- **Type**: `Function`

strategy available with inject('ol-loadingstrategy');

# url

- **Type**: `[String, Function]`

# useSpatialIndex

- **Type**: `Boolean`

- **Default**: `true`

# wrapX

- **Type**: `Boolean`
- **Default**: `true`
