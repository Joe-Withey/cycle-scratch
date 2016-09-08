module.exports = {
  entry: {
    app: __dirname + '/src/app.js' 
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], presets: ['es2015'], exclude: /node_modules/ }
    ]
  }
}
  
