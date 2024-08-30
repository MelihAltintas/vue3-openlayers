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
          <ol-geom-polygon
            :coordinates="[
              [
                [-98.844959, 19.691586],
                [-98.842749, 19.69098],
                [-98.84217, 19.693122],
                [-98.844358, 19.693667],
                [-98.844959, 19.691586],
              ],
              [
                [-98.84573034297229, 19.691206743587088],
                [-98.84236332851385, 19.69026183008994],
                [-98.84133866368556, 19.69351739026062],
                [-98.8447693829186, 19.694312532467134],
                [-98.84573034297229, 19.691206743587088],
              ],
            ]"
          ></ol-geom-polygon>
          <ol-style>
            <ol-style-stroke color="red" :width="2"></ol-style-stroke>
            <ol-style-fill color="rgba(255,0,0,0.2)"></ol-style-fill>
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
            <ol-style-fill color="red" />
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
            <ol-style-fill :gradient="linearGradient" />
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
            <ol-style-fill :gradient="radialGradient" />
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";

const center = ref([-98.8449, 19.6869]);
const projection = ref("EPSG:4326");
const zoom = ref(15);

const center2 = ref([116.47727258042467, 40.99921969843481]);
const projection2 = ref("EPSG:4326");
const zoom2 = ref(13.5);

const linearGradient = {
  type: "linear",
  x0: 0,
  y0: 0,
  x1: 0,
  y1: 256,
  colorStops: [
    [0, "red"], // Start color
    [0.5, "yellow"], // Middle color
    [1, "green"], // End color
  ],
};

const radialGradient = {
  type: "radial",
  x0: 128,
  y0: 128,
  r0: 0,
  x1: 128,
  y1: 128,
  r1: 128,
  colorStops: [
    [0, "blue"], // Center color
    [0.5, "cyan"], // Middle color
    [1, "white"], // Edge color
  ],
};

</script>
