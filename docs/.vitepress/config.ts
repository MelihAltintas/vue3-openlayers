import { defineConfig } from "vitepress";

// https://vitepress.vuejs.org/reference/site-config
export default defineConfig({
  // https://MelihAltintas.github.com/vue3-openlayers
  // base: '/vue3-openlayers/',
  title: "vue3-openlayers",
  description: "Openlayers Wrapper for Vue3",
  lastUpdated: true,
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
        text: "Components",
        collapsed: false,
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
            text: "Layers",
            items: [
              {
                text: "ol-animated-clusterlayer",
                link: "/componentsguide/layers/animatedclusterlayer/",
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
                text: "ol-vector-layer",
                link: "/componentsguide/layers/vectorlayer/",
              },
              {
                text: "ol-webglpoints-layer",
                link: "/componentsguide/layers/webglpointslayer/",
              },
              {
                text: "ol-webgl-tile-layer",
                link: "/componentsguide/layers/webgltilelayer/",
              },
            ],
          },
          {
            text: "Sources",
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
                text: "ol-source-tianditu",
                link: "/componentsguide/sources/tianditu/",
              },
              {
                text: "ol-source-vector",
                link: "/componentsguide/sources/vector/",
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
            text: "Geometries",
            items: [
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
            items: [
              {
                text: "ol-interaction-draw",
                link: "/componentsguide/interactions/draw/",
              },
              {
                text: "ol-interaction-modify",
                link: "/componentsguide/interactions/modify/",
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
          {
            text: "Map Controls",
            items: [
              {
                text: "Demo",
                link: "/componentsguide/mapcontrols/",
              },
              {
                text: "ol-attribution-control",
                link: "/componentsguide/mapcontrols/attribution/",
              },
              {
                text: "ol-context-menu",
                link: "/componentsguide/mapcontrols/contextmenu/",
              },
              {
                text: "ol-fullscreen-control",
                link: "/componentsguide/mapcontrols/fullscreen/",
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
                text: "ol-rotate-control",
                link: "/componentsguide/mapcontrols/rotate/",
              },
              {
                text: "ol-scaleline-control",
                link: "/componentsguide/mapcontrols/scaleline/",
              },
              {
                text: "ol-swipe-control",
                link: "/componentsguide/mapcontrols/swip/",
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
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/MelihAltintas/vue3-openlayers",
      },
    ],
  },
});
