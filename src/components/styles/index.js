import Style from './Style.vue'
import Circle from './Circle.vue'
import Stroke from './Stroke.vue'
import Fill from './Fill.vue'

function install (app) {

    if (install.installed) {
      return
    }

    install.installed = true
  
    app.component(Style.name, Style)
    app.component(Circle.name, Circle)
    app.component(Stroke.name, Stroke)
    app.component(Fill.name, Fill)

  }
  
  export default install
  
  export {
    install,
    Style,
    Stroke,
    Fill,
  }