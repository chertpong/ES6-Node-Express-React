var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: [path.resolve(__dirname,'src','app','index.js')],
  output: {
    path: path.resolve(__dirname,'..','public'),
    filename: 'bundle.js'
  },
  resolve : [
    '.html','.js', '.jsx','.scss','.css'
  ],
  devtool: "source-map",
  module:{
    loaders:[
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: "babel-loader",
        presets: ["react","es2015","stage-2"],
        exclude: /(node_modules)/
      },
      {
        test: /\.html$/, loader: "raw-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap&includePaths[]="+ path.resolve(__dirname, './src')],
        exclude: /(node_modules)/
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { 
        test: /\.(png|gif|jpg)$/, 
        loader: "file?name=images/[name].[ext]",
        exclude: /(node_modules)/
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'file?name=font/[name].[ext]'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin(
      {
        template: path.join(__dirname,'src/index.html'),
        inject:true,
        filename:path.resolve(__dirname,'..','public','index.html')
      }
    ),
    new ExtractTextPlugin(path.resolve(__dirname,'..','bundles.css'),{
      allChunks:true
    })
  ]
};