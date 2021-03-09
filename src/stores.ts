import { writable } from "svelte/store";
import { localStore } from './localStore.js'
import type { TodoType } from "./types/todo.type"

export const alert = writable("Welcome to the todo list app!");

const initialTodos: TodoType[] = [
	{ id: 1, name: 'woot', completed: true },
	{ id: 2, name: 'woot 2', completed: false }
]

export const todos = localStore<TodoType[]>('svelte-todo', initialTodos)

