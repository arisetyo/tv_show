/**
 * hot-loading server for development
 * @author: Arie M. Prasetyo (2020)
 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

/**
 * Webpack dev server implementation to allow for React Hot Loader usage.
 *
 * Sourced from https://github.com/gaearon/react-hot-boilerplate
 */
new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	headers: { 'Access-Control-Allow-Origin': '*' }
}).listen(config.devServer.port, config.devServer.host, function(err, result) {
	if (err) {
		//noinspection Eslint
		console.log(err); // eslint-disable-line
		process.exit(1);
	}
	console.log('Listening at http://' + config.devServer.host + ':' + config.devServer.port); // eslint-disable-line
});