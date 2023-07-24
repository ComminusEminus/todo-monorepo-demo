import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin'


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
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
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
    new CleanWebpackPlugin()
  ],
  devServer: {
    static: {
      directory: './public',
    },
    compress: true,
    port: 9004,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

export default config
