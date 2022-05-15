import nightwind from 'nightwind';
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [nightwind()]
};

module.exports = config;
