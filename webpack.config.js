const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/App.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: 'public',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    require('tailwindcss'),
                    require('autoprefixer'),
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
