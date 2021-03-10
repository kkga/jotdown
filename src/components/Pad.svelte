<script lang="ts">
  import Sheet from './Sheet.svelte'
  import Toolbar from './Toolbar.svelte'
  import type { SheetType } from '../types/sheet.type'

  export let sheets: SheetType[] = []

  $: currentSheet = 1
  let isZoomed = false

  function updateSheet(sheet: SheetType) {
    const i = sheets.findIndex((s) => s.id === sheet.id)
    sheets[i] = { ...sheets[i], ...sheet }
  }

  function handleKeydown(e: KeyboardEvent) {
    console.log(e)
    if (e.ctrlKey && e.key === 'f') {
      e.preventDefault()
      isZoomed = !isZoomed
    } else if (e.key === 'Tab') {
      e.preventDefault()
      let nextSheet: number
      if (e.shiftKey) {
        nextSheet = currentSheet === 1 ? sheets.length : currentSheet - 1
      } else {
        nextSheet = currentSheet === sheets.length ? 1 : currentSheet + 1
      }
      currentSheet = nextSheet
      console.log(currentSheet)
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<Toolbar {sheets} bind:currentSheet bind:fullscreen={isZoomed} />

<div class="pad">
  {#if !isZoomed}
    <ul role="list" class="pad-list">
      {#each sheets as sheet (sheet.id)}
        <li class="pad-list-item">
          <Sheet
            {sheet}
            isCurrent={currentSheet === sheet.id}
            on:focus={(e) => (currentSheet = e.detail)}
            on:update={(e) => updateSheet(e.detail)} />
        </li>
      {:else}
        <li>Nothing here!</li>
      {/each}
    </ul>
  {:else}
    <Sheet
      zoomed={isZoomed}
      isCurrent
      sheet={sheets[currentSheet - 1]}
      on:update={(e) => updateSheet(e.detail)} />
  {/if}
</div>

<style>
  .pad {
    grid-area: pad;
    display: flex;
    flex-direction: column;
  }
  .pad-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2px;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  .pad-list-item {
    display: flex;
    flex-flow: column nowrap;
  }
</style>
