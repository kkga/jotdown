<script lang="ts">
  import Sheet from "./Sheet.svelte";
  import type { SheetType } from "../types/sheet.type";

  export let sheets: SheetType[] = [];

  function updateSheet(sheet: SheetType) {
    const i = sheets.findIndex((s) => s.id === sheet.id);
    sheets[i] = { ...sheets[i], ...sheet };
  }
</script>

<div class="pad">
  <ul role="list" class="pad-list">
    {#each sheets as sheet (sheet.id)}
      <li class="pad-list-item">
        <Sheet {sheet} on:update={(e) => updateSheet(e.detail)} />
      </li>
    {:else}
      <li>Nothing here!</li>
    {/each}
  </ul>
</div>

<style>
  .pad {
    width: 100vw;
    height: 100vh;
  }
  .pad-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 1rem;
    height: 100%;
  }
  .pad-list-item {
    display: flex;
    flex-flow: column nowrap;
  }
</style>
