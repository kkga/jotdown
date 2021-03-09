<script lang="ts">
  import { createEventDispatcher } from "svelte";
  /* import { selectOnFocus } from "../actions"; */
  import type { SheetType } from "../types/sheet.type";

  const dispatch = createEventDispatcher();

  /* const focusOnInit = (node: HTMLElement) => */
  /*   node && typeof node.focus === "function" && node.focus(); */

  export let sheet: SheetType;

  let name = sheet.name;
  let content = sheet.content;
  let color = sheet.color;
  let nameEl: HTMLElement;

  /* $: console.log(color) */

  function update(updatedSheet: Partial<SheetType>) {
    sheet = { ...sheet, ...updatedSheet };
    dispatch("update", sheet);
  }

  function onEdit() {
    update({ name: name, content: content });
  }
</script>

<div class="sheet" style="background-color: {color}">
  <label bind:this={nameEl} for="sheet-{sheet.id}" class="sheet-label"
    >{sheet.id}</label
  >
  <textarea id="sheet-{sheet.id}" bind:value={content} on:change={onEdit} class="sheet-text" />
</div>

<style>
  .sheet {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    box-shadow: inset 0 0 0 1px #00000022;
  }
  .sheet-label {
    display: block;
    font-weight: bold;
    padding: 2px 1ch;
    background-color: #00000011;
  }
  .sheet-text {
    padding: 1ch;
    resize: none;
    flex: 1;
    background-color:  transparent;
    outline: none;
    border: none;
  }
  .sheet-text:focus {
    outline: 2px solid dodgerblue;
  }

</style>
