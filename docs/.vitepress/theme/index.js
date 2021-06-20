import DefaultTheme from 'vitepress/theme'
import './theme.css'

import OpenLayersMap from '../../../src'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    //console.log("openlayers add",OpenLayersMap)
    app.use(OpenLayersMap)
  }
}