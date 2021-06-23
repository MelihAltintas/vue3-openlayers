import {
    Map,
    Layers,
    Sources,
    MapControls,
    Geometries,
    Styles
} from './components'


import 'ol/ol.css'
import './assets/style.css'

export default function install(app) {
    
    if (install.installed) {
        return
    }

    install.installed = true

    app.use(Map)
    app.use(Layers)
    app.use(Sources)
    app.use(MapControls)
    app.use(Geometries)
    app.use(Styles);
}

export {
    install,
    Map,
}