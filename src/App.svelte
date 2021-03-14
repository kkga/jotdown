<script lang="ts">
  import Pad from './components/Pad.svelte';
  import Settings from './components/Settings.svelte';
  import { sheets, settings } from './stores';

  let settingsOpen = false;

  $: dark = $settings.theme === 'dark';
  $: light = $settings.theme === 'light';

  function handleKeydown(e: KeyboardEvent) {
    if (settingsOpen && e.key == 'Escape') {
      settingsOpen = false;
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="app" class:dark class:light>
  <Settings on:close={() => (settingsOpen = false)} show={true} />
  <Pad
    handleInput={!settingsOpen}
    bind:sheets={$sheets}
    on:settingsToggled={() => (settingsOpen = !settingsOpen)} />
</div>

<style>
  .app {
    flex: 1;
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
    .app {
      grid-template-rows: max-content 1fr;
      grid-template-areas:
        'toolbar'
        'pad';
    }
  }

  @media screen and (min-width: 992px) {
    .app {
      grid-template-rows: max-content 1fr;
      grid-template-areas:
        'toolbar'
        'pad';
    }
  }
</style>
