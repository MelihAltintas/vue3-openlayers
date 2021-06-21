import {
    toRefs,
    inject,
    watchEffect
} from 'vue'
import Projection from 'ol/proj/Projection';
import View from 'ol/View'

export default function useView(props, emit) {


    const map = inject('map');

    const {
        rotation,
        zoom,
        center,
        constrainRotation,
        enableRotation,
        extent,
        constrainOnlyCenter,
        smoothExtentConstraint,
        maxResolution,
        minResolution,
        maxZoom,
        minZoom,
        multiWorld,
        constrainResolution,
        smoothResolutionConstraint,
        showFullExtent,
        projection,
        resolution,
        resolutions,
        zoomFactor,
        padding
    } = toRefs(props);


    const view = new View({
        center: center.value,
        constrainRotation: constrainRotation.value,
        enableRotation: enableRotation.value,
        extent: extent.value,
        constrainOnlyCenter: constrainOnlyCenter.value,
        smoothExtentConstraint: smoothExtentConstraint.value,
        maxResolution: maxResolution.value,
        minResolution: minResolution.value,
        maxZoom: maxZoom.value,
        minZoom: minZoom.value,
        multiWorld: multiWorld.value,
        constrainResolution: constrainResolution.value,
        smoothResolutionConstraint: smoothResolutionConstraint.value,
        showFullExtent: showFullExtent.value,
        projection: typeof projection.value == "string" ? projection.value : new Projection({...projection.value}),
        resolution: resolution.value,
        resolutions: resolutions.value,
        rotation: rotation.value,
        zoom: zoom.value,
        zoomFactor: zoomFactor.value,
        padding: padding.value
    });

    map.setView(view);



    const adjustCenter = (deltaCoordinates) => view.adjustCenter(deltaCoordinates);
    const adjustResolution = (ratio, opt_anchor) => view.adjustResolution(ratio, opt_anchor);
    const adjustRotation = (delta, opt_anchor) => view.adjustRotation(delta, opt_anchor);
    const adjustZoom = (delta, opt_anchor) => view.adjustZoom(delta, opt_anchor);
    const animate = (var_args) => view.animate(var_args);
    const beginInteraction = () => view.beginInteraction();
    const calculateExtent = (opt_size) => view.calculateExtent(opt_size);
    const cancelAnimations = () => view.cancelAnimations();
    const centerOn = (coordinate, size, position) => view.centerOn(coordinate, size, position);
    const changed = () => view.changed();
    const dispatchEvent = (event) => view.dispatchEvent(event);
    const endInteraction = (opt_duration, opt_resolutionDirection, opt_anchor) => view.endInteraction(opt_duration, opt_resolutionDirection, opt_anchor);
    const fit = (geometryOrExtent, opt_options) => view.fit(geometryOrExtent, opt_options);
    const get = (key) => view.get(key);
    const getAnimating = () => view.getAnimating();
    const getCenter = () => view.getCenter();
    const getInteracting = () => view.getInteracting();
    const getKeys = () => view.getKeys();
    const getMaxResolution = () => view.getMaxResolution();
    const getMaxZoom = () => view.getMaxZoom();
    const getMinResolution = () => view.getMinResolution();
    const getMinZoom = () => view.getMinZoom();
    const getProjection = () => view.getProjection();
    const getProperties = () => view.getProperties();
    const getResolution = () => view.getResolution();
    const getResolutionForExtent = (extent, opt_size) => view.getResolutionForExtent(extent, opt_size);
    const getResolutionForZoom = (zoom) => view.getResolutionForZoom(zoom);
    const getResolutions = () => view.getResolutions();
    const getRevision = () => view.getRevision();
    const getRotation = () => view.getRotation();
    const getZoom = () => view.getZoom();
    const getZoomForResolution = (resolution) => view.getZoomForResolution(resolution);

    const setCenter = (center) => view.setCenter(center);
    const setConstrainResolution = (enabled) => view.setConstrainResolution(enabled);
    const setMaxZoom = (zoom) => view.setMaxZoom(zoom);
    const setMinZoom = (zoom) => view.setMinZoom(zoom);
    const setResolution = (resolution) => view.setResolution(resolution);
    const setRotation = (rotation) => view.setRotation(rotation);
    const setZoom = (zoom) => view.setZoom(zoom);


    view.on('change:center', () => {
        emit('centerChanged', getCenter())
        emit('zoomChanged', getZoom())
    });

    view.on('change:resolution', () => emit('resolutionChanged', getResolution()));

    view.on('change:rotation', () => emit('rotationChanged', getRotation()));


    watchEffect(async () => {
        setRotation(rotation.value)
    });
    watchEffect(async () => {
        setCenter(center.value)
    });
    watchEffect(async () => {
        setMaxZoom(maxZoom.value)
    });
    watchEffect(async () => {
        setMinZoom(minZoom.value)
    });
    watchEffect(async () => {
        setResolution(resolution.value)
    });
    watchEffect(async () => {       
        setZoom(zoom.value)
   });
   
    return {
        view,

        adjustCenter,
        adjustResolution,
        adjustRotation,
        adjustZoom,
        animate,
        beginInteraction,
        calculateExtent,
        cancelAnimations,
        centerOn,
        changed,
        dispatchEvent,
        endInteraction,
        fit,
        get,
        getAnimating,
        getCenter,
        getInteracting,
        getKeys,
        getMaxResolution,
        getMaxZoom,
        getMinResolution,
        getMinZoom,
        getProjection,
        getProperties,
        getResolution,
        getResolutionForExtent,
        getResolutionForZoom,
        getResolutions,
        getRevision,
        getRotation,
        getZoom,
        getZoomForResolution,

        setCenter,
        setConstrainResolution,
        setMaxZoom,
        setMinZoom,
        setResolution,
        setRotation,
        setZoom
    }

}