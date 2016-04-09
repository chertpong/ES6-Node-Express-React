var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/app/index.js'],
  output: {
    path: path.resolve(__dirname,'..','public'),
    filename: 'bundle.js'
  },
  resolve : [
    '.html','.js', '.jsx'
  ],
  module:{
    loaders:[
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: "babel-loader",
        presets: ['es2015', 'react'],
        exclude: /(node_modules|bower_components)/
      },
      {   test: /\.html$/, loader: "raw-loader"   }
    ]
  },
  plugins:[new HtmlWebpackPlugin(
    {
      template: path.join(__dirname,'src/index.html'),
      inject:true,
      filename:path.resolve(__dirname,'..','public','index.html')
    }
  )]
};