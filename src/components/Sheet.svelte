<script lang="ts">
  import { tick, createEventDispatcher } from 'svelte';
  import type { SheetType } from '../types/sheet.type';

  const dispatch = createEventDispatcher();

  const focusOnInit = (node: HTMLElement) =>
    node && typeof node.focus === 'function' && node.focus();

  export let sheet: SheetType;
  export let zoomed = false;
  export let isCurrent = false;

  $: color = sheet.content.trim() === '' ? 'gray' : sheet['color'];

  let textEl: HTMLTextAreaElement;

  function update(updatedSheet: Partial<SheetType>) {
    sheet = { ...sheet, ...updatedSheet };
  }

  function onEditContent(content: string) {
    update({ content: content });
    dispatch('update', sheet);
  }

  function onEditName(name: string) {
    update({ name: name });
    dispatch('update', sheet);
  }

  async function focusTextArea() {
    await tick();
    textEl.focus();
  }

  $: if (isCurrent) focusTextArea();
</script>

<div
  class="sheet"
  style="
  --sheet-bg: var(--{color}-900);
  --sheet-text: var(--{color}-100);
  --label-bg: var(--{color}-700);
  --label-text: var(--{color}-100);
  --outline-color: var(--{color}-300);
  --selection-bg: var(--{color}-100);
  --selection-text: var(--{color}-900)"
>
  <div class="label-container">
    <input
      type="text"
      bind:value={sheet.name}
      on:input={(e) => onEditName(e.currentTarget.value)}
      class="label-input"
      class:zoomed
    />
  </div>
  <textarea
    bind:this={textEl}
    use:focusOnInit
    id="sheet-{sheet.id}"
    on:focus={() => dispatch('focus', sheet.id)}
    on:input={(e) => onEditContent(e.currentTarget.value)}
    tabindex={sheet.id}
    class="sheet-text"
    class:zoomed
    spellcheck="false">{sheet.content}</textarea
  >
</div>

<style>
  @keyframes fadeIn {
    from {
      background-color: #ffffff22;
    }
    to {
      background-color: transparent;
    }
  }

  .sheet {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    background-color: var(--sheet-bg);
  }
  .label-container {
    background-color: var(--label-bg);
    color: var(--label-text);
  }
  .label-input {
    width: 100%;
    padding: var(--spacer-s) var(--spacer-s);
    margin: 0;
    display: block;
    border: none;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: var(--font-size-s);
    font-weight: bold;
    text-transform: uppercase;
    appearance: none;
    outline-offset: -1px;
    outline-color: var(--outline-color);
  }
  @media (min-width: 576px) {
    .label-input {
      padding: 4px var(--spacer-s);
    }
  }
  .label-input:focus {
    outline-width: 1px;
    outline-style: solid;
  }
  .label-input.zoomed {
    text-align: center;
  }
  .label-input::selection {
    background-color: var(--selection-bg);
    color: var(--selection-text);
  }
  .sheet-text {
    padding: var(--spacer-s);
    resize: none;
    flex: 1;
    margin: 0;
    background-color: transparent;
    color: var(--sheet-text);
    outline: none;
    border: none;
    font-family: inherit;
    font-size: var(--font-size-s);
    line-height: var(--lh-m);
    appearance: none;
    outline-offset: -1px;
    outline-color: var(--outline-color);
    vertical-align: bottom;
  }
  .sheet-text.zoomed {
    width: 100%;
    max-width: var(--width-body);
    margin: 0 auto;
    padding: var(--spacer-l);
    font-size: var(--font-size-l);
  }
  .sheet-text:not(.zoomed):focus {
    z-index: 1;
    animation: 0.35s fadeIn;
    outline-width: 1px;
    outline-style: solid;
  }
  .sheet-text::selection {
    background-color: var(--selection-bg);
    color: var(--selection-text);
  }
</style>
