module.exports = {
    title: 'Vue3 OpenLayers',
    description: 'Vue3 OpenLayers',
    themeConfig: {
        displayAllHeaders: true,
        sidebar: {
            '/': [{
                text: 'Introduction',
                link: '/'
            }, {
                text: 'Components',
                collapsable: false,
                children: [{
                        text: 'ol-map',
                        link: '/componentsguide/map/'
                    }, {
                        text: 'ol-view',
                        link: '/componentsguide/view/'
                    }, {
                        text: 'ol-overlay',
                        link: '/componentsguide/overlay/'
                    },
                    {
                        text: 'Layers',
                        children: [{
                                text: 'ol-tile-layer',
                                link: '/componentsguide/layers/tilelayer/'
                            },
                            {
                                text: 'ol-image-layer',
                                link: '/componentsguide/layers/imagelayer/'
                            },
                            {
                                text: 'ol-vector-layer',
                                link: '/componentsguide/layers/vectorlayer/'
                            }
                        ]
                    },
                    {
                        text: 'Sources',
                        children: [{
                                text: 'ol-source-image-static',
                                link: '/componentsguide/sources/imagestatic/'
                            },
                            {
                                text: 'ol-source-osm',
                                link: '/componentsguide/sources/osm/'
                            },{
                                text: 'ol-source-xyz',
                                link: '/componentsguide/sources/xyz/'
                            },
                            {
                                text: 'ol-source-wmts',
                                link: '/componentsguide/sources/wmts/'
                            },
                            {
                                text: 'ol-source-vector',
                                link: '/componentsguide/sources/vector/'
                            }
                        ]
                    },
                    {
                        text: 'Geometries',
                        children: [{
                                text: 'ol-geom-point',
                                link: '/componentsguide/geometries/geompoint/'
                            },
                            {
                                text: 'ol-geom-line-string',
                                link: '/componentsguide/geometries/geomlinestring/'
                            },{
                                text: 'ol-geom-polygon',
                                link: '/componentsguide/geometries/geompolygon/'
                            },
                            {
                                text: 'ol-geom-multi-point',
                                link: '/componentsguide/geometries/geommultipoint/'
                            },
                            {
                                text: 'ol-geom-multi-line-string',
                                link: '/componentsguide/geometries/geommultilinestring/'
                            },       {
                                text: 'ol-geom-multi-polygon',
                                link: '/componentsguide/geometries/geommultipolygon/'
                            }
                        ]
                    },
                    {
                        text: 'Map Controls',
                        link: '/componentsguide/mapcontrols/'
                        
                    }
                ]
            }, ]

        }
    }
}