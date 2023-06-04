import { inject, watch, onMounted, type Ref } from "vue";
import type { Options } from "ol/proj/Projection";
import Projection from "ol/proj/Projection";
import type { AnimationOptions, FitOptions } from "ol/View";
import View from "ol/View";
import type Map from "ol/Map";
import type { Coordinate } from "ol/coordinate";
import type { Extent } from "ol/extent";
import type { Size } from "ol/size";
import type { Pixel } from "ol/pixel";
import type BaseEvent from "ol/events/Event";
import type { SimpleGeometry } from "ol/geom";

export default function useView(
  properties: Record<string, unknown> & {
    projection: string | Options;
  },
  emit: (
    ev:
      | "centerChanged"
      | "zoomChanged"
      | "resolutionChanged"
      | "rotationChanged",
    ...args: any[]
  ) => void
) {
  const map = inject<Ref<Map>>("map");

  const createProp = () => {
    return {
      ...properties,
      projection:
        typeof properties.projection === "string"
          ? properties.projection
          : new Projection({
              ...properties.projection,
            }),
    };
  };
  const view = new View(createProp());

  watch(properties, () => {
    const pr = createProp();
    view.setProperties(pr);
    view.applyOptions_(pr);
  });

  const adjustCenter = (deltaCoordinates: Coordinate) =>
    view.adjustCenter(deltaCoordinates);
  const adjustResolution = (ratio: number, optAnchor?: Coordinate) =>
    view.adjustResolution(ratio, optAnchor);
  const adjustRotation = (delta: number, optAnchor?: Coordinate) =>
    view.adjustRotation(delta, optAnchor);
  const adjustZoom = (delta: number, optAnchor?: Coordinate) =>
    view.adjustZoom(delta, optAnchor);
  const animate = (...args: (AnimationOptions | ((arg0: boolean) => void))[]) =>
    view.animate(...args);
  const beginInteraction = () => view.beginInteraction();
  const calculateExtent = (optSize?: Size | undefined): Extent =>
    view.calculateExtent(optSize);
  const cancelAnimations = () => view.cancelAnimations();
  const centerOn = (coordinate: Coordinate, size: Size, position: Pixel) =>
    view.centerOn(coordinate, size, position);
  const changed = () => view.changed();
  const dispatchEvent = (event: string | BaseEvent): boolean | undefined =>
    view.dispatchEvent(event);
  const endInteraction = (
    optDuration?: number | undefined,
    optResolutionDirection?: number | undefined,
    optAnchor?: Coordinate | undefined
  ) => view.endInteraction(optDuration, optResolutionDirection, optAnchor);
  const fit = (
    geometryOrExtent: Extent | SimpleGeometry,
    options?: FitOptions | undefined
  ) => view.fit(geometryOrExtent, options);
  const get = (key: string): any => view.get(key);
  const getAnimating = (): boolean => view.getAnimating();
  const getCenter = (): Coordinate | undefined => view.getCenter();
  const getInteracting = (): boolean => view.getInteracting();
  const getKeys = (): string[] => view.getKeys();
  const getMaxResolution = (): number => view.getMaxResolution();
  const getMaxZoom = (): number => view.getMaxZoom();
  const getMinResolution = (): number => view.getMinResolution();
  const getMinZoom = (): number => view.getMinZoom();
  const getProjection = (): Projection => view.getProjection();
  const getProperties = () => view.getProperties();
  const getResolution = () => view.getResolution();
  const getResolutionForExtent = (extent: Extent, size?: Size | undefined) =>
    view.getResolutionForExtent(extent, size);
  const getResolutionForZoom = (zoom: number): number =>
    view.getResolutionForZoom(zoom);
  const getResolutions = (): number[] | undefined => view.getResolutions();
  const getRevision = (): number => view.getRevision();
  const getRotation = (): number => view.getRotation();
  const getZoom = (): number | undefined => view.getZoom();
  const getZoomForResolution = (resolution: number): number | undefined =>
    view.getZoomForResolution(resolution);

  const setCenter = (center: Coordinate | undefined) => view.setCenter(center);
  const setConstrainResolution = (enabled: boolean) =>
    view.setConstrainResolution(enabled);
  const setMaxZoom = (zoom: number) => view.setMaxZoom(zoom);
  const setMinZoom = (zoom: number) => view.setMinZoom(zoom);
  const setResolution = (resolution: number | undefined) =>
    view.setResolution(resolution);
  const setRotation = (rotation: number) => view.setRotation(rotation);
  const setZoom = (zoom: number) => view.setZoom(zoom);

  onMounted(() => {
    map?.value?.setView(view);
  });

  view.on("change:center", () => {
    emit("centerChanged", getCenter());
    emit("zoomChanged", getZoom());
  });

  view.on("change:resolution", () =>
    emit("resolutionChanged", getResolution())
  );

  view.on("change:rotation", () => emit("rotationChanged", getRotation()));

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
    setZoom,
  };
}
