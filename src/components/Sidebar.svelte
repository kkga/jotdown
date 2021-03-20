<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { tw } from 'twind';

  export let show = false;

  const dispatch = createEventDispatcher();
</script>

{#if show}
  <div
    class={tw`fixed z-40 inset-0 bg(gray-200 opacity-60) dark:(bg(gray-900 opacity-40))`}
    transition:fade={{ duration: 125 }}
    on:click|self={() => dispatch('close')}>
    <div
      transition:fly={{ x: 8, duration: 125 }}
      class={tw`
        z-50 shadow absolute top-8 right-0 bottom-0 p-4 w-72 flex(& col)
        divide-y divide-gray-300
        bg(gray-50) text(sm gray-600)
        dark:(divide-gray-600 text(gray-300) bg(gray-800))`}>
      <slot />
    </div>
  </div>
{/if}
