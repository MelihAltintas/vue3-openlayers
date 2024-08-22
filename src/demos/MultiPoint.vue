<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-multi-point
            :coordinates="[
              [116.544921, 40.451633],
              [116.545264, 40.451649],
              [116.545865, 40.451698],
              [116.546144, 40.451551],
              [116.546337, 40.451274],
              [116.546788, 40.451143],
              [116.547324, 40.451078],
              [116.547539, 40.450996],
              [116.547839, 40.450719],
              [116.54844, 40.450506],
              [116.548933, 40.450604],
              [116.549448, 40.450604],
              [116.550242, 40.450376],
              [116.550865, 40.450163],
              [116.551702, 40.449935],
              [116.552581, 40.449576],
            ]"
          ></ol-geom-multi-point>
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
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 500px"
  >
    <ol-view
      ref="view"
      :center="center2"
      :zoom="zoom2"
      :projection="projection2"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-polygon
            :coordinates="[
              [
                [126.47002404644267, 43.99093328925813],
                [126.4711768581417, 43.992878669502076],
                [126.47228243645466, 43.99516210909935],
                [126.47326121895479, 43.99737943568237],
                [126.47427789090142, 43.99921969843481],
                [126.47532929515239, 44.00132369592343],
                [126.4762939627539, 44.003541854028306],
                [126.47727258042467, 44.0053002738806],
                [126.47835156610404, 44.007269624853535],
                [126.47946967442907, 44.00930314735945],
                [126.48052150751474, 44.011403661489204],
                [126.46321063129544, 44.01318358466894],
                [126.46346516898865, 44.01127347916341],
                [126.46355757652879, 44.00899723235789],
                [126.46366872159692, 44.00667901337523],
                [126.46387719747767, 44.00450595619715],
                [126.46420396408529, 44.0024736499698],
                [126.46439723545224, 44.000281973997225],
                [126.4645750958243, 43.998084867230126],
                [126.46487149748539, 43.995954127907204],
                [126.46504464744574, 43.99372228077026],
                [126.46511844566551, 43.991608178272905],
                [126.47002404644267, 43.99093328925813],
              ],
            ]"
          ></ol-geom-polygon>
          <ol-style>
            <!-- <ol-style-fill color="red" /> -->
            <ol-style-fill color="red" color2="yellow"></ol-style-fill>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([116.54875, 40.45064]);
const projection = ref("EPSG:4326");
const zoom = ref(17);
const radius = ref(10);
const strokeWidth = ref(4);
const strokeColor = ref("red");
const fillColor = ref("white");

const center2 = ref([126.443156, 43.971377]);
const projection2 = ref("EPSG:4326");
const zoom2 = ref(13);
</script>
