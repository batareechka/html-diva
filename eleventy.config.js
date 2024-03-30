const paths = {
	input: "src",
	output: "dist",
	passthroughCopy: ["src/images", "src/styles"],
};

module.exports = function (eleventyConfig) {
	// Passthrough copy for specified paths
	paths.passthroughCopy.forEach((path) => {
		eleventyConfig.addPassthroughCopy(path);
	});

	// Return your Object options:
	return {
		dir: {
			input: paths.input,
			output: paths.output,
		},
	};
};
