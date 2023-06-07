import WMTSSource from "ol/source/WMTS";
import TileGridWMTS from "ol/tilegrid/WMTS";

export class Tianditu extends WMTSSource {
  // @ts-ignore
  // eslint-disable-next-line camelcase
  constructor(opt_options) {
    // @ts-ignore
    Tianditu.layerLabelMap = {
      vec: "cva",
      ter: "cta",
      img: "cia",
    };
    // @ts-ignore
    Tianditu.layerZoomMap = {
      vec: 18,
      ter: 14,
      img: 18,
    };
    // eslint-disable-next-line camelcase
    const options = opt_options || {};

    options.layerType = options.layerType || "vec";
    options.layerType = options.isLabel
      ? // @ts-ignore
        Tianditu.layerLabelMap[options.layerType]
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
    options.url = options.url
      .replace("{layer}", options.layerType)
      .replace("{proj}", options.matrixSet);
    const tileGrid =
      options.tileGrid ||
      Tianditu.getTileGrid(options.projection || "EPSG:3857");
    const crossOrigin =
      options.crossOrigin !== undefined ? options.crossOrigin : "anonymous";
    const superOptions = {
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
      // @ts-ignore
      maxZoom: Tianditu.layerZoomMap[options.layerType],
      reprojectionErrorThreshold: options.reprojectionErrorThreshold,
      url: options.url,
      urls: options.urls,
      projection: options.projection || "EPSG:3857",
      wrapX: options.wrapX,
    };

    if (options.tileProxy) {
      // @ts-ignore
      // eslint-disable-next-line no-use-before-define
      superOptions.tileLoadFunction = tileLoadFunction;
    }
    super(superOptions);
    if (options.tileProxy) {
      // @ts-ignore
      this.tileProxy = options.tileProxy;
    }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const me = this;
    // @ts-ignore
    function tileLoadFunction(imageTile, src) {
      // @ts-ignore
      imageTile.getImage().src = me.tileProxy + encodeURIComponent(src);
    }
  }

  // @ts-ignore
  static getTileGrid(projection) {
    if (projection === "EPSG:4326" || projection === "EPSG:4490") {
      return Tianditu.default4326TileGrid();
    }
    return Tianditu.default3857TileGrid();
  }

  static default4326TileGrid() {
    // eslint-disable-next-line camelcase
    const tdt_WGS84_resolutions = [];
    const matrixIds = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 19; i++) {
      // eslint-disable-next-line camelcase
      tdt_WGS84_resolutions.push((0.703125 * 2) / 2 ** i);
      matrixIds.push(i);
    }
    const tileGird = new TileGridWMTS({
      extent: [-180, -90, 180, 90],
      // eslint-disable-next-line camelcase
      resolutions: tdt_WGS84_resolutions,
      origin: [-180, 90],
      // @ts-ignore
      matrixIds,
      minZoom: 1,
    });
    return tileGird;
  }

  static default3857TileGrid() {
    // eslint-disable-next-line camelcase
    const tdt_Mercator_resolutions = [];
    const matrixIds = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 19; i++) {
      // eslint-disable-next-line camelcase,no-loss-of-precision,@typescript-eslint/no-loss-of-precision
      tdt_Mercator_resolutions.push((78271.5169640203125 * 2) / 2 ** i);
      matrixIds.push(i);
    }
    const tileGird = new TileGridWMTS({
      extent: [
        -20037508.3427892, -20037508.3427892, 20037508.3427892,
        20037508.3427892,
      ],
      // eslint-disable-next-line camelcase
      resolutions: tdt_Mercator_resolutions,
      // @ts-ignore
      matrixIds,
      origin: [-20037508.3427892, 20037508.3427892],
      minZoom: 1,
    });
    return tileGird;
  }
}
