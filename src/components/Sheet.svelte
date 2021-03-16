<script lang="ts">
  import { tick, createEventDispatcher } from 'svelte';
  import { settings } from '../stores';
  import type { SheetType } from '../types/sheet.type';

  const dispatch = createEventDispatcher();

  const focusOnInit = (node: HTMLElement) =>
    node && typeof node.focus === 'function' && node.focus();

  export let sheet: SheetType;
  export let zoomed = false;
  export let isCurrent = false;

  $: useColors = $settings.colorSet === 1;
  $: color = sheet.content.trim() === '' ? 'unused' : useColors ? sheet['color'] : 'gray';
  $: fontSize = ['s', 'm'][$settings.fontSize - 1];
  $: font = $settings.font;

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

<div class="flex-1 flex flex-col bg-{color}-800">
  <div class="bg-{color}-900">
    <input
      type="text"
      bind:value={sheet.name}
      on:input={(e) => onEditName(e.currentTarget.value)}
      class="p-2 font-semibold uppercase border-b border-{color}-700 text-{color}-300 bg-transparent w-full"
      class:text-center={zoomed} />
  </div>
  <textarea
    bind:this={textEl}
    use:focusOnInit
    id="sheet-{sheet.id}"
    on:focus={() => dispatch('focus', sheet.id)}
    on:input={(e) => onEditContent(e.currentTarget.value)}
    tabindex={sheet.id}
    class="p-2 w-full m-auto flex-1 outline-none text-{color}-200 bg-transparent resize-none"
    class:max-w-4xl={zoomed}
    class:text-xl={zoomed}
    class:p-8={zoomed}
    class:flash={!zoomed}
    spellcheck="false">{sheet.content}</textarea>
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
  .flash:focus {
    animation: 0.35s fadeIn;
  }
</style>
