<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view ref="view" :center="center" :zoom="zoom" />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <!-- vector data path -->
    <ol-vector-layer>
      <ol-source-vector
        url="https://raw.githubusercontent.com/Viglino/ol-ext/master/examples/data/2009-09-04_rando.gpx"
        :format="gpx"
        @featuresloadend="handleFeaturesloadend"
      >
        <ol-style>
          <ol-style-stroke color="red" :width="3"></ol-style-stroke>
        </ol-style>
      </ol-source-vector>
    </ol-vector-layer>

    <!-- Hover handling -->
    <ol-interaction-select
      @select="featureSelected"
      :condition="selectCondition"
      :hitTolerance="10"
    >
      <ol-style>
        <ol-style-stroke color="red" :width="3"></ol-style-stroke>
      </ol-style>
    </ol-interaction-select>

    <!-- point -->
    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-point v-if="point" :coordinates="point"></ol-geom-point>
          <ol-style>
            <ol-style-circle :radius="3">
              <ol-style-fill color="green"></ol-style-fill>
              <ol-style-stroke color="green" :width="10"></ol-style-stroke>
            </ol-style-circle>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>

    <ol-profile-control
      @over="over"
      @out="out"
      ref="profileControl"
    ></ol-profile-control>
  </ol-map>
</template>

<script setup lang="ts">
import type { Feature } from "ol";
import type Profile from "ol-ext/control/Profile";
import type { Coordinate } from "ol/coordinate";
import type { Point } from "ol/geom";
import type { SelectEvent } from "ol/interaction/Select";
import type { VectorSourceEvent } from "ol/source/Vector";
import { ref, inject } from "vue";

const center = ref([650000, 5407500]);
const zoom = ref(13);
const profileFeature = ref(null);
const profileControl = ref<{ control: Profile } | null>(null);
const point = ref<Coordinate | null>(null);

const selectConditions = inject("ol-selectconditions");
const format = inject("ol-format");

const gpx = new format.GPX();
const selectCondition = selectConditions.pointerMove;

function handleFeaturesloadend(event: VectorSourceEvent) {
  profileFeature.value = event.target.getFeatures()[0];
  if (profileFeature.value) {
    profileControl.value?.control?.setGeometry(profileFeature.value);
  }
}

function featureSelected(event: SelectEvent) {
  const selected = event.selected[0] as Feature<Point>;
  if (selected) {
    const p = selected
      .getGeometry()
      ?.getClosestPoint(event.mapBrowserEvent.coordinate);
    if (p) {
      drawPoint("over", p);
    }
  }
}

function over(event: { type: "over" | "out"; coord: Coordinate }) {
  drawPoint("over", event.coord);
}

function out(event: { type: "over" | "out"; coord: Coordinate }) {
  drawPoint(event.type, event.coord);
}

function drawPoint(type: "over" | "out", coord: Coordinate) {
  const profile = profileControl.value?.control;
  if (!profile) return;
  if (coord) {
    point.value = coord;
    const position = profile.showAt(coord);
    profile.popup(`${position[2]} m`);
  } else {
    point.value = null;
    profile.showAt([]);
    profile.popup("");
  }
}
</script>
