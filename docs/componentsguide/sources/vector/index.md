# ol-source-vector

ol-source-vector can be used together with ol-vector-layer to draw any vector data on the map.

<script setup>
import GeomPoint from "@demos/GeomPoint.vue"
import VectorSourceDemo1 from "@demos/VectorSourceDemo1.vue"
import VectorSourceDemo2 from "@demos/VectorSourceDemo2.vue"
import VectorSourceDemo3 from "@demos/VectorSourceDemo3.vue"
import AnimatedClusterDemo2 from "@demos/AnimatedClusterDemo2.vue"
</script>

## Usage

### `ol-feature` component (GeoJSON)

Static features with the help of `ol-feature`, should be used only for tiny static layers.

<ClientOnly>
<GeomPoint />
</ClientOnly>

```vue
<template>
  <button @click="() => (coordinate = coordinate.map((a) => a + 0.01))">
    changecoor
  </button>
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

<script setup>
import { ref } from "vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);
const radius = ref(40);
const strokeWidth = ref(10);
const strokeColor = ref("red");
const fillColor = ref("white");
const coordinate = ref([40, 40]);
</script>
```

### `url` property

Load features simply by providing url value and format GeoJSON

<ClientOnly>
<VectorSourceDemo1 />
</ClientOnly>

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

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector :url="url" :format="geoJson"> </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref([0, 0]);
const projection = ref("EPSG:4326");
const zoom = ref(3);
const rotation = ref(0);

const url = ref("https://openlayers.org/data/vector/ecoregions.json");
const format = inject("ol-format");
console.log(format);
const geoJson = new format.GeoJSON();
</script>
```

### `features` property

<ClientOnly>
<AnimatedClusterDemo2 />
</ClientOnly>

### `urlFunction`

Next example loads features from remote WFS service by viewport BBOX. With format and strategy you can define custom vector source format and loading strategy.

<ClientOnly>
<VectorSourceDemo2/>
</ClientOnly>

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

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector
        :url="urlFunction"
        :strategy="bbox"
        :format="GeoJSON"
        :projection="projection"
      >
      </ol-source-vector>
      <ol-style>
        <ol-style-stroke color="red" :width="5"></ol-style-stroke>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref([-8908887.277395891, 5381918.072437216]);
const projection = ref("EPSG:3857");
const zoom = ref(14);
const rotation = ref(0);

const urlFunction = (extent, resolution, projection) => {
  const proj = projection.getCode();
  const url =
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
</script>
```

### TopoJSON

You can also use other Vector formats like TopoJSON.

<ClientOnly>
<VectorSourceDemo3/>
</ClientOnly>

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

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector :url="url" :format="TopoJSON" :projection="projection">
      </ol-source-vector>
      <ol-style>
        <ol-style-stroke color="red" :width="2"></ol-style-stroke>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";

const center = ref([4.4764595, 50.5010789]);
const projection = ref("EPSG:4326");
const zoom = ref(7.5);
const rotation = ref(0);

const url =
  "https://raw.githubusercontent.com/bmesuere/belgium-topojson/master/belgium.json";

const format = inject("ol-format");
const TopoJSON = new format.TopoJSON({
  // don't want to render the full world polygon (stored as 'land' layer),
  // which repeats all countries
  layers: ["arrondissements", "provinces"],
});
</script>
```

## Performance hints

When rendering a large number of markers on a map using OpenLayers, there can be performance differences between requesting data from a URL as GeoJSON and passing the features directly through the source vector.

**Data Transfer:**
When requesting data from a URL, the GeoJSON data is transferred over the network as needed, rather than loading the entire dataset upfront.
This can be advantageous when dealing with large datasets, as it minimizes the initial data transfer and reduces the time required to load the markers onto the map.

**Data Streaming:**
Requesting data from a URL allows for streaming the GeoJSON data in smaller chunks, which can significantly improve performance when rendering a large number of markers.
The data can be fetched progressively and rendered incrementally, providing a smoother user experience and reducing the strain on system resources.

**Memory Management:**
By requesting data from a URL, the GeoJSON data is loaded on-demand and can be efficiently managed by OpenLayers.
When passing the features directly through the source vector, all the data is loaded into memory at once, which can cause performance issues and potentially lead to out-of-memory errors when dealing with extremely large datasets.

**Data Filtering and Caching:**
Requesting data from a URL allows for server-side data filtering, which means you can request only the necessary markers based on certain criteria.
Additionally, the server can cache the GeoJSON data, enabling faster subsequent requests and reducing the load on the server and the network.

**Dynamic Data Updates:**
If your data is dynamic and frequently updated, requesting data from a URL provides a convenient way to fetch the latest information without having to reload the entire dataset.
This can be particularly useful when working with real-time data or when updates occur frequently.

## Properties

### attributions

- **Type**: ` [String, Array]`
- **Default**: `EPSG:3857`

### features

- **Type**: `Array`
- **Default**: `() => []`

### format

- **Type**: `Format`

formats available with `inject('ol-format')`

### loader

- **Type**: `Function`

### overlaps

- **Type**: `Boolean`
- **Default**: `true`

### projection

- **Type**: `String`
- **Default**: 'EPSG:3857'

### strategy

- **Type**: `Function`

strategy available with inject('ol-loadingstrategy');

### url

- **Type**: `[String, Function]`

### useSpatialIndex

- **Type**: `Boolean`

- **Default**: `true`

### wrapX

- **Type**: `Boolean`
- **Default**: `true`

## Events

- `addfeature`
- `change`
- `changefeature`
- `clear`
- `error`
- `featuresloadend`
- `featuresloaderror`
- `featuresloadstart`
- `propertychange`
- `removefeature`
