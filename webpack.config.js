const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')


const _paths = {
  src: path.join(__dirname, "app"),
  build: path.join(__dirname, "build"),
  template: path.join(__dirname, "templates/template.html")
}

const htmlConfig = {
  title: 'Inferno-slate-experimentation',
  template: _paths.template,
}

const plugins = [
  new HtmlWebPackPlugin(htmlConfig)
]

const target = 'web'
const entry = _paths.src
const output = {
  filename: "bundle.js",
  path: _paths.build
}

const alias = {
  "react-dom/server": "inferno-server",
  "react-dom": "inferno-compat",
  "react": "inferno-compat"
}

const resolve = {
  alias
}

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude:/node_modules/,
    loader: 'babel-loader',
    query:{
      presets: ['es2015'],
      plugins: ['inferno']
    }
  }
]


module.exports = {
  entry, output,
  resolve, plugins,
  devtool: "source-map",
  module: {rules}
}
