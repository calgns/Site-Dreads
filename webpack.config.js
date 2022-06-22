const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	output: {
		path: path.join(__dirname, 'public_html/'),
		publicPath: '/', // must be defined any path, `auto` is not supported yet
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public_html'),
		},
		compress: true,
		port: 3000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/main.pug'),
			filename: 'index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: '@webdiscus/pug-loader',
			},
		],
	},
};
