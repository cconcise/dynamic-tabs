const path = require("path");

module.exports = {
	entry: {
		app: "./index.js"
	},
	devtool: "inline-source-map",
	plugins: [],
	output: {
		filename: "tabs.js",
		path: path.resolve(__dirname, "dist")
	}
};