import {
    Map,
    Layers,
    Sources,
    MapControls,
    Geometries,
    Styles,
    Interactions,
    Animations
} from './components'


import 'ol/ol.css'
import 'ol-ext/dist/ol-ext.css'

import 'ol-contextmenu/ol-contextmenu.css'
import './assets/style.css'

import feature from 'ol/Feature';
import * as geom from 'ol/geom';
import * as format from 'ol/format';
import * as loadingstrategy from 'ol/loadingstrategy';
import * as selectconditions from 'ol/events/condition';
import * as extent from 'ol/extent';
import * as animations from 'ol/easing'

export default function install(app) {

    if (install.installed) {
        console.error("OPENLAYERS MAP ALREADY INSTALLED")
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
    app.use(Animations);

    console.log('installed!')

    app.provide('ol-feature',feature)
    app.provide('ol-geom',geom)
    app.provide('ol-animations',animations)
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
    Interactions,
    Animations

}
