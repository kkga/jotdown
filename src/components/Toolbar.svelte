<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { SheetType } from "../types/sheet.type";
  const dispatch = createEventDispatcher();

  export let sheets: SheetType[];

  let layout: string;
  let currentSheet: number;

  const onLayoutChange = () => {
    dispatch("layoutChange", layout);
  };
  const onSheetChange = (id: number) => {
    currentSheet = id;
    dispatch("sheetChanged", currentSheet);
  };
</script>

<div class="container">
  <select
    bind:value={layout}
    on:blur={onLayoutChange}
    on:change={onLayoutChange}
  >
    <option value="grid">Grid</option>
    <option value="single">Single</option>
  </select>

  {#if layout === "single"}
    <ul class="sheets">
      {#each sheets as sheet (sheet.id)}
        <button
          on:click={() => onSheetChange(sheet.id)}
          value="sheet.id"
          class="sheets-item"
          class:selected={currentSheet === sheet.id}
          style="background-color: {sheet.color}"
        />
      {/each}
    </ul>
  {/if}

  <div />
</div>

<style>
  .container {
    padding: 1rem;
    padding-bottom: 0;
    display: flex;
    justify-content: space-between;
  }

  .sheets {
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }
  .sheets-item {
    width: 1rem;
    height: 1rem;
    border-radius: 999px;
    border: 1px transparent;
  }
  .sheets-item.selected {
    border: 1px solid currentColor;
  }
</style>
