var debug   = process.env.NODE_ENV !=="production";
var webpack =require('webpack');

module.exports={
	context: __dirname+"/src",
	devtool: debug ? "inline-sourcemap" : null,
	entry:"./js/scripts.js",
	output:{
		path: __dirname +"/src",
		filename:"scripts.min.js"
	},
	devServer:{
		inline:true,
		port:1336
	},
	module:{
		loaders:[
		{
			test:/\.js$/,
			exclude:/node_modules|bower_components/,
			loader:'babel-loader',
			query:{
				presets:['es2015','react','stage-0'],
				plugins:['react-html-attrs','transform-class-properties', 'transform-decorators-legacy']
			}
		 },
	    ]
	},
	plugins: debug ? []:[
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle:false, sourcemap:false}),
	],
};