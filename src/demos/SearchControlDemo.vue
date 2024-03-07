<template>
  <ol-map ref="map" style="height: 400px" :controls="[]">
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />
    <ol-tile-layer title="OSM">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-search-control
      :autocomplete="autocomplete"
      :getTitle="getTitle"
      :collapsed="true"
      :maxHistory="10"
      @select="select"
    />
  </ol-map>
</template>

<script setup lang="ts">
import type { Coordinate } from "ol/coordinate";
import { type SearchEvent } from "ol-ext/control/Search";
import { easeOut } from "ol/easing";
import { ref } from "vue";
import type { Map } from "ol";

type City = {
  name: string;
  pos: Coordinate;
  zoom: number;
};

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);

const positions: City[] = [
  {
    name: "Paris",
    pos: [2.351828, 48.856578],
    zoom: 11,
  },
  {
    name: "London",
    pos: [-0.1275, 51.507222],
    zoom: 11,
  },
  {
    name: "Geneve",
    pos: [6.149985, 46.200013],
    zoom: 13,
  },
  {
    name: "Bruxelles",
    pos: [4.35, 50.83],
    zoom: 12,
  },
  {
    name: "Berlin",
    pos: [13.383333, 52.516667],
    zoom: 12,
  },
  {
    name: "Madrid",
    pos: [-3.683333, 40.433333],
    zoom: 12,
  },
  {
    name: "Roma",
    pos: [12.48657, 41.888732],
    zoom: 12,
  },
];

function getTitle(f: City) {
  return f.name;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function autocomplete(s: string, callback: (result: City[]) => void) {
  const result = [];
  for (let i = 0; i < positions.length; i++) {
    if (new RegExp(s.replace("*", "") || ".*", "i").test(positions[i].name)) {
      result.push(positions[i]);
    }
  }
  /* Return result directly... */
  return result;
  /* ...or use the callback function
  callback(result);
  return false;
  */
}

function select(e: SearchEvent) {
  const map: Map = e.target.getMap();
  map.getView().animate({
    center: e.search.pos,
    zoom: e.search.zoom,
    easing: easeOut,
  });
}
</script>
