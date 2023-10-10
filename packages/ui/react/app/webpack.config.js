import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import env from 'dotenv'
env.config({path: '../../../../.env'})

const config = {
  
  entry: './src/index.tsx',
  stats: {
    errorDetails: true
  },
  mode: 'production',
  output: {
    path: path.resolve('./bundle'),
    clean: true,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.cjs'],

  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.ttf$/,
        type: 'asset/resource',
      }
    ],
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin(
      { template: './public/index.html' }
    ),
    new CleanWebpackPlugin({
        dry: false,
        verbose: true,
        dangerouslyAllowCleanPatternsOutsideProject: true
    }),
    new Dotenv({
      path: '../../../../.env'
    })
  ],
  devServer: {
    static: {
      directory: './public',
    },
    compress: true,
    port: process.env.CLIENT_PORT,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

export default config



/*
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import env from 'dotenv'
env.config({path: '../../../../.env'})


const config = {
  
  entry: './src/index.tsx',
  stats: {
    errorDetails: true
  },
  mode: 'production',
  output: {
    path: path.resolve('./bundle'),
    clean: true,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.cjs'],

  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.ttf$/,
        type: 'asset/resource',
      }
    ],
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin(
      { template: './public/index.html' }
    ),
    new CleanWebpackPlugin({
        dry: false,
        verbose: true,
        dangerouslyAllowCleanPatternsOutsideProject: true
    }),
    new Dotenv({
      path: '../../../../.env'
    })
  ],
  devServer: {
    static: {
      directory: './public',
    },
    compress: true,
    port: process.env.CLIENT_PORT,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

export default config

*/