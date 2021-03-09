<script lang="ts">
  import Sheet from "./Sheet.svelte";
  import Toolbar from "./Toolbar.svelte";
  import type { SheetType } from "../types/sheet.type";

  export let sheets: SheetType[] = [];

  let layout = "grid";
  let currentSheet: number = 1;

  $: console.log(layout, currentSheet);

  function updateSheet(sheet: SheetType) {
    const i = sheets.findIndex((s) => s.id === sheet.id);
    sheets[i] = { ...sheets[i], ...sheet };
  }

  function changeLayout(selected_layout: string) {
    console.log(layout);
    layout = selected_layout;
  }

  function changeSheet(new_sheet_id: number) {
    currentSheet = new_sheet_id;
  }
</script>

<Toolbar
         {sheets}
  on:layoutChange={(e) => changeLayout(e.detail)}
  on:sheetChanged={(e) => changeSheet(e.detail)}
/>

<div class="pad">
  {#if layout === "grid"}
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
  {:else if layout === "single"}
    <Sheet
      sheet={sheets[currentSheet - 1]}
      on:update={(e) => updateSheet(e.detail)}
    />
  {/if}
</div>

<style>
  .pad {
    grid-area: pad;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  .pad-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
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
