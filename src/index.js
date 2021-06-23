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

import * as format from 'ol/format';
import * as loadingstrategy from 'ol/loadingstrategy';

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

    app.provide('ol-format',format)
    app.provide('ol-loadingstrategy',loadingstrategy)
}

export {
    install,
    Map,
    Layers,
    Sources,
    MapControls,
    Geometries,
    Styles,
  
}