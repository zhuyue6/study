import webpack = require('webpack')
import path = require('path')
const config: webpack.Configuration = {
  entry: {
    vue: [
      'vue',
      'vue-router',
      'vuex'
    ],
    elementUI: [
      'element-ui'
    ]
  },
  mode: 'development',
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../depend/dll'),
    library: '[name]_dll_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_dll_[hash]',
      path: path.join(__dirname, '../depend/dll', '[name].manifest.json')
    }),
  ]
}

export default config