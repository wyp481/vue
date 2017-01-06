var webpack = require("webpack");
var ET = require("extract-text-webpack-plugin");



module.exports = {
	entry: __dirname +"/src/app.js",
	
	output:{
		path:__dirname +"/prc/",
		filename:"bundle.js"
	},
	devtool: 'source-map',
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:ET.extract('style', 'css!sass')
			},
			{
				test:/\.js$/,
				loader:"babel"
			},
			{
		        test: /\.scss$/,
		        // loader: 'style!css!sass'
		        loader: ET.extract('style', 'css!sass')
	      	},
		
	      	{
		        test: /\.string$/,
		        loader: 'string'
	      	}
		]
	},
	devServer: {
    contentBase: __dirname + '/prc',
    port: 80,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
	
	plugins:[
		new webpack.optimize.UglifyJsPlugin(),
		new ET("bundle.css")
	]
}
