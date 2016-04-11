var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [path.resolve(__dirname,'src','app','index.js')],
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
        presets: ["react","es2015","stage-2"],
        exclude: /(node_modules)/
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