module.exports = {
	purge: {
		// enabled: !process.env.ROLLUP_WATCH,
		// content: ['./public/index.html', './src/**/*.svelte'],
		// options: {
		// 	defaultExtractor: (content) => [
		// 		...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
		// 		...(content.match(/(?<=class:)[^=>\/\s]*/g) || [])
		// 	]
		// }
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			cursive: ['Recursive', 'sans-serif']
		},
		extend: {}
	},
	variants: {
		extend: {
			backgroundColor: ['active']
		}
	},
	plugins: []
};
