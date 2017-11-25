import { isVerbose, isDebug } from './webpack/config';
import plugins from './webpack/plugins';
import rules from './webpack/rules';

const path = require('path');

export default {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './public'),
		pathinfo: isVerbose,
	},
	devServer: {
		contentBase: './public',
		historyApiFallback: true,
	},
	module: {
		rules: [
			...rules,
		],
	},
	resolve: {
		modules: [
			'src/shared',
			'node_modules',
		],
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		...plugins,
	],
	stats: {
		timings: true,
		colors: true,
		reasons: isVerbose,
		hash: isVerbose,
		version: isVerbose,
		chunks: isVerbose,
		chunkModules: isVerbose,
		cached: isVerbose,
		cachedAssets: isVerbose,
		errors: isVerbose,
		errorDetails: isVerbose,
	},
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
	},
	bail: !isDebug,
	cache: isDebug,
};
