const path_join = require('path').join

const project = {
  src: path_join(__dirname, "app"),
  build: path_join(__dirname, "build"),
}

module.exports = {
  target: 'web',
  entry: project.src,
  output: {
    filename: "bundle.js",
    path: project.build
  },
  resolve: {
    alias: {
    }
  },
  devtool: "source-map",
  module: {
  },
  devServer: {
    contentBase: project.build,
    port: 8099
  }
}
