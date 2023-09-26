<template>
  <div>
    <label for="bufferRadius">Buffer Radius:</label>
    <input type="number" id="bufferRadius" v-model="bufferRadius" />
  </div>

  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
    @pointermove="hoverFeature"
    @click="selectFeature"
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

    <ol-vector-layer v-if="highlightedFeature">
      <ol-source-vector :features="[highlightedFeature]"> </ol-source-vector>

      <ol-style>
        <ol-style-stroke color="orange" :width="4"></ol-style-stroke>
      </ol-style>
    </ol-vector-layer>

    <ol-vector-layer>
      <ol-source-vector :features="Array.from(selectedFeatures)">
      </ol-source-vector>

      <ol-style>
        <ol-style-stroke color="red" :width="3"></ol-style-stroke>
      </ol-style>
    </ol-vector-layer>

    <ol-vector-layer v-if="bound">
      <ol-source-vector :features="[bound]"> </ol-source-vector>

      <ol-style>
        <ol-style-stroke color="green" :width="3"></ol-style-stroke>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup lang="ts">
import buffer from "@turf/buffer";
import { lineString } from "@turf/helpers";
import { MapBrowserEvent } from "ol";
import Feature, { type FeatureLike } from "ol/Feature";
import type MapRef from "ol/Map.js";
import type { Coordinate } from "ol/coordinate";
import GeoJSON from "ol/format/GeoJSON";
import {
  LineString,
  MultiLineString,
  MultiPoint,
  MultiPolygon,
  Point,
  Polygon,
} from "ol/geom";
import { transform } from "ol/proj";
import { inject, ref, watch } from "vue";

const format = inject("ol-format");
const mvtFormat = new format.MVT({ featureClass: Feature });
const mapRef = ref<{ map: MapRef } | null>(null);
const center = ref([943955.9456952971, 6356667.343082143]);
const zoom = ref(18);
const rotation = ref(0);
const url = ref(
  "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf",
);
const selectedFeatures = ref<Set<FeatureLike>>(new Set());
const highlightedFeature = ref<FeatureLike>();
const bound = ref<FeatureLike>();
const bufferRadius = ref<number>(10);
const highlightingTemplate = ref<Coordinate[]>([]);

/**
 * show hovered feature in separate layer
 */
function hoverFeature(event: MapBrowserEvent<PointerEvent>) {
  const map = mapRef.value?.map;
  if (!map) {
    return;
  }
  highlightedFeature.value = undefined;
  map.forEachFeatureAtPixel(
    event.pixel,
    (feature: FeatureLike) => {
      highlightedFeature.value = feature;
    },
    { hitTolerance: 1 },
  );
}

/**
 * select features and combine them when shift key is pressed
 */
function selectFeature(event: MapBrowserEvent<PointerEvent>) {
  const map = mapRef.value?.map;
  if (!map) {
    return;
  }

  // reset selection when shift key isn't pressed
  if (!event.originalEvent.shiftKey) {
    selectedFeatures.value.clear();
    highlightingTemplate.value = [];
  }

  // store selected feature
  const feature = map.getFeaturesAtPixel(event.pixel, { hitTolerance: 10 })[0];
  if (!feature) {
    return;
  }
  selectedFeatures.value.has(feature)
    ? selectedFeatures.value.delete(feature)
    : selectedFeatures.value.add(feature);

  // get flat coordinates from all selected geometries (e. g. [13.40, 52.52, 13.32, 51.43, ...])
  const allFlatCoordinates: Coordinate = [];
  selectedFeatures.value.forEach((feature) => {
    const geometry = feature.getGeometry() as
      | Point
      | MultiPoint
      | Polygon
      | MultiPolygon
      | LineString
      | MultiLineString;
    allFlatCoordinates.push(...geometry.getFlatCoordinates());
  });

  // map flat coordinates to Coordinate array (e. g. [[13.40, 52.52], [13.32, 51.43], [...]])
  highlightingTemplate.value = allFlatCoordinates
    .reduce<Coordinate[]>((accumulator, _, currentIndex, array) => {
      if (currentIndex % 2 === 0) {
        accumulator.push(array.slice(currentIndex, currentIndex + 2));
      }
      return accumulator;
    }, [])
    .map((c) => transform(c, "EPSG:3857", "EPSG:4326"));
}

watch([highlightingTemplate, bufferRadius], () => {
  if (highlightingTemplate.value.length === 0) {
    bound.value = undefined;
  } else {
    const line = lineString(highlightingTemplate.value);
    const bufferedHull = buffer(line, bufferRadius.value, {
      units: "meters",
    });
    bound.value = new GeoJSON().readFeature(bufferedHull, {
      dataProjection: "EPSG:4326",
      featureProjection: "EPSG:3857",
    });
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
