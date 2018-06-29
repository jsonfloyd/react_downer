import { isDebug } from './config';
import initial from '../package.json';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const options = {
	importLoaders: 1,
	sourceMap: isDebug,
	modules: true,
	localIdentName: isDebug ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
	minimize: !isDebug,
	discardComments: {
		removeAll: true,
	},
};

export default [
	{
		test: /\.jsx?$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'babel-loader',
				options: {
					cacheDirectory: isDebug,
					plugins: [
						'transform-promise-to-bluebird',
						'transform-decorators-legacy',
						...isDebug ? ['transform-react-jsx-source'] : [],
						...isDebug ? ['transform-react-jsx-self'] : [],
					],
					presets: [
						['env', {
							targets: {
								browsers: initial.browserslist,
							},
							modules: false,
							debug: false,
						}],
						'stage-0',
						'react',
						...isDebug ? [] : ['react-optimize'],
					],
				},
			},
			/* {
				loader: 'eslint-loader',
				options: {
					failOnError: true,
				},
			}, */
		],
	},
	{
		test: /\.css/,
		use: [
			{
				loader: 'style-loader',
			},
			{
				loader: 'css-loader',
				options,
			},
		],
	},
	{
		test: /\.scss$/,
		use: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: [
				{
					loader: 'css-loader',
					options,
				},
				{ loader: 'sass-loader' },
			],
		}),
	},
	{
		test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
		loader: 'file-loader',
		query: {
			name: isDebug ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]',
		},
	},
	{
		test: /\.json$/,
		loader: 'json-loader',
	},
];
