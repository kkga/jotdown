<script lang="ts">
  import Pad from './components/Pad.svelte'
  import Settings from './components/Settings.svelte' 
  import { sheets } from './stores'

  let settingsOpen = false;

  function handleKeydown(e: KeyboardEvent) {
    if (settingsOpen && e.key == "Escape") {
      settingsOpen = false
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<Settings on:close={() => settingsOpen = false} show={settingsOpen} />
<Pad handleInput={!settingsOpen} bind:sheets={$sheets} on:settingsToggled={() => settingsOpen = !settingsOpen}/>

