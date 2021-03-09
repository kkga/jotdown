<script lang="ts">
  import { createEventDispatcher } from "svelte";
  /* import { selectOnFocus } from "../actions"; */
  import type { SheetType } from "../types/sheet.type";
  import { colors } from "../colors"

  const dispatch = createEventDispatcher();

  /* const focusOnInit = (node: HTMLElement) => */
  /*   node && typeof node.focus === "function" && node.focus(); */

  export let sheet: SheetType;
  export let zoomed = false;

  let nameEl: HTMLElement;
  let textEl: HTMLElement;

  $: elColors = colors[sheet.color];

  function update(updatedSheet: Partial<SheetType>) {
    sheet = { ...sheet, ...updatedSheet };
  }

  function onEditContent(content: string) {
    update({ content: content });
    dispatch("update", sheet);
  }

  function onEditName(name: string) {
    update({ name: name });
    dispatch("update", sheet);
  }
</script>

<div class="sheet" style="background-color: {elColors["body"]}">
  <input 
    type="text"
    bind:this={nameEl}
    bind:value={sheet.name}
    on:focus={() => dispatch("focus", sheet.id)}
    on:change={(e) => onEditName(e.currentTarget.value)}
    style="background-color: {elColors["head"]}"
    class="sheet-label"
    class:zoomed
    />
  <textarea
    bind:this={textEl}
    id="sheet-{sheet.id}"
    on:focus={() => dispatch("focus", sheet.id)}
    on:change={(e) => onEditContent(e.currentTarget.value)}
    tabindex={sheet.id}
    class="sheet-text"
    class:zoomed
    spellcheck="false"
    >{sheet.content}</textarea>
</div>

<style>
  .sheet {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
  }
  .sheet-label {
    display: block;
    font-weight: bold;
    padding: 0 var(--spacer-s);
    border: none;
    color: white;
    font-family: var(--font);
    font-size: var(--font-size-s);
    line-height: var(--lh-l);
    appearance: none;
    outline: none;
  }
  .sheet-label.zoomed {
    text-align: center;
  }
  .sheet-text {
    padding: var(--spacer-s);
    resize: none;
    flex: 1;
    background-color: transparent;
    outline: none;
    border: none;
    font-family: var(--font);
    font-size: var(--font-size-s);
    line-height: var(--lh-m);
    appearance: none;
  }
  .sheet-text.zoomed {
    width: 100%;
    max-width: 72ch;
    margin: 0 auto;
    padding: var(--spacer-m);
    font-size: var(--font-size-l);
  }
  .sheet-text:focus {
    outline: 2px solid dodgerblue;
  }
</style>
