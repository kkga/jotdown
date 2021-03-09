import { writable } from "svelte/store";
import { localStore } from './localStore.js'
import type { SheetType } from "./types/sheet.type"

export const alert = writable("Welcome to the todo list app!");

const initialSheets: SheetType[] = [
	{ id: 1, name: 'woot', color: 'gray', content: 'hello' },
	{ id: 2, name: 'woot 2', color: 'blue', content: 'yes' },
	{ id: 3, name: 'woot 2', color: 'green', content: 'yes' },
	{ id: 4, name: 'woot 2', color: 'purple', content: 'yes' },
	{ id: 5, name: 'woot 2', color: 'orange', content: 'yes' },
	{ id: 6, name: 'woot 2', color: 'red', content: 'yes' }
]

export const sheets = localStore<SheetType[]>('svelte-pad', initialSheets)

