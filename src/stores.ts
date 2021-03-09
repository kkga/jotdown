import { writable } from "svelte/store";
import { localStore } from './localStore.js'
import type { SheetType } from "./types/sheet.type"

export const alert = writable("Welcome to the todo list app!");

const initialSheets: SheetType[] = [
	{ id: 1, name: 'woot', color: '#a6e8aa', content: 'hello' },
	{ id: 2, name: 'woot 2', color: '#ccf', content: 'yes' },
	{ id: 3, name: 'woot 2', color: '#cfc', content: 'yes' },
	{ id: 4, name: 'woot 2', color: '#ffc', content: 'yes' },
	{ id: 5, name: 'woot 2', color: '#cff', content: 'yes' },
	{ id: 6, name: 'woot 2', color: '#fcf', content: 'yes' }
]

export const sheets = localStore<SheetType[]>('svelte-pad', initialSheets)

