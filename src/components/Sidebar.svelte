<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  export let show = false;

  const dispatch = createEventDispatcher();
</script>

{#if show}
  <div class="backdrop" on:click|self={() => dispatch('close')}>
    <div transition:fly={{ x: 8, duration: 125 }} class="container">
      <slot />
    </div>
  </div>
{/if}

<style>
  .backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .container {
    z-index: 100;
    font-size: 13px;
    font-family: var(--font-ui);
    position: absolute;
    top: 32px;
    right: 0;
    bottom: 0;
    display: flex;
    flex-flow: column nowrap;
    padding: var(--spacer-m);
    width: 20rem;
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
    border-top: 1px solid var(--color-bg-secondary);
  }
</style>
