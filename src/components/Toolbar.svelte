<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { SheetType } from '../types/sheet.type';

  const dispatch = createEventDispatcher();

  export let sheets: SheetType[];
  export let currentSheet: number;
  export let fullscreen: boolean;
  export let isMobile: boolean;

  function isSheetEmpty(sheet_id: number) {
    return sheets[sheet_id - 1].content.trim() === '';
  }

  function getSheetColor(sheet_id: number) {
    return isSheetEmpty(sheet_id) ? 'gray-700' : `${sheets[sheet_id - 1]['color']}-500`;
  }
</script>

<div class="container">
  {#if isMobile}
    <button style="visibility: hidden" />
  {:else}
    <button on:click={() => (fullscreen = !fullscreen)}>
      {#if fullscreen}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
          ><path
            fill-rule="evenodd"
            fill="currentColor"
            d="M8.25 3a.75.75 0 01.75.75v3.5A1.75 1.75 0 017.25 9h-3.5a.75.75 0 010-1.5h3.5a.25.25 0 00.25-.25v-3.5A.75.75 0 018.25 3zm7.5 0a.75.75 0 01.75.75v3.5c0 .138.112.25.25.25h3.5a.75.75 0 010 1.5h-3.5A1.75 1.75 0 0115 7.25v-3.5a.75.75 0 01.75-.75zM3 15.75a.75.75 0 01.75-.75h3.5c.966 0 1.75.784 1.75 1.75v3.5a.75.75 0 01-1.5 0v-3.5a.25.25 0 00-.25-.25h-3.5a.75.75 0 01-.75-.75zm12 1c0-.966.784-1.75 1.75-1.75h3.5a.75.75 0 010 1.5h-3.5a.25.25 0 00-.25.25v3.5a.75.75 0 01-1.5 0v-3.5z" /></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
          ><path
            fill-rule="evenodd"
            fill="currentColor"
            d="M4.75 4.5a.25.25 0 00-.25.25v3.5a.75.75 0 01-1.5 0v-3.5C3 3.784 3.784 3 4.75 3h3.5a.75.75 0 010 1.5h-3.5zM15 3.75a.75.75 0 01.75-.75h3.5c.966 0 1.75.784 1.75 1.75v3.5a.75.75 0 01-1.5 0v-3.5a.25.25 0 00-.25-.25h-3.5a.75.75 0 01-.75-.75zM3.75 15a.75.75 0 01.75.75v3.5c0 .138.112.25.25.25h3.5a.75.75 0 010 1.5h-3.5A1.75 1.75 0 013 19.25v-3.5a.75.75 0 01.75-.75zm16.5 0a.75.75 0 01.75.75v3.5A1.75 1.75 0 0119.25 21h-3.5a.75.75 0 010-1.5h3.5a.25.25 0 00.25-.25v-3.5a.75.75 0 01.75-.75z" /></svg>
      {/if}
    </button>
  {/if}

  {#if fullscreen}
    <ul class="sheets">
      {#each sheets as sheet (sheet.id)}
        <button
          on:click={() => (currentSheet = sheet.id)}
          value="sheet.id"
          class:selected={currentSheet === sheet.id}
          class="sheets-item"
          style="color: var(--{getSheetColor(sheet.id)})">
          {#if currentSheet !== sheet.id}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              ><path
                fill-rule="evenodd"
                fill="currentColor"
                d="M6 7.75C6 6.784 6.784 6 7.75 6h8.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0116.25 18h-8.5A1.75 1.75 0 016 16.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25h-8.5z" /></svg>
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              ><path
                fill-rule="evenodd"
                fill="currentColor"
                d="M7.75 6A1.75 1.75 0 006 7.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0018 16.25v-8.5A1.75 1.75 0 0016.25 6h-8.5z" /></svg>
          {/if}
        </button>
      {/each}
    </ul>
  {:else}
    <div class="jotdown">
      <span style="color: var(--blue-400)">J</span><span style="color: var(--green-400)"
        >o</span
      ><span style="color: var(--purple-400)">t</span><span
        style="color: var(--orange-400)">d</span
      ><span style="color: var(--red-400)">o</span><span style="color: var(--pink-400)"
        >w</span
      ><span style="color: var(--yellow-400)">n</span>
    </div>
  {/if}

  <button on:click={() => dispatch('settingsToggled', {})} style="grid-column: -1;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
      ><path
        fill-rule="evenodd"
        fill="currentColor"
        d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z" /></svg>
  </button>
</div>

<style>
  .container {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    padding: 0;
    border: 0;
    background-color: transparent;
    color: var(--gray-500);
  }
  button:hover {
    background-color: var(--gray-900);
    color: var(--gray-300);
  }
  button:active {
    background-color: var(--gray-800);
  }
  .sheets {
    display: flex;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 576px) {
    button {
      width: 2rem;
      height: 2rem;
    }
  }
</style>
