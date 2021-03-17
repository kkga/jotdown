<script lang="ts">
  export let value: any = undefined;
  export let color = 'gray';
  export let textColor = 'gray';
  export let active = false;
  export let ghost = false;
</script>

<button
  {value}
          class="{active ? 'text-gray-900'} p-2 h-8 flex justify-center items-center text-{textColor}-500 dark:text-{textColor}-300 bg-{color}-200 dark:bg-{color}-700 ring-inset focus:ring-2 active:bg-{color}-300"
  class:bg-transparent={ghost}
  class:active
  on:click>
  <slot>Button</slot>
</button>

<style lang="postcss">
  button.active {
    @apply text-gray-900 bg-gray-300;
    @apply dark:bg-gray-800;
  }
</style>
