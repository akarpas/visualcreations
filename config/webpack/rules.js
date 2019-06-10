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
    use: [
      { loader: 'url-loader', options: { prefix: 'font', limit: 10000 }},
    ],
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    use: [
      { loader: 'url-loader', options: { limit: 10000 }}
    ]
  },
  {
    test: /\.(jpe?g|pmg|gif|svg|png)$/i,
    use: [
      { loader: 'url-loader', options: { limit: 10000 }},
      'img-loader'
    ],
  },
  {
    test: /\.(ico)$/i,
    use: [
      { loader: 'url-loader', options: { limit: 10000 }},
      'img-loader'
    ],
  },
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