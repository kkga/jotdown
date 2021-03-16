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

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body,
  html {
    height: 100%;
  }

  body {
    @apply flex flex-col bg-gray-50;
  }

  body.dark {
    @apply bg-gray-900;
  }
</style>
