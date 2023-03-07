
import path from 'path'

export default{
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@demos': path.resolve(__dirname, '../src/demos'),
    },
    preserveSymlinks: false,
    dedupe: ['vue'],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
}
