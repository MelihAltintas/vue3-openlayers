import {
    Map,
    Layers,
    Sources,
    MapControls,
    Geometries,
    Styles,
    Interactions
} from './components'


import 'ol/ol.css'
import './assets/style.css'

import * as format from 'ol/format';
import * as loadingstrategy from 'ol/loadingstrategy';
import * as selectconditions from 'ol/events/condition';
import * as extent from 'ol/extent';

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
    app.use(Interactions);

    app.provide('ol-format',format)
    app.provide('ol-loadingstrategy',loadingstrategy)
    app.provide('ol-selectconditions',selectconditions)
    app.provide('ol-extent',extent)
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