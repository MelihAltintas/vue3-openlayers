import 'ol/ol.css'
import 'ol-ext/dist/ol-ext.css'
import 'ol-contextmenu/ol-contextmenu.css'
import './assets/style.css'
import type Vue from 'vue'
import feature from 'ol/Feature'
import * as geom from 'ol/geom'
import * as format from 'ol/format'
import * as loadingstrategy from 'ol/loadingstrategy'
import * as selectconditions from 'ol/events/condition'
import * as extent from 'ol/extent'
import * as animations from 'ol/easing'
import {
  Map,
  Layers,
  Sources,
  MapControls,
  Geometries,
  Styles,
  Interactions,
  Animations,
} from './components'

const createVue3OpenLayersPlugin = (): Vue.Plugin => ({
  install(app) {
    app.use(Map)
    app.use(Layers)
    app.use(Sources)
    app.use(MapControls)
    app.use(Geometries)
    app.use(Styles)
    app.use(Interactions)
    app.use(Animations)

    app.provide('ol-feature', feature)
    app.provide('ol-geom', geom)
    app.provide('ol-animations', animations)
    app.provide('ol-format', format)
    app.provide('ol-loadingstrategy', loadingstrategy)
    app.provide('ol-selectconditions', selectconditions)
    app.provide('ol-extent', extent)
  },
})

export default createVue3OpenLayersPlugin

export {
  createVue3OpenLayersPlugin,
  Map,
  Layers,
  Sources,
  MapControls,
  Geometries,
  Styles,
  Interactions,
  Animations,
}
