<script lang="ts">
  import Sheet from "./Sheet.svelte";
  import Toolbar from "./Toolbar.svelte";
  import type { SheetType } from "../types/sheet.type";

  export let sheets: SheetType[] = [];

  let currentSheet = 1;
  let isFullscreen = false;

  $: console.log(isFullscreen);

  function updateSheet(sheet: SheetType) {
    const i = sheets.findIndex((s) => s.id === sheet.id);
    sheets[i] = { ...sheets[i], ...sheet };
  }

  /* function changeSheet(new_sheet_id: number) { */
  /*   currentSheet = new_sheet_id; */
  /* } */
</script>

<Toolbar
  {sheets}
  bind:currentSheet
  bind:fullscreen={isFullscreen}
/>

<div class="pad">
  {#if !isFullscreen}
    <ul role="list" class="pad-list">
      {#each sheets as sheet (sheet.id)}
        <li class="pad-list-item">
          <Sheet
            {sheet}
            on:focus={(e) => (currentSheet = e.detail)}
            on:update={(e) => updateSheet(e.detail)}
          />
        </li>
      {:else}
        <li>Nothing here!</li>
      {/each}
    </ul>
  {:else}
    <Sheet
      centeredHead
      sheet={sheets[currentSheet - 1]}
      on:update={(e) => updateSheet(e.detail)}
    />
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
