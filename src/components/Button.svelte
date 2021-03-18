<script lang="ts">
  export let value: any = null;
  export let color = 'gray';
  export let textColor = 'gray';
  export let active = false;
  export let ghost = false;
</script>

<button
  class="p-2 h-8 flex justify-center items-center text-{textColor}-500 dark:text-{textColor}-300 ring-inset 400 outline-none focus:ring-2 active:bg-{color}-200"
  {value}
  class:ghost
  class:active
  on:click>
  <slot>Button</slot>
</button>

<style lang="postcss">
  /* button { */
  /*   @apply border; */
  /* } */
  .active {
    @apply text-gray-900 bg-gray-200;
  }
  .ghost {
    @apply bg-transparent;
  }
</style>
