<script lang="ts">
  import Sheet from './Sheet.svelte';
  import Toolbar from './Toolbar.svelte';
  import type { SheetType } from '../types/sheet.type';

  export let sheets: SheetType[] = [];
  export let handleInput = true;

  const mobileMaxWidth = 576;

  $: currentSheet = 1;

  let isZoomed = false;

  let windowWidth: number;
  $: isMobile = windowWidth <= mobileMaxWidth;
  $: if (isMobile) isZoomed = true;

  function updateSheet(sheet: SheetType) {
    const i = sheets.findIndex((s) => s.id === sheet.id);
    sheets[i] = { ...sheets[i], ...sheet };
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!handleInput) {
      return;
    } else if (e.ctrlKey && e.key === 'f' && !isMobile) {
      e.preventDefault();
      isZoomed = !isZoomed;
    } else if (e.key === 'Tab') {
      e.preventDefault();
      let nextSheet: number;
      if (e.shiftKey) {
        nextSheet = currentSheet === 1 ? sheets.length : currentSheet - 1;
      } else {
        nextSheet = currentSheet === sheets.length ? 1 : currentSheet + 1;
      }
      currentSheet = nextSheet;
    }
  }
</script>

<svelte:window bind:innerWidth={windowWidth} on:keydown={handleKeydown} />

<Toolbar
  {sheets}
  {isMobile}
  on:settingsToggled
  bind:currentSheet
  bind:fullscreen={isZoomed} />

<div class="flex flex-col">
  <ul role="list" class="flex-1 grid grid-cols-3 gap-0.5">
    {#each sheets as sheet (sheet.id)}
      <li
        class="flex flex-col"
        class:hidden={isZoomed && currentSheet !== sheet.id}
        class:col-span-full={isZoomed && currentSheet === sheet.id}>
        <Sheet
          {sheet}
          zoomed={isZoomed}
          isCurrent={currentSheet === sheet.id}
          on:focus={(e) => (currentSheet = e.detail)}
          on:update={(e) => updateSheet(e.detail)} />
      </li>
    {/each}
  </ul>
</div>
