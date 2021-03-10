import { writable } from "svelte/store";
import { localStore } from './localStore.js'
import type { SheetType } from "./types/sheet.type"

export const alert = writable("Welcome to the todo list app!");

const initialSheets: SheetType[] = [
	{ id: 1, name: 'my list',   color: 'blue',   content: 'hello' },
	{ id: 2, name: 'my other list', color: 'green',   content: 'yes' },
	{ id: 3, name: 'later', color: 'purple',  content: 'yes' },
	{ id: 4, name: 'random', color: 'orange', content: 'yes' },
	{ id: 5, name: '', color: 'red', content: 'yes' },
	{ id: 6, name: '', color: 'pink',    content: 'yes' }
]

export const sheets = localStore<SheetType[]>('svelte-pad', initialSheets)

