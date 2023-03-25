import DefaultTheme from 'vitepress/theme'

import '@/assets/style.css'
import Vue3Openlayers from '@'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Vue3Openlayers)
  }
}
