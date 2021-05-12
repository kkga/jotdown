<script lang="ts">
import { tw, animation } from 'twind/css';
import { tick, createEventDispatcher } from 'svelte';
import { settings } from '../stores';
import type { SheetType } from '../types/sheet.type';

const dispatch = createEventDispatcher();

const focusOnInit = (node: HTMLElement) =>
  node && typeof node.focus === 'function' && node.focus();

export let sheet: SheetType;
export let zoomed = false;
export let isCurrent = false;

$: isEmpty = sheet.content.trim() === '';
$: useColors = $settings.colorSet === 1;
$: color = isEmpty ? 'gray' : useColors ? sheet['color'] : 'gray';
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

const flashLight = animation('0.35s', {
  from: { backgroundColor: '#ffffff99' },
  to: { backgroundColor: 'transparent' }
});

const flashDark = animation('0.35s', {
  from: { backgroundColor: '#ffffff33' },
  to: { backgroundColor: 'transparent' }
});
</script>

<div
  class={tw`flex(& 1 col) font-${font} text-${fontSize} bg-${color}-100 dark:bg-${color}-800`}>
  <input
    type="text"
    bind:value={sheet.name}
    on:input={(e) => onEditName(e.currentTarget.value)}
    class={tw`z-10 px-2 py-2 outline-none font-semibold leading-none uppercase bg-transparent w-full
      ${
        isEmpty
          ? `text-${color}-400 dark:(text-${color}-500)`
          : `text-${color}-700 dark:(text-${color}-200)`
      }
      ${zoomed && `text-center`} 
    `} />

  <hr class={tw`mx-2 my-0 border-${color}-200 dark:(border-${color}-700)`} />

  <textarea
    bind:this={textEl}
    id="sheet-{sheet.id}"
    on:focus={() => dispatch('focus', sheet.id)}
    on:input={(e) => onEditContent(e.currentTarget.value)}
    tabindex={sheet.id}
    class:flash={!zoomed}
    class={tw`
      p-2 w-full m-auto flex-1 outline-none text-${color}-700 bg-transparent resize-none
      ${zoomed && `max-w-4xl text-xl p-8`}
      focus:${!zoomed && flashLight}
      dark:(focus:${!zoomed && flashDark})
      dark:text-${color}-200 
    `}>{sheet.content}</textarea>
</div>
