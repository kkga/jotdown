<script lang="ts">
  import FilterButton from "./FilterButton.svelte";
  import Todo from "./Todo.svelte";
  import MoreActions from "./MoreActions.svelte";
  import NewTodo from "./NewTodo.svelte";
  import TodoStatus from "./TodoStatus.svelte";
  import { alert } from "../stores";
  import { Filter } from "../types/filter.enum";
  import type { TodoType } from "../types/todo.type";

  export let todos: TodoType[] = [];

  let todoStatus: TodoStatus;

  let filter = Filter.ALL;

  $: {
    if (filter === Filter.ALL) $alert = "Browsing all todos";
    else if (filter === Filter.ACTIVE) $alert = "Browsing active todos";
    else if (filter === Filter.COMPLETED) $alert = "Browsing completed todos";
  }

  $: newTodoId =
    todos.length === 0 ? 1 : Math.max(...todos.map((t) => t.id)) + 1;

  const filterTodos = (filter: Filter, todos: TodoType[]) =>
    filter === Filter.ACTIVE
      ? todos.filter((t) => !t.completed)
      : filter === Filter.COMPLETED
      ? todos.filter((t) => t.completed)
      : todos;

  function removeTodo(todo: TodoType) {
    todos = todos.filter((t) => t.id !== todo.id);
    todoStatus.focus();
    $alert = `Todo '${todo.name}' has been deleted`;
  }

  function addTodo(name: string) {
    todos = [...todos, { id: newTodoId, name: name, completed: false }];
    $alert = `Todo '${name}' has been added`;
  }

  function updateTodo(todo: TodoType) {
    const i = todos.findIndex((t) => t.id === todo.id);
    if (todos[i].name !== todo.name)
      $alert = `todo '${todos[i].name}' has been renamed to '${todo.name}'`;
    if (todos[i].completed !== todo.completed)
      $alert = `todo '${todos[i].name}' marked as ${
        todo.completed ? Filter.COMPLETED : Filter.ACTIVE
      }`;
    todos[i] = { ...todos[i], ...todo };
  }

  const checkAllTodos = (completed: boolean) => {
    todos = todos.map((t) => ({ ...t, completed }));
    $alert = `${completed ? "Checked" : "Unchecked"} ${todos.length} todos`;
  };

  const removeCompletedTodos = () => {
    $alert = `Removed ${todos.filter((t) => t.completed).length} todos`;
    todos = todos.filter((t) => !t.completed);
  };
</script>

<div class="todoapp stack-large">
  <NewTodo autofocus on:addTodo={(e) => addTodo(e.detail)} />

  <FilterButton bind:filter />

  <TodoStatus bind:this={todoStatus} {todos} />

  <ul role="list" class="todo-list stack-large">
    {#each filterTodos(filter, todos) as todo (todo.id)}
      <li class="todo">
        <Todo
          {todo}
          on:update={(e) => updateTodo(e.detail)}
          on:remove={(e) => removeTodo(e.detail)}
        />
      </li>
    {:else}
      <li>Nothing here!</li>
    {/each}
  </ul>

  <hr />

  <MoreActions
    {todos}
    on:checkAll={(e) => checkAllTodos(e.detail)}
    on:removeCompleted={removeCompletedTodos}
  />
</div>
