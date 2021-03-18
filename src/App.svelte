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

<div class="h-full flex flex-col text-gray-500 bg-gray-50 dark:bg-gray-900">
  <Settings on:close={() => (settingsOpen = false)} show={true} />
  <Pad
    handleInput={!settingsOpen}
    bind:sheets={$sheets}
    on:settingsToggled={() => (settingsOpen = !settingsOpen)} />
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body,
  html {
    height: 100%;
    background-color: black;
  }
</style>
