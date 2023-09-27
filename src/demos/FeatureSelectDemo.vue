<template>
  <form>
    <label for="bufferRadius">Buffer Radius:</label>
    <input type="number" id="bufferRadius" v-model="bufferRadius" />
  </form>

  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
    @pointermove="hoverFeature"
    @click="selectFeature"
    ref="mapRef"
  >
    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" />

    <ol-vector-tile-layer class-name="feature-layer">
      <ol-source-vector-tile :url="url" :format="mvtFormat">
      </ol-source-vector-tile>
      <ol-style>
        <ol-style-stroke color="#2255ee" :width="1" />
      </ol-style>
    </ol-vector-tile-layer>

    <ol-vector-layer>
      <ol-source-vector :features="highlightedFeatures" />
      <ol-style>
        <ol-style-stroke color="#bb2233" :width="2" />
      </ol-style>
    </ol-vector-layer>

    <ol-vector-layer v-if="selectedFeatures">
      <ol-source-vector :features="selectedFeatures" />
      <ol-style>
        <ol-style-stroke color="#bb2233" :width="2" />
      </ol-style>
    </ol-vector-layer>

    <ol-vector-layer v-if="bound" class-name="bound">
      <ol-source-vector :features="[bound]" />
      <ol-style>
        <ol-style-stroke color="#33dd99" :width="3" />
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
import type { Layer } from "ol/layer";
import { transform } from "ol/proj";
import { computed, inject, ref, watch } from "vue";

const format = inject("ol-format");
const mvtFormat = new format.MVT({ featureClass: Feature });
const mapRef = ref<{ map: MapRef } | null>(null);
const center = ref([943955.9456952971, 6356667.343082143]);
const zoom = ref(18);
const rotation = ref(0);
const url = ref(
  "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf",
);
const selectedFeatures = ref<FeatureLike[]>([]);
const highlightedFeatures = ref<FeatureLike[]>();
const bound = ref<FeatureLike>();
const bufferRadius = ref<number>(10);

const highlightingTemplate = computed<Coordinate[]>(() => {
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
  return allFlatCoordinates
    .reduce<Coordinate[]>((accumulator, _, currentIndex, array) => {
      if (currentIndex % 2 === 0) {
        accumulator.push(array.slice(currentIndex, currentIndex + 2));
      }
      return accumulator;
    }, [])
    .map((c) => transform(c, "EPSG:3857", "EPSG:4326"));
});

/**
 * Only handle click / hover for the layer with class name "feature-layer"
 */
function layerFilter(layerCandidate: Layer) {
  return layerCandidate.getClassName().includes("feature-layer");
}

/**
 * show hovered feature in separate layer
 */
function hoverFeature(event: MapBrowserEvent<PointerEvent>, a) {
  const map = mapRef.value?.map;
  if (!map) {
    return;
  }
  const features = map.getFeaturesAtPixel(event.pixel, {
    hitTolerance: 10,
    layerFilter,
  });
  highlightedFeatures.value = features[0] ? [features[0]] : [];
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
    selectedFeatures.value = [];
  }

  // store selected feature
  const feature = map.getFeaturesAtPixel(event.pixel, {
    hitTolerance: 10,
    layerFilter,
  })[0];
  const featureIndex = selectedFeatures.value.indexOf(feature);
  if (featureIndex == -1) {
    selectedFeatures.value.push(feature);
  } else {
    selectedFeatures.value.splice(featureIndex, 1);
  }
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
