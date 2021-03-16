<script lang="ts">
  export let value: any;
  export let active: boolean;
</script>

<button {value} class:active on:click>
  <slot>Button</slot>
</button>

<style>
  button {
    flex: 1;
    height: 2rem;
    margin: 0;
    padding: 0 var(--spacer-s);
    appearance: none;
    border-radius: 0;
    outline-color: var(--color-text-accent);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-bg-primary);
    color: var(--color-text-secondary);
    border: 1px solid var(--color-bg-tertiary);
    font-size: inherit;
  }
  button.active {
    background-color: var(--color-bg-secondary);
    color: var(--color-text-primary);
  }
  button:focus-visible {
    outline: 0;
    z-index: 1;
    box-shadow: 0 0 0 2px var(--color-text-accent);
  }
</style>
