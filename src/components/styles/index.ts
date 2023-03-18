import type { App } from 'vue'
import OlStyle from './OlStyle.vue'
import OlStyleCircle from './OlStyleCircle.vue'
import OlStyleStroke from './OlStyleStroke.vue'
import OlStyleFill from './OlStyleFill.vue'
import OlStyleIcon from './OlStyleIcon.vue'
import OlStyleText from './OlStyleText.vue'
import OlStyleFlowLine from './OlStyleFlowLine.vue'

let installed = false

function install(app: App) {
  if (installed) return
  installed = true

  app.component('OlStyle', OlStyle)
  app.component('OlStyleCircle', OlStyleCircle)
  app.component('OlStyleStroke', OlStyleStroke)
  app.component('OlStyleFill', OlStyleFill)
  app.component('OlStyleIcon', OlStyleIcon)
  app.component('OlStyleText', OlStyleText)
  app.component('OlStyleFlowLine', OlStyleFlowLine)
}

export default install

export {
  install,
  OlStyle,
  OlStyleStroke,
  OlStyleFill,
  OlStyleIcon,
  OlStyleText,
  OlStyleFlowLine,
  OlStyleCircle,
}
