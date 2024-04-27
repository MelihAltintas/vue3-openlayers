import { defineConfig, UserConfig } from "vitepress";

// https://vitepress.vuejs.org/reference/site-config
export const config: UserConfig = {
  // https://MelihAltintas.github.com/vue3-openlayers
  // base: '/vue3-openlayers/',
  title: "vue3-openlayers",
  description: "OpenLayers Wrapper for Vue3",
  lastUpdated: true,
  sitemap: {
    hostname: "https://vue3openlayers.netlify.app",
    lastmodDateOnly: false,
  },
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    editLink: {
      pattern:
        "https://github.com/MelihAltintas/vue3-openlayers/edit/main/docs/:path",
    },
    footer: {
      message:
        'Released under the <a href="https://github.com/MelihAltintas/vue3-openlayers/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2023-present <a href="https://github.com/MelihAltintas/vue3-openlayers">MelihAltintas</a>',
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/get-started" },
      { text: "Demo", link: "/demo" },
      { text: "Playground", link: "/playground" },
    ],
    sidebar: [
      {
        text: "Get Started",
        link: "/get-started",
      },
      {
        text: "Demo",
        link: "/demo",
      },
      {
        text: "Playground",
        link: "/playground",
      },
      {
        text: "Releases",
        link: "https://github.com/MelihAltintas/vue3-openlayers/releases",
      },
      {
        text: "Plugins",
        items: [
          {
            text: "Map",
            collapsed: true,
            items: [
              {
                text: "ol-map",
                link: "/componentsguide/map/",
              },
              {
                text: "ol-view",
                link: "/componentsguide/view/",
              },
              {
                text: "ol-overlay",
                link: "/componentsguide/overlay/",
              },
              {
                text: "ol-geolocation",
                link: "/componentsguide/geolocation/",
              },
              {
                text: "ol-projection-register",
                link: "/componentsguide/projection/",
              },
              {
                text: "ol-feature",
                link: "/componentsguide/feature/",
              },
            ],
          },
          {
            text: "Layers",
            collapsed: true,
            items: [
              {
                text: "ol-layer-group",
                link: "/componentsguide/layers/group/",
              },
              {
                text: "ol-animated-clusterlayer",
                link: "/componentsguide/layers/animatedclusterlayer/",
              },
              {
                text: "ol-heatmap-layer",
                link: "/componentsguide/layers/heatmaplayer/",
              },
              {
                text: "ol-image-layer",
                link: "/componentsguide/layers/imagelayer/",
              },
              {
                text: "ol-tile-layer",
                link: "/componentsguide/layers/tilelayer/",
              },
              {
                text: "ol-vector-image-layer",
                link: "/componentsguide/layers/vectorimagelayer/",
              },
              {
                text: "ol-vector-layer",
                link: "/componentsguide/layers/vectorlayer/",
              },
              {
                text: "ol-vector-tile-layer",
                link: "/componentsguide/layers/vectortilelayer/",
              },
              {
                text: "ol-webgl-vector-layer",
                link: "/componentsguide/layers/webglvectorlayer/",
              },
              {
                text: "ol-webgl-tile-layer",
                link: "/componentsguide/layers/webgltilelayer/",
              },
            ],
          },
          {
            text: "Sources",
            collapsed: true,
            items: [
              {
                text: "ol-source-bingmaps",
                link: "/componentsguide/sources/bing/",
              },
              {
                text: "ol-source-cluster",
                link: "/componentsguide/sources/cluster/",
              },
              {
                text: "ol-source-geo-tiff",
                link: "/componentsguide/sources/geotiff/",
              },
              {
                text: "ol-source-image-static",
                link: "/componentsguide/sources/imagestatic/",
              },
              {
                text: "ol-source-image-wms",
                link: "/componentsguide/sources/imagewms/",
              },
              {
                text: "ol-source-osm",
                link: "/componentsguide/sources/osm/",
              },
              {
                text: "ol-source-stadia-maps",
                link: "/componentsguide/sources/stadiamaps/",
              },
              {
                text: "ol-source-tianditu",
                link: "/componentsguide/sources/tianditu/",
              },
              {
                text: "ol-source-tile-arcgis-rest",
                link: "/componentsguide/sources/arcgisrest/",
              },
              {
                text: "ol-source-tile-debug",
                link: "/componentsguide/sources/tiledebug/",
              },
              {
                text: "ol-source-tile-json",
                link: "/componentsguide/sources/tilejson/",
              },
              {
                text: "ol-source-tile-wms",
                link: "/componentsguide/sources/tilewms/",
              },
              {
                text: "ol-source-vector",
                link: "/componentsguide/sources/vector/",
              },
              {
                text: "ol-source-vector-tile",
                link: "/componentsguide/sources/vectortile/",
              },
              {
                text: "ol-source-wmts",
                link: "/componentsguide/sources/wmts/",
              },
              {
                text: "ol-source-xyz",
                link: "/componentsguide/sources/xyz/",
              },
            ],
          },
          {
            text: "MapControls",
            collapsed: true,
            items: [
              {
                text: "ol-control-bar",
                link: "/componentsguide/mapcontrols/controlbar/",
              },
              {
                text: "ol-attribution-control",
                link: "/componentsguide/mapcontrols/attribution/",
              },
              {
                text: "ol-context-menu-control",
                link: "/componentsguide/mapcontrols/contextmenu/",
              },
              {
                text: "ol-fullscreen-control",
                link: "/componentsguide/mapcontrols/fullscreen/",
              },
              {
                text: "ol-layerswitcher-control",
                link: "/componentsguide/mapcontrols/layerswitcher/",
              },
              {
                text: "ol-layerswitcherimage-control",
                link: "/componentsguide/mapcontrols/layerswitcherimage/",
              },
              {
                text: "ol-mouseposition-control",
                link: "/componentsguide/mapcontrols/mouseposition/",
              },
              {
                text: "ol-overviewmap-control",
                link: "/componentsguide/mapcontrols/overviewmap/",
              },
              {
                text: "ol-printdialog-control",
                link: "/componentsguide/mapcontrols/printdialog/",
              },
              {
                text: "ol-profile-control",
                link: "/componentsguide/mapcontrols/profile/",
              },
              {
                text: "ol-rotate-control",
                link: "/componentsguide/mapcontrols/rotate/",
              },
              {
                text: "ol-search-control",
                link: "/componentsguide/mapcontrols/search/",
              },
              {
                text: "ol-scaleline-control",
                link: "/componentsguide/mapcontrols/scaleline/",
              },
              {
                text: "ol-swipe-control",
                link: "/componentsguide/mapcontrols/swipe/",
              },
              {
                text: "ol-toggle-control",
                link: "/componentsguide/mapcontrols/toggle/",
              },
              {
                text: "ol-videorecorder-control",
                link: "/componentsguide/mapcontrols/videorecorder/",
              },
              {
                text: "ol-zone-control",
                link: "/componentsguide/mapcontrols/zone/",
              },
              {
                text: "ol-zoom-control",
                link: "/componentsguide/mapcontrols/zoom/",
              },
              {
                text: "ol-zoomslider-control",
                link: "/componentsguide/mapcontrols/zoomslider/",
              },
              {
                text: "ol-zoomtoextent-control",
                link: "/componentsguide/mapcontrols/zoomtoextent/",
              },
            ],
          },
          {
            text: "Geometries",
            collapsed: true,
            items: [
              {
                text: "ol-geom-circle",
                link: "/componentsguide/geometries/geomcircle/",
              },
              {
                text: "ol-geom-line-string",
                link: "/componentsguide/geometries/geomlinestring/",
              },
              {
                text: "ol-geom-point",
                link: "/componentsguide/geometries/geompoint/",
              },
              {
                text: "ol-geom-polygon",
                link: "/componentsguide/geometries/geompolygon/",
              },
              {
                text: "ol-geom-multi-line-string",
                link: "/componentsguide/geometries/geommultilinestring/",
              },
              {
                text: "ol-geom-multi-point",
                link: "/componentsguide/geometries/geommultipoint/",
              },
              {
                text: "ol-geom-multi-polygon",
                link: "/componentsguide/geometries/geommultipolygon/",
              },
            ],
          },
          {
            text: "Styles",
            collapsed: true,
            items: [
              {
                text: "ol-style",
                link: "/componentsguide/styles/style/",
              },
              {
                text: "ol-style-circle",
                link: "/componentsguide/styles/circle/",
              },
              {
                text: "ol-style-fill",
                link: "/componentsguide/styles/fill/",
              },
              {
                text: "ol-style-flowline",
                link: "/componentsguide/styles/flowline/",
              },
              {
                text: "ol-style-icon",
                link: "/componentsguide/styles/icon/",
              },
              {
                text: "ol-style-stroke",
                link: "/componentsguide/styles/stroke/",
              },
              {
                text: "ol-style-text",
                link: "/componentsguide/styles/text/",
              },
            ],
          },
          {
            text: "Interactions",
            collapsed: true,
            items: [
              {
                text: "ol-interaction-clusterselect",
                link: "/componentsguide/interactions/clusterselect/",
              },
              {
                text: "ol-interaction-draw",
                link: "/componentsguide/interactions/draw/",
              },
              {
                text: "ol-interaction-dragbox",
                link: "/componentsguide/interactions/dragbox/",
              },
              {
                text: "ol-interaction-dragrotate",
                link: "/componentsguide/interactions/dragrotate/",
              },
              {
                text: "ol-interaction-dragrotatezoom",
                link: "/componentsguide/interactions/dragrotatezoom/",
              },
              {
                text: "ol-interaction-link",
                link: "/componentsguide/interactions/link/",
              },
              {
                text: "ol-interaction-modify",
                link: "/componentsguide/interactions/modify/",
              },
              {
                text: "ol-interaction-pointer",
                link: "/componentsguide/interactions/pointer/",
              },
              {
                text: "ol-interaction-select",
                link: "/componentsguide/interactions/select/",
              },
              {
                text: "ol-interaction-snap",
                link: "/componentsguide/interactions/snap/",
              },
              {
                text: "ol-interaction-transform",
                link: "/componentsguide/interactions/transform/",
              },
            ],
          },
          {
            text: "Animations",
            collapsed: true,
            items: [
              {
                text: "ol-animation-drop",
                link: "/componentsguide/animations/drop/",
              },
              {
                text: "ol-animation-fade",
                link: "/componentsguide/animations/fade/",
              },
              {
                text: "ol-animation-path",
                link: "/componentsguide/animations/path/",
              },
              {
                text: "ol-animation-shake",
                link: "/componentsguide/animations/shake/",
              },
              {
                text: "ol-animation-slide",
                link: "/componentsguide/animations/slide/",
              },
              {
                text: "ol-animation-teleport",
                link: "/componentsguide/animations/teleport/",
              },
              {
                text: "ol-animation-zoom",
                link: "/componentsguide/animations/zoom/",
              },
            ],
          },
        ],
      },
      {
        text: "Extension",
        items: [
          {
            text: "Extend vue3-openlayers",
            link: "/pluginsguide/index",
          },
          {
            text: "Publish an extension",
            link: "/pluginsguide/publish",
          },
          {
            text: "Extensions List",
            link: "/pluginsguide/list",
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/MelihAltintas/vue3-openlayers",
      },
    ],
    search: {
      provider: "local",
    },
  },
};

export default defineConfig(config);
