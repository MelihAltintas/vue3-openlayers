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
    app.use(Map.install)
    app.use(Layers.install)
    app.use(Sources.install)
    app.use(MapControls.install)
    app.use(Geometries.install)
    app.use(Styles.install)
    app.use(Interactions.install)
    app.use(Animations.install)

    app.provide('ol-feature', feature)
    app.provide('ol-geom', geom)
    app.provide('ol-animations', animations)
    app.provide('ol-format', format)
    app.provide('ol-loadingstrategy', loadingstrategy)
    app.provide('ol-selectconditions', selectconditions)
    app.provide('ol-extent', extent)
  },
})

declare module '@vue/runtime-core' {
  export function inject(key: 'ol-feature'): feature
  export function inject(key: 'ol-geom'): typeof geom
  export function inject(key: 'ol-animations'): typeof animations
  export function inject(key: 'ol-format'): typeof format
  export function inject(key: 'ol-loadingstrategy'): typeof loadingstrategy
  export function inject(key: 'ol-selectconditions'): typeof selectconditions
  export function inject(key: 'ol-extent'): typeof extent
}

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
