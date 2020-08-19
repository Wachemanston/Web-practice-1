const path = require('path');

const distPath = path.resolve(__dirname, 'dist');

const config = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/env', {
                    modules: false,
                  },
                ],
              ],
              plugins: [
                'transform-object-rest-spread',
                '@babel/plugin-transform-react-jsx',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: distPath,
    compress: true,
    port: 8080,
  },
};

const main = Object.assign({}, config, {
  entry: {
    index: './src/index.jsx',
  },
  output: {
    path: distPath,
    filename: '[name].bundle.js',
  },
});

module.exports = main;
