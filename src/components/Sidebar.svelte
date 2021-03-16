<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  export let show = false;

  const dispatch = createEventDispatcher();
</script>

{#if show}
  <div
    class="fixed inset-0 bg-gray-900 bg-opacity-20"
    transition:fade={{ duration: 125 }}
    on:click|self={() => dispatch('close')}>
    <div
      transition:fly={{ x: 8, duration: 125 }}
      class="z-10 absolute top-8 right-0 bottom-0 p-2 w-64 bg-white text-sm">
      <slot />
    </div>
  </div>
{/if}
