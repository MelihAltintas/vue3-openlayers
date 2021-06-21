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