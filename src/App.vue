<template>
  <button @click="drawEnabled = !drawEnabled">Draw</button>
  {{ drawEnabled }}
  <ol-map
    ref="map"
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    style="height: 350px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
      @ready="ready"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <!-- 天地图 -->
    <ol-tile-layer>
      <ol-source-tianditu
        layerType="img"
        projection="EPSG:4326"
        :tk="tianditukey"
        :hidpi="true"
      ></ol-source-tianditu>
    </ol-tile-layer>
    <!--  -->
    <ol-tile-layer>
      <ol-source-tianditu
        :isLabel="true"
        layerType="img"
        projection="EPSG:4326"
        :tk="tianditukey"
        :hidpi="true"
      ></ol-source-tianditu>
    </ol-tile-layer>

    <ol-vector-layer :style="vectorStyle">
      <ol-source-vector :features="zones">
        <ol-interaction-draw
          v-if="drawEnabled"
          :stopClick="true"
          type="Polygon"
          @drawend="drawend"
        />
        <ol-style>
          <ol-style-stroke color="blue" :width="2"></ol-style-stroke>
          <ol-style-fill color="rgba(255, 0, 0, 0.4)"></ol-style-fill>
        </ol-style>
      </ol-source-vector>
    </ol-vector-layer>

    <ol-interaction-transform> </ol-interaction-transform>
  </ol-map>
</template>

<script>
import { ref } from "vue";
import { GeoJSON } from "ol/format";

export default {
  setup() {
    const map = ref("");
    // const center = ref([-102.13121, 40.2436]);
    const center = ref([116.41124529391394, 39.953530444730816]);
    const projection = ref("EPSG:4326");
    const zoom = ref(5);
    const rotation = ref(0);
    const tianditukey = ref("dbed7e0f96194affd82763e159de4c50");

    const drawEnabled = ref(false);

    const ready = (map, view) => {
      console.log(map, view);
    };

    const geojsonObject = {
      type: "FeatureCollection",
      crs: {
        type: "name",
        properties: {
          name: "EPSG:4326",
        },
      },
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-103.86923852630616, 43.45599322423934],
                [-103.90891107984544, 39.34240191087722],
                [-98.76630637117387, 39.558687199211114],
                [-98.89435771175386, 43.945405844902986],
                [-103.86923852630616, 43.45599322423934],
              ],
            ],
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-103.85636392303468, 38.10970692739486],
                [-103.86770698495866, 33.218572724914544],
                [-98.20654544301988, 33.6532810221672],
                [-98.4408283538437, 38.31894739375114],
                [-103.85636392303468, 38.10970692739486],
              ],
            ],
          },
        },
      ],
    };

    const zones = ref([]);

    const drawend = (event) => {
      zones.value.push(event.feature);
      drawEnabled.value = false;
    };

    zones.value = new GeoJSON().readFeatures(geojsonObject);

    const geoJsonFormat = new GeoJSON();

    return {
      map,
      geoJsonFormat,
      zones,
      center,
      projection,
      zoom,
      rotation,
      drawEnabled,
      drawend,
      tianditukey,
      ready,
    };
  },
};
</script>
