
//import vue from '@vitejs/plugin-vue'
import path from 'path'

export default{
  //plugins: [vue()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@demos': path.resolve(__dirname, '../src/demos'),
    },
  }
}