import {
    onMounted,

    toRefs,
    computed
} from 'vue'

import Map from "ol/Map";
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ';
import {FullScreen,Zoom,ZoomToExtent,ZoomSlider,ScaleLine,Rotate,OverviewMap,MousePosition  ,Attribution } from 'ol/control';
import 'ol/ol.css'

export default function useMap(mapReference, props) {

    const map = new Map({});

    const {
        dataProjection,
        controlFullScreen,
        controlZoom,
        controlZoomToExtent,
        controlZoomSlider,
        controlScaleLine,
        controlRotate,
        controlOverviewMap,
        controlMousePosition,
        controlAttribution,
        loadTilesWhileAnimating,
        loadTilesWhileInteracting,
        moveTolerance,
        pixelRatio
    } = toRefs(props);

    console.log("controls", controlFullScreen.value);
    console.log("controls", dataProjection.value);
    console.log("controls", loadTilesWhileAnimating.value);
    console.log("controls", loadTilesWhileInteracting.value);
    console.log("controls", moveTolerance.value);
    console.log("controls", pixelRatio.value);


    const initializeMap = () => {

        let controls = []

        if(controlFullScreen.value){
            console.log("Full Screen enabled")
            controls.push(new FullScreen())
        }

        
        if(controlZoom.value){
            console.log("zoom enabled")
            controls.push(new Zoom())
        }
        if(controlZoomToExtent.value){
            console.log("zoom to extent enabled")
            controls.push(new ZoomToExtent())
        }
        if(controlZoomSlider.value){
            console.log("zoomslider enabled")
            controls.push(new ZoomSlider())
        }

        if(controlScaleLine.value){
            console.log("scaleLine enabled")
            controls.push(new ScaleLine())
        }

        
        if(controlRotate.value){
            console.log("rotate enabled")
            controls.push(new Rotate())
        }

        if(controlOverviewMap.value){
            console.log("OverviewMap enabled")
            controls.push(new OverviewMap())
        }
        if(controlMousePosition.value){
            console.log("MousePosition enabled")
            controls.push(new MousePosition())
        }

        if(controlAttribution.value){
            console.log("controlAttribution enabled")
            controls.push(new Attribution())
        }
    
        map = new Map({
            target: mapReference.value,
            controls,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    })
                })
            ],
            view: new View({
                zoom: 0,
                center: [0, 0],
                constrainResolution: true,
            }),
        })

    
    
    }


    onMounted(initializeMap);

    return {
        map:computed(()=>map)
    }

}