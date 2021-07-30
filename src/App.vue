<template>
  <button @click="drawEnabled = !drawEnabled">Draw</button>
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
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer :style="vectorStyle">
      <ol-source-vector :features="zones">
        <!-- <ol-source-vector
        :url="'https://openlayers.org/en/latest/examples/data/geojson/countries.geojson'"
        :format="geoJsonFormat"
      > -->
        <ol-interaction-modify
          v-if="modifyEnabled"
          :features="selectedFeatures"
        >
        </ol-interaction-modify>
        <ol-interaction-draw
          v-if="drawEnabled"
          :stopClick="true"
          type="Polygon"
          @drawend="drawend"
        />
        <ol-interaction-snap v-if="modifyEnabled" />
      </ol-source-vector>
    </ol-vector-layer>
    <ol-interaction-select
      @select="featureSelected"
      :condition="selectCondition"
    >
      <ol-style>
        <ol-style-stroke :color="'red'" :width="2"></ol-style-stroke>
        <ol-style-fill :color="`rgba(255, 0, 0, 0.4)`"></ol-style-fill>
      </ol-style>
    </ol-interaction-select>
  </ol-map>
</template>

<script>
import { ref, inject } from "vue"
import { GeoJSON } from "ol/format"
import { Fill, Stroke, Style } from "ol/style"

export default {
  setup() {
    const center = ref([-102.13121, 40.2436])
    const projection = ref("EPSG:4326")
    const zoom = ref(5)
    const rotation = ref(0)
    const modifyEnabled = ref(false)
    const drawEnabled = ref(false)

    const geojsonObject = {
      type: "FeatureCollection",
      crs: {
        type: "name",
        properties: {
          name: "EPSG:4326"
        }
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
                [-103.86923852630616, 43.45599322423934]
              ]
            ]
          }
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
                [-103.85636392303468, 38.10970692739486]
              ]
            ]
          }
        }
      ]
    }

    const zones = ref([])
    const selectedFeatures = ref([])
    const drawend = (event) => {
      zones.value.push(event.feature)
    }

    zones.value = new GeoJSON().readFeatures(geojsonObject)

    function vectorStyle() {
      const style = new Style({
        stroke: new Stroke({
          color: "blue",
          width: 3
        }),
        fill: new Fill({
          color: "rgba(0, 0, 255, 0.4)"
        })
      })
      return style
    }

    const geoJsonFormat = new GeoJSON()
    const selectConditions = inject("ol-selectconditions")
    const selectCondition = selectConditions.click

    function featureSelected(event) {
      modifyEnabled.value = false
      if (event.selected.length > 0) {
        modifyEnabled.value = true
      }
      selectedFeatures.value = event.target.getFeatures()
   
    }


    return {
      vectorStyle,
      geoJsonFormat,
      featureSelected,
      selectCondition,
      zones,
      center,
      projection,
      zoom,
      rotation,
      modifyEnabled,
      drawEnabled,
      drawend,
      selectedFeatures,

    }
  }
}
</script>