import type { App } from 'vue'
import OlFullScreenControl from './OlFullScreenControl.vue'
import OlMousePositionControl from './OlMousePositionControl.vue'
import OlAttributionControl from './OlAttributionControl.vue'
import OlOverviewMapControl from './OlOverviewMapControl.vue'
import OlScaleLineControl from './OlScaleLineControl.vue'
import OlZoomControl from './OlZoomControl.vue'
import OlZoomSliderControl from './OlZoomSliderControl.vue'
import OlZoomToExtentControl from './OlZoomToExtentControl.vue'
import OlRotateControl from './OlRotateControl.vue'
import OlContextMenu from './OlContextMenu.vue'
import SwipeControl from './OlSwipeControl.vue'
import OlControlBar from './OlControlBar.vue'
import OlControlToggle from './OlControlToggle.vue'
import OlControlButton from './OlControlButton.vue'
import OlControlPrintDialog from './OlControlPrintDialog.vue'
import OlControlVideoRecorder from './OlControlVideoRecorder.vue'
import OlLayerSwitcherControl from './OlLayerSwitcherControl.vue'
import OlLayerSwitcherImageControl from './OlLayerSwitcherImageControl.vue'
import OlZoneControl from './OlZoneControl.vue'

let installed = false

function install(app: App) {
  if (installed) return
  installed = true

  app.component('OlFullScreenControl', OlFullScreenControl)
  app.component('OlMousePositionControl', OlMousePositionControl)
  app.component('OlAttributionControl', OlAttributionControl)
  app.component('OlOverviewMapControl', OlOverviewMapControl)
  app.component('OlScaleLineControl', OlScaleLineControl)
  app.component('OlZoomControl', OlZoomControl)
  app.component('OlZoomSliderControl', OlZoomSliderControl)
  app.component('OlZoomToExtentControl', OlZoomToExtentControl)
  app.component('OlRotateControl', OlRotateControl)
  app.component('OlContextMenu', OlContextMenu)
  app.component('SwipeControl', SwipeControl)
  app.component('OlControlBar', OlControlBar)
  app.component('OlControlToggle', OlControlToggle)
  app.component('OlControlButton', OlControlButton)
  app.component('OlControlPrintDialog', OlControlPrintDialog)
  app.component('OlControlVideoRecorder', OlControlVideoRecorder)
  app.component('OlLayerSwitcherControl', OlLayerSwitcherControl)
  app.component('OlLayerSwitcherImageControl', OlLayerSwitcherImageControl)
  app.component('OlZoneControl', OlZoneControl)
}

export default install

export {
  install,
  OlFullScreenControl,
  OlMousePositionControl,
  OlAttributionControl,
  OlOverviewMapControl,
  OlScaleLineControl,
  OlZoomControl,
  OlZoomSliderControl,
  OlZoomToExtentControl,
  OlContextMenu,
  SwipeControl,
  OlControlBar,
  OlControlToggle,
  OlControlButton,
  OlControlPrintDialog,
  OlControlVideoRecorder,
  OlLayerSwitcherControl,
  OlLayerSwitcherImageControl,
  OlZoneControl,
}
