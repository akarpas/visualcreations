module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    }
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    loader: 'file-loader',
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /node_modules/,
    loader: 'url-loader?prefix=font/&limit=5000',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
  },
  {
    test: /\.(jpe?g|pmg|gif|svg|png)$/i,
    use: ['url-loader?limit=10000', 'img-loader'],
  },
  {
    test: /\.(ico)$/i,
    use: ['url-loader?limit=10000', 'img-loader', 'file-loader?name=[name].[ext]'],
  },
  // {
  //   test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
  //   loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
  // },
  {
    test: /\.s(a|c)ss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: 'sass-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  }
];