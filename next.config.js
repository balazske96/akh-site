/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');


module.exports = {
	reactStrictMode: true,
	staticPageGenerationTimeout: 120, // 2 minutes
	sassOptions: {
		fiber: false,
		includePaths: [path.join(__dirname, 'styles')],
	},
};
