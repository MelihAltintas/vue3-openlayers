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

::: code-group

<<< src/demos/GeomPoint.vue

:::

### `url` property

Load features simply by providing url value and format GeoJSON

<ClientOnly>
<VectorSourceDemo1 />
</ClientOnly>

::: code-group

<<< src/demos/VectorSourceDemo1.vue

:::

### `features` property

<ClientOnly>
<AnimatedClusterDemo2 />
</ClientOnly>

::: code-group

<<< src/demos/AnimatedClusterDemo2.vue

:::

### `urlFunction`

Next example loads features from remote WFS service by viewport BBOX. With format and strategy you can define custom vector source format and loading strategy.

<ClientOnly>
<VectorSourceDemo2/>
</ClientOnly>

::: code-group

<<< src/demos/VectorSourceDemo2.vue

:::

### TopoJSON

You can also use other Vector formats like TopoJSON.

<ClientOnly>
<VectorSourceDemo3/>
</ClientOnly>

::: code-group

<<< src/demos/VectorSourceDemo3.vue

:::

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
