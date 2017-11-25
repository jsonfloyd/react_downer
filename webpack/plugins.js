import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { isDebug, isVerbose, isAnalyze } from './config';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

export default [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
		'process.env.BROWSER': true,
		__DEV__: isDebug,
	}),
	...isAnalyze ? [new BundleAnalyzerPlugin()] : [],
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: 'vendor.js',
		minChunks: module => /node_modules/.test(module.resource),
	}),
	...isDebug ? [] : [
		/* new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				dead_code: true,
				unused: true,
				screw_ie8: true,
				warnings: isVerbose || isAnalyze,
				typeofs: false,
			},
			mangle: {
				screw_ie8: true,
			},
			output: {
				comments: false,
				screw_ie8: true,
			},
		}), */
	],
	new ExtractTextPlugin({
		filename: 'styles.css',
	}),
];

