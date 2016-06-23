module.exports = {
	entry: './entry.js',
	output: {
		filename: './bundle.js'
	},
	loaders: [
		{
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
		}
	]
}
