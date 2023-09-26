<template>
  <div>
    <label for="bufferRadius"> Buffer Radius: </label>
    <input type="number" id="bufferRadius" v-model="bufferRadius" />
  </div>

  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
    @pointermove="pointermove"
    @click="click"
    ref="mapRef"
  >
    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" />

    <ol-vector-tile-layer>
      <ol-source-vector-tile :url="url" :format="mvtFormat">
      </ol-source-vector-tile>

      <ol-style>
        <ol-style-stroke color="blue" :width="1"></ol-style-stroke>
      </ol-style>
    </ol-vector-tile-layer>

    <ol-vector-layer>
      <ol-source-vector :features="highlightedFeature"> </ol-source-vector>

      <ol-style>
        <ol-style-stroke color="red" :width="3"></ol-style-stroke>
      </ol-style>
    </ol-vector-layer>

    <ol-vector-layer>
      <ol-source-vector :features="selectedFeatures"> </ol-source-vector>

      <ol-style>
        <ol-style-stroke color="red" :width="3"></ol-style-stroke>
      </ol-style>
    </ol-vector-layer>

    <ol-vector-layer>
      <ol-source-vector :features="bound"> </ol-source-vector>

      <ol-style>
        <ol-style-stroke color="green" :width="3"></ol-style-stroke>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup lang="ts">
import * as turf from "@turf/turf";
import Feature, { type FeatureLike } from "ol/Feature";
import type MapRef from "ol/Map.js";
import { Geometry } from "ol/geom";
import GeoJSON from "ol/format/GeoJSON";
import VectorTileLayer from "ol/layer/VectorTile";
import { transform } from "ol/proj";
import { inject, ref, watch } from "vue";

const center = ref([943955.94569529717, 6356667.343082143]);
const zoom = ref(18);
const rotation = ref(0);

const url = ref(
  "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf",
);
const format = inject("ol-format");
const mvtFormat = new format.MVT({ featureClass: Feature });

const mapRef = ref<{ map: MapRef } | null>(null);

let selectedFeatures = ref<FeatureLike[]>([]);
let highlightedFeature = ref<FeatureLike[]>([]);
let bound = ref<FeatureLike[]>([]);
let bufferRadius = ref<number>(10);
let highlightingTemplate = ref<number[][][]>([]);

function pointermove(event: any) {
  const map = mapRef.value?.map;

  highlightedFeature.value = [];

  if (map) {
    map.forEachFeatureAtPixel(
      event.pixel,
      (feature: FeatureLike) => {
        highlightedFeature.value = [feature];
      },
      {
        hitTolerance: 1,
      },
    );
  }
}

function reMap(espg3857: number[][]): number[][] {
  return espg3857.map((coord) => transform(coord, "EPSG:3857", "EPSG:4326"));
}

function click(event: any) {
  const map = mapRef.value?.map;

  if (!event.originalEvent.shiftKey) {
    selectedFeatures.value = [];
    highlightingTemplate.value = [];
  }

  if (map) {
    const features = map.getFeaturesAtPixel(event.pixel, { hitTolerance: 1 });
    if (features[0]) {
      const featureIndex = selectedFeatures.value.indexOf(features[0]);
      if (featureIndex == -1) {
        selectedFeatures.value.push(features[0]);
      } else {
        selectedFeatures.value.splice(featureIndex, 1);
      }

      let coordinates: number[][][] = [];

      selectedFeatures.value.forEach((feature) => {
        const newCoordinates = feature.getGeometry().getCoordinates();

        console.log(feature.getGeometry().getType(), newCoordinates);

        switch (feature.getGeometry().getType()) {
          case "MultiLineString": {
            newCoordinates.forEach((element: number[][]) => {
              coordinates.push(reMap(element));
            });

            break;
          }

          case "Polygon": {
            coordinates.push(reMap(newCoordinates.flat()));
            break;
          }

          case "MultiPolygon": {
            newCoordinates.forEach((element: number[][][]) => {
              coordinates.push(reMap(element.flat()));
            });
            break;
          }

          default: {
            coordinates.push(reMap(newCoordinates));
            break;
          }
        }
      });

      console.log(coordinates);

      highlightingTemplate.value = coordinates;
    }
  }
}

watch([highlightingTemplate, bufferRadius], () => {
  if (highlightingTemplate.value.length === 0) {
    bound.value = [];
  } else {
    const multiLine = turf.multiLineString(highlightingTemplate.value);

    const bufferedHull = turf.buffer(multiLine, bufferRadius.value, {
      units: "meters",
    });

    const format = new GeoJSON();
    const olFeature = format.readFeature(bufferedHull, {
      dataProjection: "EPSG:4326",
      featureProjection: "EPSG:3857",
    });

    bound.value = [olFeature];
  }
});
</script>

<style scoped>
input {
  margin: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  border: 1px solid black;
  width: 100px;
}
</style>
