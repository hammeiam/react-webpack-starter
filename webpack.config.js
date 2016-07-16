module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    stats: { colors: true },
    port: 3001
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {compact: false}
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192&name=[path][name].[ext]?[hash]'
      } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
}
