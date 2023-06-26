import type { ImageTile } from "ol";
import type { ProjectionLike } from "ol/proj";
import WMTSSource, { type Options as WMTSOptions } from "ol/source/WMTS";
import TileGridWMTS from "ol/tilegrid/WMTS";

export type Options = WMTSOptions & {
  tileProxy?: string;
  layerType?: string;
  tk?: string;
  isLabel?: boolean;
  maxZoom?: number;
  opaque?: boolean;
};
export class Tianditu extends WMTSSource {
  static layerLabelMap: Record<string, string> = {};
  static layerZoomMap: Record<string, number> = {};
  static tileProxy: string | undefined;

  constructor(opts: Options) {
    Tianditu.layerLabelMap = {
      vec: "cva",
      ter: "cta",
      img: "cia",
    };
    Tianditu.layerZoomMap = {
      vec: 18,
      ter: 14,
      img: 18,
    };
    const options = { ...opts } || {};

    options.layerType = options.layerType || "vec";
    options.layerType = options.isLabel
      ? Tianditu.layerLabelMap[options.layerType]
      : options.layerType;
    options.matrixSet =
      options.projection === "EPSG:4326" || options.projection === "EPSG:4490"
        ? "c"
        : "w";
    if (!options.url && !options.urls) {
      options.url = "https://t{0-7}.tianditu.gov.cn/{layer}_{proj}/wmts?";
    }
    if (options.tk) {
      options.url = `${options.url}tk=${options.tk}`;
    }
    options.url = (options.url || "")
      .replace("{layer}", options.layerType)
      .replace("{proj}", options.matrixSet);
    const tileGrid =
      options.tileGrid || Tianditu.getTileGrid(options.projection);
    const crossOrigin =
      options.crossOrigin !== undefined ? options.crossOrigin : "anonymous";
    const superOptions: Options = {
      version: options.version || "1.0.0",
      format: options.format || "tiles",
      dimensions: options.dimensions || {},
      layer: options.layerType,
      matrixSet: options.matrixSet,
      tileGrid,
      style: options.style || "default",
      cacheSize: options.cacheSize,
      crossOrigin,
      opaque: options.opaque === undefined ? true : options.opaque,
      maxZoom: Tianditu.layerZoomMap[options.layerType],
      reprojectionErrorThreshold: options.reprojectionErrorThreshold,
      url: options.url,
      urls: options.urls,
      projection: options.projection || "EPSG:3857",
      wrapX: options.wrapX,
    };

    if (options.tileProxy) {
      Tianditu.tileProxy = options.tileProxy;
      superOptions.tileLoadFunction = (imageTile, src) => {
        ((imageTile as ImageTile).getImage() as HTMLImageElement).src =
          Tianditu.tileProxy + encodeURIComponent(src);
      };
    }
    super(superOptions);
  }

  static getTileGrid(projection: ProjectionLike) {
    if (projection === "EPSG:4326" || projection === "EPSG:4490") {
      return Tianditu.default4326TileGrid();
    }
    return Tianditu.default3857TileGrid();
  }

  static default4326TileGrid() {
    const tdt_WGS84_resolutions = [];
    const matrixIds: string[] = [];
    for (let i = 1; i < 19; i++) {
      tdt_WGS84_resolutions.push((0.703125 * 2) / 2 ** i);
      matrixIds.push(i.toString());
    }
    const tileGird = new TileGridWMTS({
      extent: [-180, -90, 180, 90],
      resolutions: tdt_WGS84_resolutions,
      origin: [-180, 90],
      matrixIds,
    });
    return tileGird;
  }

  static default3857TileGrid() {
    const tdt_Mercator_resolutions = [];
    const matrixIds: string[] = [];
    for (let i = 1; i < 19; i++) {
      // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
      tdt_Mercator_resolutions.push((78271.5169640203125 * 2) / 2 ** i);
      matrixIds.push(i.toString());
    }
    const tileGird = new TileGridWMTS({
      extent: [
        -20037508.3427892, -20037508.3427892, 20037508.3427892,
        20037508.3427892,
      ],
      resolutions: tdt_Mercator_resolutions,
      matrixIds,
      origin: [-20037508.3427892, 20037508.3427892],
    });
    return tileGird;
  }
}
