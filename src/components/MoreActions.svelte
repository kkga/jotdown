<script lang="ts">
  import type { TodoType } from "../types/todo.type"
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let todos: TodoType[];

  let completed = true;

  const checkAll = () => {
    dispatch("checkAll", completed);
    completed = !completed;
  };

  const removeCompleted = () => dispatch("removeCompleted");

  $: completedTodos = todos.filter((t: TodoType) => t.completed).length;
</script>

<div class="btn-group">
  <button
    type="button"
    class="btn btn__primary"
    on:click={checkAll}
    disabled={todos.length === 0}>{completed ? "Check" : "Uncheck"} all</button
  >
  <button
    type="button"
    class="btn btn__primary"
    on:click={removeCompleted}
    disabled={completedTodos === 0}>Remove completed</button
  >
</div>
