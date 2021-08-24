<template>
<ol-map ref="map" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:800px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-swipe-control ref="swipeControl" v-if="layerList.length > 0" :layerList="layerList" />

    <ol-layerswitcherimage-control />

    <ol-tile-layer ref="osmLayer" title="OSM">
        <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer ref="jawgLayer" title ="JAWG">
        <ol-source-xyz crossOrigin='anonymous' url="https://c.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token=87PWIbRaZAGNmYDjlYsLkeTVJpQeCfl2Y61mcHopxXqSdxXExoTLEv7dwqBwSWuJ" />
    </ol-tile-layer>

    <ol-control-bar>
        <ol-control-toggle html="<i class='fas fa-map-marker'></i>" className="edit" title="Point" :onToggle="(active)=>changeDrawType(active,'Point')" />
        <ol-control-toggle html="<i class='fas fa-draw-polygon'></i>" className="edit" title="Polygon" :onToggle="(active)=>changeDrawType(active,'Polygon')" />
        <ol-control-toggle html="<i class='fas fa-circle'></i>" className="edit" title="Circle" :onToggle="(active)=>changeDrawType(active,'Circle')" />
        <ol-control-toggle html="<i class='fas fa-grip-lines'></i>" className="edit" title="LineString" :onToggle="(active)=>changeDrawType(active,'LineString')" />
        <ol-control-videorecorder @stop="videoStopped">

        </ol-control-videorecorder>
        <ol-control-printdialog />
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
    <ol-zoomtoextent-control :extent="[23.906,42.812,46.934,34.597]" tipLabel="Fit to Turkey" />

    <ol-context-menu :items="contextMenuItems" />

    <ol-interaction-clusterselect @select="featureSelected" :pointRadius="20">
        <ol-style>
            <ol-style-stroke color="green" :width="5"></ol-style-stroke>
            <ol-style-fill color="rgba(255,255,255,0.5)"></ol-style-fill>
            <ol-style-icon :src="markerIcon" :scale="0.05"></ol-style-icon>
        </ol-style>
    </ol-interaction-clusterselect>

    <ol-interaction-select @select="featureSelected" :condition="selectCondition" :filter="selectInteactionFilter" v-if="!drawEnable">
        <ol-style>
            <ol-style-stroke color="green" :width="10"></ol-style-stroke>
            <ol-style-fill color="rgba(255,255,255,0.5)"></ol-style-fill>
            <ol-style-icon :src="markerIcon" :scale="0.05"></ol-style-icon>
        </ol-style>
    </ol-interaction-select>

    <ol-vector-layer title="AIRPORTS" preview="https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/src/assets/tr.png">
        <ol-source-vector ref="cities" url="https://raw.githubusercontent.com/alpers/Turkey-Maps-GeoJSON/master/tr-cities-airports.json" :format="geoJson" :projection="projection" >

            <ol-interaction-modify v-if="drawEnable" @modifyend="modifyend" @modifystart="modifystart">

            </ol-interaction-modify>

            <ol-interaction-draw v-if="drawEnable" :type="drawType" @drawend="drawend" @drawstart="drawstart">

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

    <ol-vector-layer :updateWhileAnimating="true" :updateWhileInteracting="true" title="STAR" preview="https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/src/assets/star.png">
        <ol-source-vector ref="vectorsource">

            <ol-animation-shake :duration="2000" :repeat="5">
                <ol-feature v-for="index in 20" :key="index">
                    <ol-geom-point :coordinates="[getRandomInRange(24,45,3),getRandomInRange(35,41,3)]"></ol-geom-point>

                    <ol-style>
                        <ol-style-icon :src="starIcon" :scale="0.1"></ol-style-icon>
                    </ol-style>
                </ol-feature>
            </ol-animation-shake>

        </ol-source-vector>

    </ol-vector-layer>

    <ol-animated-clusterlayer :animationDuration="500" :distance="40" title="CLUSTER" preview="https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/src/assets/cluster.png">

        <ol-source-vector ref="vectorsource">
            <ol-feature v-for="index in 500" :key="index">
                <ol-geom-point :coordinates="[getRandomInRange(24,45,3),getRandomInRange(35,41,3)]"></ol-geom-point>

            </ol-feature>
        </ol-source-vector>

        <ol-style :overrideStyleFunction="overrideStyleFunction">
            <ol-style-stroke color="red" :width="2"></ol-style-stroke>
            <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>

            <ol-style-circle :radius="20">
                <ol-style-stroke color="black" :width="15" :lineDash="[]" lineCap="butt"></ol-style-stroke>
                <ol-style-fill color="black"></ol-style-fill>
            </ol-style-circle>

            <ol-style-text>
                <ol-style-fill color="white"></ol-style-fill>
            </ol-style-text>
        </ol-style>

    </ol-animated-clusterlayer>

    <ol-overlay :position="selectedCityPosition" v-if="selectedCityName !='' && !drawEnable">
        <template v-slot="slotProps">
            <div class="overlay-content">
                {{selectedCityName}} {{slotProps}}
            </div>
        </template>
    </ol-overlay>

</ol-map>

</template>

<script>
import {
    ref,
    inject,
    onMounted
} from 'vue'

import markerIcon from '@/assets/marker.png'
import starIcon from '@/assets/star.png'
export default {
    setup() {
        const center = ref([34, 39.13])
        const projection = ref('EPSG:4326')
        const zoom = ref(6)
        const rotation = ref(0)

        const format = inject('ol-format');

        const geoJson = new format.GeoJSON();

        const selectConditions = inject('ol-selectconditions')

        const selectCondition = selectConditions.pointerMove;

        const selectedCityName = ref('')
        const selectedCityPosition = ref([])

        const extent = inject('ol-extent');

        const Feature = inject('ol-feature')
        const Geom = inject('ol-geom')

        const contextMenuItems = ref([])
        const vectorsource = ref(null)
        const view = ref(null);

        const drawEnable = ref(false)
        const drawType = ref("Point")


        const changeDrawType = (active, draw) => {
            drawEnable.value = active
            drawType.value = draw
        }

        contextMenuItems.value = [{
                text: 'Center map here',
                classname: 'some-style-class', // add some CSS rules
                callback: (val) => {
                    view.value.setCenter(val.coordinate)

                } // `center` is your callback function
            },
            {
                text: 'Add a Marker',
                classname: 'some-style-class', // you can add this icon with a CSS class
                // instead of `icon` property (see next line)
                icon: markerIcon, // this can be relative or absolute
                callback: (val) => {
                    console.log(val)
                    let feature = new Feature({
                        geometry: new Geom.Point(val.coordinate),
                    });
                    vectorsource.value.source.addFeature(feature)
                }
            },
            '-' // this is a separator
        ]

        const featureSelected = (event) => {

            if (event.selected.length == 1) {

                selectedCityPosition.value = extent.getCenter(event.selected[0].getGeometry().extent_)
                selectedCityName.value = event.selected[0].values_.name;
            } else {
                selectedCityName.value = '';
            }

        }

        const overrideStyleFunction = (feature, style) => {

            let clusteredFeatures = feature.get('features');
            let size = clusteredFeatures.length;

            let color = size > 20 ? "192,0,0" : size > 8 ? "255,128,0" : "0,128,0";
            var radius = Math.max(8, Math.min(size, 20));
            let dash = 2 * Math.PI * radius / 6;
            let calculatedDash = [0, dash, dash, dash, dash, dash, dash];

            style.getImage().getStroke().setLineDash(dash);
            style.getImage().getStroke().setColor("rgba(" + color + ",0.5)");
            style.getImage().getStroke().setLineDash(calculatedDash);
            style.getImage().getFill().setColor("rgba(" + color + ",1)");

            style.getImage().setRadius(radius)

            style.getText().setText(size.toString());

        }

        const selectInteactionFilter = (feature) => {
            return feature.values_.name != undefined;
        };

        const getRandomInRange = (from, to, fixed) => {
            return (Math.random() * (to - from) + from).toFixed(fixed) * 1;

        }

        const drawstart = (event) => {
            console.log(event)

        }

        const drawend = (event) => {
            console.log(event)
        }

        const modifystart = (event) => {
            console.log(event)

        }

        const modifyend = (event) => {
            console.log(event)
        }

        const swipeControl = ref(null)
        const jawgLayer = ref(null)
        const osmLayer = ref(null)
        const layerList = ref([])
        onMounted(() => {

            layerList.value.push(jawgLayer.value.tileLayer);
            layerList.value.push(osmLayer.value.tileLayer);
            console.log(layerList.value)

        });

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
            drawEnable,
            drawType,
            layerList,
            jawgLayer,
            swipeControl,
            osmLayer,
            starIcon,
            changeDrawType,

        }
    },
}
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