module.exports = {
	entry: './entry.js',
	output: {
		filename: './bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			}
		]
	}
}
