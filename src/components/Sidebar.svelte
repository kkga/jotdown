<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  export let show = false;

  const dispatch = createEventDispatcher();
</script>

{#if show}
  <div
    class="fixed inset-0 bg-gray-300 dark:bg-gray-900 bg-opacity-20 dark:bg-opacity-20"
    transition:fade={{ duration: 125 }}
    on:click|self={() => dispatch('close')}>
    <div
      transition:fly={{ x: 8, duration: 125 }}
      class="shadow z-10 absolute top-8 right-0 bottom-0 p-4 w-80 flex flex-col text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700">
      <slot />
    </div>
  </div>
{/if}
