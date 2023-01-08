function calculatePriority(path) {
	const defaultPriority = 0.7;

	if (path === '/') return 1.0;
	if (path === '/koncertek') return 0.9;
	if (path === '/zene') return 0.9;
	if (path === '/bio') return 0.8;

	return defaultPriority;
};


module.exports = {
	siteUrl: process.env.SITE_URL || 'https://akiralyhalott.hu',
	generateRobotsTxt: true,
	exclude: ['/szervezoknek', '/impresszum'],
	transform: async (config, path) => {
		const priority = calculatePriority(path);

		// Use default transformation for all other cases
		return {
			loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
			changefreq: config.changefreq,
			priority: priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
			alternateRefs: config.alternateRefs ?? [],
		};
	},
};