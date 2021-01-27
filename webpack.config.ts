import * as path from 'path'
import * as vuePlugin from 'vue-loader/lib/plugin'
import * as htmlPlugin from 'html-webpack-plugin'
import * as miniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin as cleanPlugin } from 'clean-webpack-plugin'
import * as cssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import * as webpack from 'webpack'
let mixin:any = {
  mode: 'production'
}
let config:webpack.Configuration = {
  entry: {
    main: "./src/index.ts"
  },
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.[contenthash].js',
    chunkFilename: 'js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          {
            loader: path.resolve(__dirname, 'src/loader/md-vue-loader.ts')
          }
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: { 
            appendTsSuffixTo: [/\.(vue)$/]
          }
        }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(woff|ttf|jpg|jpeg|png)$/,
        loader: 'file-loader',
        options: {
          outputPath: (url) => {
            if (/\.(woff|ttf)$/.test(url)) {
              return `assets/fonts/${url}`
            }
            return `assets/images/${url}`
          },
          publicPath: (url) => {
            if (/\.(woff|ttf)$/.test(url)) {
              return `/assets/fonts/${url}`
            }
            return `/assets/images/${url}`
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ 
          loader: miniCssExtractPlugin.loader
        }, {
          loader: 'css-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: [
        { 
          loader: miniCssExtractPlugin.loader
        },
        { 
          loader: "css-loader"
        },{
          loader: "sass-loader"
        }]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, ''),
      '@web': path.resolve(__dirname, 'src')
    },
    extensions: ['.vue', '.ts', '.js']
  },
  plugins: [
    new cleanPlugin(),
    new vuePlugin(),
    new cssMinimizerPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./depend/dll/elementUI.manifest.json')
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./depend/dll/vue.manifest.json')
    }),
    new miniCssExtractPlugin({
      filename: 'assets/css/common.[contenthash].css',
      chunkFilename: 'assets/css/[name].[chunkhash].css'
    }),
    new htmlPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}
if (process.argv.includes('--development')) {
  mixin = {
    mode: 'development',
    devServer: {
      port: 8080
    },
    devtool: 'inline-source-map'
  }
}
config = {
  ...mixin,
  ...config
}

export default config