import { writable } from 'svelte/store';
import { localStore } from './localStore.js';
import type { SheetType } from './types/sheet.type';

const initialSheets: SheetType[] = [
	{
		id: 1,
		name: 'hi!',
		color: 'blue',
		content:
			'Jotdown is a simple app for jotting things down.\n\nAll content is saved in your browser, so you can close the tab and come back to it later.'
	},
	{
		id: 2,
		name: 'keyboard navigation',
		color: 'green',
		content: '- Tab/Shift-Tab -- switch between sheets \n- Ctrl-F -- toggle zoom'
	},
	{
		id: 3,
		name: 'my cool sheet',
		color: 'purple',
		content: 'Focus ↑ the label to rename a sheet.'
	},
	{
		id: 4,
		name: '',
		color: 'yellow',
		content: ''
	},
	{
		id: 5,
		name: '',
		color: 'red',
		content: ''
	},
	{
		id: 6,
		name: '',
		color: 'pink',
		content: ''
	}
];

const initialSettings = {
	theme: 'dark',
	colorSet: 1,
	font: 'cursive',
	fontSize: 1
};

export const sheets = localStore<SheetType[]>('jotdown', initialSheets);
export const settings = localStore('jotdown-settings', initialSettings);
