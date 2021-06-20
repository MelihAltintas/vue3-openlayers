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
                    }, {
                        text: 'Map Controls',
                        link: '/componentsguide/mapcontrols/'
                        
                    }
                ]
            }, ]

        }
    }
}