
module.exports = {
    title: 'Vue3 OpenLayers',
    description: 'Vue3 OpenLayers',
    themeConfig: {
        displayAllHeaders: true,
        sidebar: {
            '/': [{
                    text: 'Components',
                    collapsable:true,
                    children: [{
                        text: 'ol-map',
                        link: '/componentsguide/map/'
                    },{
                        text: 'ol-view',
                        link: '/componentsguide/view/'
                    }, ]
                }]
                
        }
    }
}