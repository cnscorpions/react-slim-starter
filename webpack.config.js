const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, "src/main.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	mode: "development",
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 19000,
		hot: true, // enable HMR
		stats: "minimal"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
}