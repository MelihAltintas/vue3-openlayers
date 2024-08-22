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
    style="height: 400px"
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
                [116.47002404644267, 40.99093328925813],
                [116.4711768581417, 40.992878669502076],
                [116.47228243645466, 40.99516210909935],
                [116.47326121895479, 40.99737943568237],
                [116.47427789090142, 40.99921969843481],
                [116.47532929515239, 41.00132369592343],
                [116.4762939627539, 41.003541854028306],
                [116.47727258042467, 41.0053002738806],
                [116.47835156610404, 41.007269624853535],
                [116.47946967442907, 41.00930314735945],
                [116.48052150751474, 41.011403661489204],
                [116.46321063129544, 41.01318358466894],
                [116.46346516898865, 41.01127347916341],
                [116.46355757652879, 41.00899723235789],
                [116.46366872159692, 41.00667901337523],
                [116.46387719747767, 41.00450595619715],
                [116.46420396408529, 41.0024736499698],
                [116.46439723545224, 41.000281973997225],
                [116.4645750958243, 40.998084867230116],
                [116.46487149748539, 40.995954127907204],
                [116.46504464744574, 40.99372228077026],
                [116.46511844566551, 40.991608178272905],
                [116.47002404644267, 40.99093328925813],
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

const center2 = ref([116.47727258042467, 40.99921969843481]);
const projection2 = ref("EPSG:4326");
const zoom2 = ref(13.5);
</script>
