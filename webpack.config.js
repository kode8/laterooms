const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

/* PostCSS plugins */
const autoprefixer = require('autoprefixer');
const postcssflexbugsfixes = require('postcss-flexbugs-fixes');
const postcsspxtorem = require('postcss-pxtorem');
const postcssobjectfitimages = require('postcss-object-fit-images');
const postcssfiltergradient = require('postcss-filter-gradient');
const postcssopacity = require('postcss-opacity');

const config = {
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      Api: path.resolve(__dirname, './src/Api'),
      Components: path.resolve(__dirname, './src/Components'),
      Containers: path.resolve(__dirname, './src/Components/Containers')
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                browserlist: ['last 3 versions', 'ie 10'],
              }),
              postcssflexbugsfixes(),
              postcsspxtorem(),
              postcssobjectfitimages(),
              postcssfiltergradient(),
              postcssopacity(),
            ],
          },
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            includePaths: ['./src/Scss'],
          },
        }],
      },
    ],
  },
  devServer: {
    port: 8080,
    contentBase: './src',
    watchContentBase: true,
    historyApiFallback: true,
  },
  watchOptions: {
      aggregateTimeout: 300,
      poll: 1000, // How often check for changes (in milliseconds)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
};

module.exports = config;
