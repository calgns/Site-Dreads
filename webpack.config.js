const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	output: {
		path: path.join(__dirname, 'public_html/'),
		publicPath: '/', // must be defined any path, `auto` is not supported yet
	},
	// context: path.join(__dirname, '/'),
	devServer: {
		static: {
			directory: path.join(__dirname, 'public_html'),
		},
		compress: true,
		port: 3003,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/pages/main.pug'),
			filename: 'index.html',
		}),
		// new CopyWebpackPlugin({
		// 	patterns: [{ from: path.join(__dirname, 'src/images/') }],
		// }),
	],
	module: {
		// loaders: [
		//   { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file" }
		// ],
		rules: [
			{
				test: /\.pug$/,
				loader: '@webdiscus/pug-loader',
			},
			// {
			// 	test: /\.s[ac]ss$/i,
			// 	use: ['style-loader', 'css-loader', 'sass-loader'],
			// },
			// {
			// 	test: /\.(jpe?g|png|gif|svg)$/i,
			// 	loader: 'file-loader',
			// 	options: {
			// 		name: '/images/[name].[ext]',
			// 	},
			// },
		],
	},
};
