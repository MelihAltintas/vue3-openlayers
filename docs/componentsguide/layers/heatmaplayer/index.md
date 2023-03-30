# ol-heatmap-layer

ol-heatmap-layer can render vector data as a heatmap from various backend services. It should be used with together with ol-source-vector component.

<script setup>
import HeatmapLayerDemo from "@demos/HeatmapLayerDemo.vue"
</script>

<ClientOnly>
<HeatmapLayerDemo />
</ClientOnly>

## Usage

Example below shows how you can use ol-heatmap-layer and ol-source-vector to render a heatmap from a backend source.

```html
<template>
  <ol-map
    ref="map"
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height:800px"
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

    <ol-heatmap-layer
      title="heatmap"
      :blur="20"
      :radius="20"
      :weight="heatmapWeight"
      zIndex="1"
    >
      <ol-source-vector
        ref="earthquakes"
        url="https://raw.githubusercontent.com/openlayers/openlayers/main/examples/data/kml/2012_Earthquakes_Mag5.kml"
        :format="kml"
      >
      </ol-source-vector>
    </ol-heatmap-layer>
  </ol-map>
</template>
```

```js
import { ref, inject } from "vue";
export default {
  setup() {
    const center = ref([101.97, 4.21]);
    const projection = ref("EPSG:4326");
    const zoom = ref(5);
    const rotation = ref(0);
    const format = inject("ol-format");
    const geoJson = new format.GeoJSON();
    const kml = new format.KML({ extractStyles: false });
    const heatmapWeight = function (feature) {
      // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
      // standards-violating <magnitude> tag in each Placemark.  We extract it from
      // the Placemark's name instead.
      const name = feature.get("name");
      const magnitude = parseFloat(name.substr(2));
      return magnitude - 5;
    };
    return {
      center,
      projection,
      zoom,
      rotation,
      geoJson,
      heatmapWeight,
      kml,
    };
  },
};
```

## Properties

# weight

- **Type**: `Function`
- **Default**: `none`

A function that returns a weight from a feature. Weight values should range from 0 to 1 (and values outside will be clamped to that range).

# extent

- **Type**: `Array`

The bounding extent for layer rendering. The layer will not be rendered outside of this extent.

# blur

- **Type**: `Number`
- **Default**: `15`

The blur size in pixels.

# radius

- **Type**: `Number`

The radius size in pixels.
