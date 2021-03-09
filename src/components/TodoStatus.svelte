<script lang="ts">
  import type { TodoType } from "../types/todo.type"

  export let todos: TodoType[];
  export const focus = () => headingEl.focus();

  $: totalTodos = todos.length;
  $: completedTodos = todos.filter((todo) => todo.completed).length;

  let headingEl: HTMLElement;
</script>

<h2 bind:this={headingEl} tabindex="-1" id="list-heading">
  {completedTodos} out of {totalTodos} items completed
</h2>
