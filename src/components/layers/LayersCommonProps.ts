import type { Extent } from "ol/extent";

export type LayersCommonProps = {
  className?: string;
  opacity?: number;
  visible?: boolean;
  extent?: Extent;
  zIndex?: number;
  minResolution?: number;
  maxResolution?: number;
  minZoom?: number;
  maxZoom?: number;
  title?: string;
  name?: string;
  preview?: string;
  baseLayer?: boolean;
  properties?: () => Record<string, unknown>;
};

export const layersCommonDefaultProps = {
  className: "ol-layer",
  opacity: 1,
  visible: true,
  properties: () => ({}),
};
