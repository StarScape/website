const path = require('path')

const devOptions =  process.env.NODE_ENV === 'development'
  ? {
    mode: 'development',
    watch: true,
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
    }
  }
  : {
    mode: 'production',
  }

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    // extensions: ['*', '.js'],
    modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'src')]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  ...devOptions,
}
