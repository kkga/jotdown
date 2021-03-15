<script lang="ts">
  import Pad from './components/Pad.svelte';
  import Settings from './components/Settings.svelte';
  import { sheets, settings } from './stores';

  let settingsOpen = false;
  $: document.body.className = $settings.theme;

  function handleKeydown(e: KeyboardEvent) {
    if (settingsOpen && e.key == 'Escape') {
      settingsOpen = false;
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<Settings on:close={() => (settingsOpen = false)} show={true} />
<Pad
  handleInput={!settingsOpen}
  bind:sheets={$sheets}
  on:settingsToggled={() => (settingsOpen = !settingsOpen)} />

<style>
  :global(html) {
    height: 100%;
  }
  :global(body) {
    min-height: 100%;
    margin: 0;
    display: grid;
    grid-template-rows: 1fr max-content;
    grid-template-areas:
      'pad'
      'toolbar';
    font-family: var(--font-text);
    font-size: var(--font-size-s);
    line-height: var(--lh-m);
    color: var(--color-text-primary);
    background-color: var(--color-bg-pure);
  }

  @media screen and (min-width: 576px) {
    :global(body) {
      grid-template-rows: max-content 1fr;
      grid-template-areas:
        'toolbar'
        'pad';
    }
  }
</style>
