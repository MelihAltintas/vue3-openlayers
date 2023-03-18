declare module 'vue3-openlayers' {
  import type { App } from 'vue'
  import type feature from 'ol/Feature'
  import type * as geom from 'ol/geom'
  import type * as format from 'ol/format'
  import type * as loadingstrategy from 'ol/loadingstrategy'
  import type * as selectconditions from 'ol/events/condition'
  import type * as extent from 'ol/extent'
  import type * as animations from 'ol/easing'

  module '@vue/runtime-core' {
    export function inject(key: 'ol-feature'): feature
    export function inject(key: 'ol-geom'): typeof geom
    export function inject(key: 'ol-animations'): typeof animations
    export function inject(key: 'ol-format'): typeof format
    export function inject(key: 'ol-loadingstrategy'): typeof loadingstrategy
    export function inject(key: 'ol-selectconditions'): typeof selectconditions
    export function inject(key: 'ol-extent'): typeof extent
  }

  export default function install(app: App): void
}
