<script lang="ts">
  import { onMount, tick, createEventDispatcher } from 'svelte'
  import type { SheetType } from '../types/sheet.type'

  const dispatch = createEventDispatcher()

  const focusOnInit = (node: HTMLElement) =>
    node && typeof node.focus === 'function' && node.focus()

  export let sheet: SheetType
  export let zoomed = false
  export let isCurrent = false

  let nameEl: HTMLElement
  let textEl: HTMLElement

  function update(updatedSheet: Partial<SheetType>) {
    sheet = { ...sheet, ...updatedSheet }
  }

  function onEditContent(content: string) {
    update({ content: content })
    dispatch('update', sheet)
  }

  function onEditName(name: string) {
    update({ name: name })
    dispatch('update', sheet)
  }

  async function focusTextArea() {
    await tick()
    textEl.focus()
  }

  $: if (isCurrent) {
    focusTextArea()
  }

  onMount(() => {
    isCurrent ? textEl.focus() : {}
  })
</script>

<div
  class="sheet"
  style="color: var(--{sheet.color}-900); background-color: var(--{sheet.color}-200">
  <div
    style="background-color: var(--{sheet.color}-500); color: var(--{sheet.color}-000)"
    class="label-container">
    <input
      type="text"
      bind:this={nameEl}
      bind:value={sheet.name}
      on:focus={() => dispatch('focus', sheet.id)}
      on:input={(e) => onEditName(e.currentTarget.value)}
      class="label-input"
      class:zoomed />
  </div>
  <textarea
    bind:this={textEl}
    use:focusOnInit
    id="sheet-{sheet.id}"
    on:focus={() => dispatch('focus', sheet.id)}
    on:input={(e) => onEditContent(e.currentTarget.value)}
    tabindex={sheet.id}
    style="color: var(--{sheet.color}-900); outline-color: var(--{sheet.color}-000)"
    class="sheet-text"
    class:zoomed
    spellcheck="false">{sheet.content}</textarea>
</div>

<style>
  @keyframes fadeIn {
    from {
      background-color: #fff;
    }
    to {
      background-color: transparent;
    }
  }

  .sheet {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
  }
  .label-container {
    padding: 0 var(--spacer-s);
  }
  .label-input {
    width: 100%;
    display: block;
    border: none;
    background-color: transparent;
    color: inherit;
    font-family: var(--font-mono);
    font-size: var(--font-size-s);
    line-height: var(--lh-l);
    letter-spacing: var(--ls-s);
    font-weight: bold;
    text-transform: uppercase;
    appearance: none;
    outline: none;
  }
  .label-input.zoomed {
    text-align: center;
  }
  .sheet-text {
    padding: var(--spacer-s);
    resize: none;
    flex: 1;
    background-color: transparent;
    outline: none;
    border: none;
    font-family: var(--font-mono);
    font-size: var(--font-size-s);
    line-height: var(--lh-m);
    appearance: none;
  }
  .sheet-text.zoomed {
    width: 100%;
    max-width: 80ch;
    margin: 0 auto;
    padding: var(--spacer-m);
    font-size: var(--font-size-l);
  }
  .sheet-text:not(.zoomed):focus {
    z-index: 1;
    animation: 0.25s fadeIn;
  }
</style>
