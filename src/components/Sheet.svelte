<script lang="ts">
import { tw } from 'twind';
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
$: color =
  sheet.content.trim() === '' ? 'gray' : useColors ? sheet['color'] : 'gray';
$: fontSize = ['sm', 'base'][$settings.fontSize - 1];
$: font = $settings.font === 'cursive' ? 'cursive' : 'system';

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
  class={tw`flex(& 1 col) font-${font} text-${fontSize} bg-${color}-100 dark:bg-${color}-800`}>
  <input
    type="text"
    bind:value={sheet.name}
    on:input={(e) => onEditName(e.currentTarget.value)}
    class={tw`z-10 px-2 py-2 outline-none font-semibold leading-none uppercase text-${color}-700
            dark:(text-${color}-200) bg-transparent w-full
        ${zoomed && `text-center`} 
        `} />

  <hr class={tw`mx-2 my-0 border-${color}-200 dark:(border-${color}-700)`} />

  <textarea
    bind:this={textEl}
    use:focusOnInit
    id="sheet-{sheet.id}"
    on:focus={() => dispatch('focus', sheet.id)}
    on:input={(e) => onEditContent(e.currentTarget.value)}
    tabindex={sheet.id}
    class:flash={!zoomed}
    class={tw`${
      zoomed && `max-w-4xl text-xl p-8`
    } p-2 w-full m-auto flex-1 outline-none text-${color}-700 dark:text-${color}-200 bg-transparent resize-none`}
    spellcheck="false">{sheet.content}</textarea>
</div>

<style>
@keyframes fadeIn {
  from {
    background-color: #ffffff99;
  }
  to {
    background-color: transparent;
  }
}
.flash:focus {
  animation: 0.35s fadeIn;
}
</style>
