<template>
  <ol-map
    ref="map"
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 800px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-swipe-control
      ref="swipeControl"
      v-if="layerList.length > 0"
      :layerList="layerList"
    />

    <ol-layerswitcherimage-control />

    <ol-zone-control
      :zones="zones"
      :projection="projection"
      :layer="jawgLayer.tileLayer"
      v-if="jawgLayer != null"
    >
    </ol-zone-control>

    <ol-heatmap-layer
      title="heatmap"
      :blur="20"
      :radius="20"
      :weight="heatmapWeight"
      :gradient="['purple', '#89CFF0', '#93C572', '#FFBF00', 'pink']"
      zIndex="1"
    >
      <ol-source-vector
        ref="earthquakes"
        url="https://raw.githubusercontent.com/openlayers/openlayers/main/examples/data/kml/2012_Earthquakes_Mag5.kml"
        :format="kml"
      >
      </ol-source-vector>
    </ol-heatmap-layer>

    <ol-tile-layer ref="osmLayer" title="OSM">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer ref="jawgLayer" title="JAWG">
      <ol-source-xyz
        crossOrigin="anonymous"
        url="https://c.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token=87PWIbRaZAGNmYDjlYsLkeTVJpQeCfl2Y61mcHopxXqSdxXExoTLEv7dwqBwSWuJ"
      />
    </ol-tile-layer>

    <ol-control-bar>
      <ol-control-toggle
        :order="0"
        html="<i class='fas fa-map-marker'></i>"
        className="edit"
        title="Point"
        :onToggle="(active) => changeDrawType(active, 'Point')"
      />
      <ol-control-toggle
        :order="1"
        html="<i class='fas fa-draw-polygon'></i>"
        className="edit"
        title="Polygon"
        :onToggle="(active) => changeDrawType(active, 'Polygon')"
      />
      <ol-control-toggle
        :order="2"
        html="<i class='fas fa-circle'></i>"
        className="edit"
        title="Circle"
        :onToggle="(active) => changeDrawType(active, 'Circle')"
      />
      <ol-control-toggle
        :order="3"
        html="<i class='fas fa-grip-lines'></i>"
        className="edit"
        title="LineString"
        :onToggle="(active) => changeDrawType(active, 'LineString')"
      />
      <ol-control-videorecorder :order="4" @stop="videoStopped">
      </ol-control-videorecorder>
      <ol-control-printdialog :order="5" />
    </ol-control-bar>

    <ol-mouseposition-control />
    <ol-fullscreen-control />
    <ol-overviewmap-control>
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
    </ol-overviewmap-control>

    <ol-scaleline-control />
    <ol-rotate-control />
    <ol-zoom-control />
    <ol-zoomslider-control />
    <ol-zoomtoextent-control
      :extent="[23.906, 42.812, 46.934, 34.597]"
      tipLabel="Fit to Turkey"
    />

    <ol-context-menu :items="contextMenuItems" />
    <ol-interaction-dragrotatezoom />
    <ol-interaction-clusterselect @select="featureSelected" :pointRadius="20">
      <ol-style>
        <ol-style-stroke color="green" :width="5"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.5)"></ol-style-fill>
        <ol-style-icon :src="markerIcon" :scale="0.05"></ol-style-icon>
      </ol-style>
    </ol-interaction-clusterselect>

    <ol-interaction-select
      @select="featureSelected"
      :condition="selectCondition"
      :filter="selectInteactionFilter"
      v-if="!drawEnable"
    >
      <ol-style>
        <ol-style-stroke color="green" :width="10"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.5)"></ol-style-fill>
        <ol-style-icon :src="markerIcon" :scale="0.05"></ol-style-icon>
      </ol-style>
    </ol-interaction-select>

    <ol-vector-layer
      title="AIRPORTS"
      preview="https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/src/assets/tr.png"
    >
      <ol-source-vector
        ref="cities"
        url="https://raw.githubusercontent.com/alpers/Turkey-Maps-GeoJSON/master/tr-cities-airports.json"
        :format="geoJson"
        :projection="projection"
      >
        <ol-interaction-modify
          v-if="drawEnable"
          @modifyend="modifyend"
          @modifystart="modifystart"
        >
        </ol-interaction-modify>

        <ol-interaction-draw
          v-if="drawEnable"
          :type="drawType"
          @drawend="drawend"
          @drawstart="drawstart"
        >
        </ol-interaction-draw>

        <ol-interaction-snap v-if="drawEnable" />
      </ol-source-vector>

      <ol-style>
        <ol-style-stroke color="red" :width="2"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
        <ol-style-circle :radius="7">
          <ol-style-fill color="blue"></ol-style-fill>
        </ol-style-circle>
      </ol-style>
    </ol-vector-layer>

    <ol-vector-layer
      :updateWhileAnimating="true"
      :updateWhileInteracting="true"
      title="STAR"
      preview="https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/src/assets/star.png"
    >
      <ol-source-vector ref="vectorsource">
        <ol-animation-shake :duration="2000" :repeat="5">
          <ol-feature
            v-for="index in 20"
            :key="index"
            :properties="{ id: index }"
          >
            <ol-geom-point
              :coordinates="[
                getRandomInRange(24, 45, 3),
                getRandomInRange(35, 41, 3),
              ]"
            ></ol-geom-point>

            <ol-style>
              <ol-style-icon :src="starIcon" :scale="0.1"></ol-style-icon>
            </ol-style>
          </ol-feature>
        </ol-animation-shake>
      </ol-source-vector>
    </ol-vector-layer>

    <ol-animated-clusterlayer
      :animationDuration="500"
      :distance="40"
      title="CLUSTER"
      preview="https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/src/assets/cluster.png"
    >
      <ol-source-vector ref="vectorsource">
        <ol-feature v-for="index in 500" :key="index">
          <ol-geom-point
            :coordinates="[
              getRandomInRange(24, 45, 3),
              getRandomInRange(35, 41, 3),
            ]"
          ></ol-geom-point>
        </ol-feature>
      </ol-source-vector>

      <ol-style :overrideStyleFunction="overrideStyleFunction">
        <ol-style-stroke color="red" :width="2"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>

        <ol-style-circle :radius="20">
          <ol-style-stroke
            color="black"
            :width="15"
            :lineDash="[]"
            lineCap="butt"
          ></ol-style-stroke>
          <ol-style-fill color="black"></ol-style-fill>
        </ol-style-circle>

        <ol-style-text>
          <ol-style-fill color="white"></ol-style-fill>
        </ol-style-text>
      </ol-style>
    </ol-animated-clusterlayer>

    <ol-overlay
      :position="selectedCityPosition"
      v-if="selectedCityName != '' && !drawEnable"
      positioning="bottom-right"
    >
      <template v-slot="slotProps">
        <div class="overlay-content">
          {{ selectedCityName }} {{ slotProps }}
        </div>
      </template>
    </ol-overlay>

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature ref="animationPath">
          <ol-geom-line-string :coordinates="path"></ol-geom-line-string>
          <ol-style-flowline
            color="red"
            color2="yellow"
            :width="10"
            :width2="10"
            :arrow="1"
            arrowColor="red"
          />
        </ol-feature>
        <ol-animation-path
          v-if="animationPath"
          :path="animationPath.feature"
          :duration="4000"
          :repeat="10"
        >
          <ol-feature>
            <ol-geom-point :coordinates="path[0]"></ol-geom-point>
            <ol-style>
              <ol-style-circle :radius="10">
                <ol-style-fill color="blue"></ol-style-fill>
                <ol-style-stroke color="blue" :width="2"></ol-style-stroke>
              </ol-style-circle>
            </ol-style>
          </ol-feature>
        </ol-animation-path>
      </ol-source-vector>
    </ol-vector-layer>
    <ol-webglpoints-layer :styles="webglPointsStyle">
      <ol-source-webglpoints
        :format="geoJson"
        url="https://openlayers.org/en/latest/examples/data/geojson/world-cities.geojson"
      />
    </ol-webglpoints-layer>
  </ol-map>
</template>

<script>
import { ref, inject, onMounted } from "vue";

import markerIcon from "@/assets/marker.png";
import starIcon from "@/assets/star.png";
export default {
  setup() {
    const center = ref([34, 39.13]);
    const projection = ref("EPSG:4326");
    const zoom = ref(6);
    const rotation = ref(0);
    const format = inject("ol-format");

    const geoJson = new format.GeoJSON();
    const kml = new format.KML({ extractStyles: false });

    const selectConditions = inject("ol-selectconditions");

    const selectCondition = selectConditions.pointerMove;

    const selectedCityName = ref("");
    const selectedCityPosition = ref([]);

    const extent = inject("ol-extent");

    const Feature = inject("ol-feature");
    const Geom = inject("ol-geom");

    const contextMenuItems = ref([]);
    const vectorsource = ref(null);
    const view = ref(null);

    const drawEnable = ref(false);
    const drawType = ref("Point");

    const changeDrawType = (active, draw) => {
      drawEnable.value = active;
      drawType.value = draw;
    };

    contextMenuItems.value = [
      {
        text: "Center map here",
        classname: "some-style-class", // add some CSS rules
        callback: (val) => {
          view.value.setCenter(val.coordinate);
        }, // `center` is your callback function
      },
      {
        text: "Add a Marker",
        classname: "some-style-class", // you can add this icon with a CSS class
        // instead of `icon` property (see next line)
        icon: markerIcon, // this can be relative or absolute
        callback: (val) => {
          console.log(val);
          const feature = new Feature({
            geometry: new Geom.Point(val.coordinate),
          });
          vectorsource.value.source.addFeature(feature);
        },
      },
      "-", // this is a separator
    ];

    const featureSelected = (event) => {
      if (event.selected.length == 1) {
        selectedCityPosition.value = extent.getCenter(
          event.selected[0].getGeometry().extent_
        );
        selectedCityName.value = event.selected[0].values_.name;
      } else {
        selectedCityName.value = "";
      }
    };

    const overrideStyleFunction = (feature, style) => {
      const clusteredFeatures = feature.get("features");
      const size = clusteredFeatures.length;

      const color = size > 20 ? "192,0,0" : size > 8 ? "255,128,0" : "0,128,0";
      const radius = Math.max(8, Math.min(size, 20));
      const dash = (2 * Math.PI * radius) / 6;
      const calculatedDash = [0, dash, dash, dash, dash, dash, dash];

      style.getImage().getStroke().setLineDash(dash);
      style
        .getImage()
        .getStroke()
        .setColor("rgba(" + color + ",0.5)");
      style.getImage().getStroke().setLineDash(calculatedDash);
      style
        .getImage()
        .getFill()
        .setColor("rgba(" + color + ",1)");

      style.getImage().setRadius(radius);

      style.getText().setText(size.toString());
    };

    const selectInteactionFilter = (feature) => {
      return feature.values_.name != undefined;
    };

    const getRandomInRange = (from, to, fixed) => {
      return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    };

    const drawstart = (event) => {
      console.log(event);
    };

    const drawend = (event) => {
      console.log(event);
    };

    const modifystart = (event) => {
      console.log(event);
    };

    const modifyend = (event) => {
      console.log(event);
    };

    const videoStopped = (event) => {
      console.log(event);
    };

    const swipeControl = ref(null);
    const jawgLayer = ref(null);
    const osmLayer = ref(null);
    const layerList = ref([]);
    const path = ref([
      [25.6064453125, 44.73302734375001],
      [27.759765625, 44.75500000000001],
      [28.287109375, 43.32677734375001],
      [30.55029296875, 46.40294921875001],
      [31.69287109375, 43.04113281250001],
    ]);
    const animationPath = ref(null);

    onMounted(() => {
      layerList.value.push(jawgLayer.value.tileLayer);
      layerList.value.push(osmLayer.value.tileLayer);
      console.log(layerList.value);
      console.log(animationPath.value);
    });

    const zones = [
      {
        title: "Turkey",
        extent: [17.952, 46.241, 52.449, 31.222],
      },
      {
        title: "Cyprus",
        extent: [31.2836, 36.1623, 35.5957, 34.1823],
      },
      {
        title: "Brazil",
        extent: [-120.32, 22.76, 17.67, -47.52],
      },
    ];

    const webglPointsStyle = {
      symbol: {
        symbolType: "circle",
        size: [
          "interpolate",
          ["linear"],
          ["get", "population"],
          40000,
          8,
          2000000,
          28,
        ],
        color: "#ffed02",
        rotateWithView: false,
        offset: [0, 0],
        opacity: [
          "interpolate",
          ["linear"],
          ["get", "population"],
          40000,
          0.6,
          2000000,
          0.92,
        ],
      },
    };

    const heatmapWeight = function (feature) {
      // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
      // standards-violating <magnitude> tag in each Placemark.  We extract it from
      // the Placemark's name instead.
      const name = feature.get("name");
      const magnitude = parseFloat(name.substr(2));
      return magnitude - 5;
    };

    return {
      center,
      projection,
      zoom,
      rotation,
      geoJson,
      featureSelected,
      selectCondition,
      selectedCityName,
      selectedCityPosition,
      markerIcon,
      overrideStyleFunction,
      getRandomInRange,
      contextMenuItems,
      vectorsource,
      view,
      selectInteactionFilter,
      drawstart,
      drawend,
      modifystart,
      modifyend,
      videoStopped,
      drawEnable,
      drawType,
      layerList,
      jawgLayer,
      swipeControl,
      osmLayer,
      starIcon,
      changeDrawType,
      path,
      animationPath,
      zones,
      webglPointsStyle,
      heatmapWeight,
      kml,
    };
  },
};
</script>

<style>
.overlay-content {
  background: red !important;
  color: white;
  box-shadow: 0 5px 10px rgb(2 2 2 / 20%);
  padding: 10px 20px;
  font-size: 16px;
}
</style>
