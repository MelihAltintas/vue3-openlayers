<template>
  <div v-if="false"></div>
</template>

<script>
import WMTSSource from "ol/source/WMTS";
import TileGridWMTS from "ol/tilegrid/WMTS";
import { inject, watch, onMounted, onUnmounted, computed } from "vue";
import usePropsAsObjectProperties from "../../composables/usePropsAsObjectProperties";

/**
 * @class ol.source.Tianditu
 * @category  ThirdPartyMap
 * @classdesc 天地图图层源。
 * @param {Object} opt_options - 参数。
 * @param {string} opt_options.url - 服务地址。<br>
 * @param {string} opt_options.tk - 天地图服务密钥。详见{@link http://lbs.tianditu.gov.cn/server/MapService.html}
 * @param {string} opt_options.layerType - 图层类型。(vec:矢量图层，img:影像图层，ter:地形图层)<br>
 * @param {string} opt_options.attributions - 版权描述信息。<br>
 * @param {number} opt_options.cacheSize - 缓冲大小。<br>
 * @param {function} opt_options.tileLoadFunction - 切片加载完成后执行函数。<br>
 * @param {string} opt_options.style - 图层风格。<br>
 * @param {string} opt_options.format - 格式。<br>
 * @param {boolean} opt_options.isLabel - 是否是标注图层<br>
 * @param {boolean} opt_options.opaque - 是否透明。<br>
 * @param {string} opt_options.tileProxy - 代理地址
 * @extends {ol.source.WMTS}
 */
export class Tianditu extends WMTSSource {
  constructor(opt_options) {
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
    var options = opt_options || {};
    // var attributions = options.attributions || new ol.Attribution({
    //     html: "Map Data <a href='http://www.tianditu.com' target='_blank'><img style='background-color:transparent;bottom:2px;opacity:1;' " +
    //         "src='http://api.tianditu.com/img/map/logo.png' width='53px' height='22px' opacity='0'></a> with " +
    //         "<span>© <a href='http://iclient.supermap.io' target='_blank'>SuperMap iClient</a></span>"
    // });
    options.layerType = options.layerType || "vec";
    options.layerType = options.isLabel
      ? Tianditu.layerLabelMap[options.layerType]
      : options.layerType;
    options.matrixSet =
      options.projection === "EPSG:4326" || options.projection === "EPSG:4490"
        ? "c"
        : "w";
    // options.tk = options.tk || '';
    if (!options.url && !options.urls) {
      options.url = "https://t{0-7}.tianditu.gov.cn/{layer}_{proj}/wmts?";
      // options.url = 'http://t{0-7}.tianditu.com/{layer}_{proj}/wmts?';
    }
    if (options.tk) {
      options.url = `${options.url}tk=${options.tk}`;
    }
    options.url = options.url
      .replace("{layer}", options.layerType)
      .replace("{proj}", options.matrixSet);
    var tileGrid =
      options.tileGrid ||
      Tianditu.getTileGrid(options.projection || "EPSG:3857");

    var crossOrigin =
      options.crossOrigin !== undefined ? options.crossOrigin : "anonymous";

    var superOptions = {
      version: options.version || "1.0.0",
      format: options.format || "tiles",
      dimensions: options.dimensions || {},
      layer: options.layerType,
      matrixSet: options.matrixSet,
      tileGrid: tileGrid,
      style: options.style || "default",
      // attributions: attributions,
      cacheSize: options.cacheSize,
      crossOrigin: crossOrigin,
      opaque: options.opaque === undefined ? true : options.opaque,
      maxZoom: Tianditu.layerZoomMap[options.layerType],
      reprojectionErrorThreshold: options.reprojectionErrorThreshold,
      url: options.url,
      urls: options.urls,
      projection: options.projection || "EPSG:3857",
      wrapX: options.wrapX,
    };
    console.log(superOptions);
    //需要代理时走自定义 tileLoadFunction，否则走默认的tileLoadFunction
    // if (options.tileProxy) {
    //     superOptions.tileLoadFunction = tileLoadFunction;
    // }
    super(superOptions);

    if (options.tileProxy) {
      this.tileProxy = options.tileProxy;
    }
    //需要代理时，走以下代码
    var me = this;

    function tileLoadFunction(imageTile, src) {
      //支持代理
      imageTile.getImage().src = me.tileProxy + encodeURIComponent(src);
    }
  }

  /**
   * @function ol.source.Tianditu.getTileGrid
   * @description 获取瓦片网格。
   * @param {Object} projection - 投影参考对象。
   * @returns {ol.tilegrid.WMTS} 返回瓦片网格对象
   */
  static getTileGrid(projection) {
    if (projection === "EPSG:4326" || projection === "EPSG:4490") {
      return Tianditu.default4326TileGrid();
    }
    return Tianditu.default3857TileGrid();
  }

  /**
   * @function ol.source.Tianditu.default4326TileGrid
   * @description 获取默认 4326 网格瓦片。
   * @returns {ol.tilegrid.WMTS} 返回默认 4326 网格瓦片对象。
   */
  static default4326TileGrid() {
    var tdt_WGS84_resolutions = [];
    var matrixIds = [];
    for (var i = 1; i < 19; i++) {
      tdt_WGS84_resolutions.push((0.703125 * 2) / Math.pow(2, i));
      matrixIds.push(i);
    }
    var tileGird = new TileGridWMTS({
      extent: [-180, -90, 180, 90],
      resolutions: tdt_WGS84_resolutions,
      origin: [-180, 90],
      matrixIds: matrixIds,
      minZoom: 1,
    });
    return tileGird;
  }

  /**
   * @function ol.source.Tianditu.default3857TileGrid
   * @description 获取默认 3857 网格瓦片。
   * @returns {ol.tilegrid.WMTS} 返回默认 3857 网格瓦片对象。
   */
  static default3857TileGrid() {
    var tdt_Mercator_resolutions = [];
    var matrixIds = [];
    for (var i = 1; i < 19; i++) {
      tdt_Mercator_resolutions.push((78271.5169640203125 * 2) / Math.pow(2, i));
      matrixIds.push(i);
    }
    var tileGird = new TileGridWMTS({
      extent: [
        -20037508.3427892, -20037508.3427892, 20037508.3427892,
        20037508.3427892,
      ],
      resolutions: tdt_Mercator_resolutions,
      matrixIds: matrixIds,
      origin: [-20037508.3427892, 20037508.3427892],
      minZoom: 1,
    });
    return tileGird;
  }
}

export default {
  name: "ol-source-tianditu",
  setup(props) {
    const layer = inject("tileLayer");

    const { properties } = usePropsAsObjectProperties(props);

    let source = computed(() => {
      return new Tianditu(properties);
    });

    watch(source, () => {
      layer.value.setSource(source.value);
    });

    watch(layer, () => {
      layer.value.setSource(source.value);
    });

    onMounted(() => {
      layer.value.setSource(source.value);
    });

    onUnmounted(() => {
      layer.value.setSource(null);
    });

    return {
      layer,
      source,
    };
  },
  props: {
    layerType: {
      type: String,
      default: "img", // 图层类型。(vec:矢量图层，img:影像图层，ter:地形图层)
    },
    tk: {
      type: String,
    },
    isLabel: {
      type: Boolean,
      default: false,
    },
    cacheSize: {
      type: Number,
    },
    crossOrigin: {
      type: String,
    },
    projection: {
      Type: String,
      default: "EPSG:3857",
    },
    hidpi: {
      type: Boolean,
      default: false,
    },
    requestEncoding: {
      type: String,
      default: "KVP",
    },
    format: {
      type: String,
    },
    version: {
      type: String,
      default: "1.0.0",
    },
    culture: {
      type: String,
      default: "en-us",
    },
    matrixSet: {
      type: String,
    },
    dimensions: {
      type: Object,
      default: () => {},
    },
    imageSmoothing: {
      type: Boolean,
      default: true,
    },
    maxZoom: {
      type: Number,
      default: 21,
    },
    reprojectionErrorThreshold: {
      type: Number,
    },
    tileLoadFunction: {
      type: Function,
      default: (imageTile, src) => (imageTile.getImage().src = src),
    },
    wrapX: {
      type: Boolean,
      default: true,
    },
    transition: {
      type: Number,
    },
  },
};
</script>

<style lang=""></style>
