<script lang="ts">
  export let value: any = undefined;
  export let color = 'gray';
  export let textColor = 'gray';
  export let active = false;
  export let ghost = false;
</script>

<button
  {value}
  class="p-2 h-8 flex justify-center items-center text-{textColor}-500 dark:text-{textColor}-300 bg-{color}-50 dark:bg-{color}-700 border-gray-400 dark: border-gray-500 ring-inset focus:ring-2 hover:bg-{color}-100 dark:hover:bg-{color}-600 active:bg-{color}-200"
  class:border={!ghost}
  on:click>
  <slot>Button</slot>
</button>
