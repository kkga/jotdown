import App from './App.svelte';
import { setup } from 'twind';

setup({
	darkMode: 'class',
	theme: {
		fontFamily: {
			cursive: ['Recursive', 'sans-serif'],
			system: ['-apple-system', 'system-ui', 'sans-serif']
		}
	},
	hash: false
});

const app = new App({
	target: document.body
});

export default app;
