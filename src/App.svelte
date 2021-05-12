<script lang="ts">
import Pad from './components/Pad.svelte';
import Settings from './components/Settings.svelte';
import { sheets, settings } from './stores';
import { tw } from 'twind';

let settingsOpen = false;
$: document.body.className = $settings.theme;

function handleKeydown(e: KeyboardEvent) {
  if (settingsOpen && e.key == 'Escape') {
    settingsOpen = false;
  }
}
</script>

<svelte:window on:keydown={handleKeydown} />

<div
  class={tw`h-full flex flex-col text-gray-500 bg-gray-50
            dark:(text-gray-400 bg-gray-900)`}>
  <Settings on:close={() => (settingsOpen = false)} show={true} />
  <Pad
    handleInput={!settingsOpen}
    bind:sheets={$sheets}
    on:settingsToggled={() => (settingsOpen = !settingsOpen)} />
</div>

<style>
:global(html) {
  height: 100%;
}
:global(body) {
  min-height: 100%;
  height: 100%;
  background-color: black;
}
</style>
