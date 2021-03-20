<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { settings } from '../stores';
  import { tw, apply } from 'twind';
  import Sidebar from './Sidebar.svelte';
  import Button from './Button.svelte';
  import ButtonGroup from './ButtonGroup.svelte';
  import Link from './Link.svelte';
  export let show = false;

  const dispatch = createEventDispatcher();

  function onClose() {
    show = false;
    dispatch('close');
  }

  $: theme = $settings.theme;
  $: colorset = $settings.colorSet;
  $: font = $settings.font;
  $: fontSize = $settings.fontSize;

  function handleThemeChange(theme: 'dark' | 'light' | 'auto') {
    $settings.theme = theme;
  }

  function handleColorsetChange(colorset: number) {
    $settings.colorSet = colorset;
  }

  function handleFontChange(font: 'cursive' | 'system') {
    $settings.font = font;
  }

  function handleFontSizeChange(fontSize: 1 | 2) {
    $settings.fontSize = fontSize;
  }

  const headingStyle = apply`mt-8 mb-1 col-span-4 font-bold font-semibold uppercase text-xs tracking-wide`;
  const kbdStyle = apply`
    bg-gray-100 border border-gray-200 px-1 py-0 block
    dark:(bg-gray-600 border-gray-500 text-gray-300)
    `;
  const groupContainerStyle = apply`grid grid-cols-4 gap-2 items-center`;
</script>

<Sidebar {show} on:close={onClose}>
  <div class={tw`flex(& row) items-center space-x-2`}>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 40" width="48" height="40">
        <rect x="0" y="0" width="15" height="19" class={tw`fill-current text-blue-500`} />
        <rect
          x="16"
          y="0"
          width="15"
          height="19"
          class={tw`fill-current text-green-500`} />
        <rect
          x="32"
          y="0"
          width="15"
          height="19"
          class={tw`fill-current text-purple-500`} />
        <rect
          x="0"
          y="20"
          width="15"
          height="19"
          class={tw`fill-current text-yellow-500`} />
        <rect
          x="16"
          y="20"
          width="15"
          height="19"
          class={tw`fill-current text-red-500`} />
        <rect
          x="32"
          y="20"
          width="15"
          height="19"
          class={tw`fill-current text-pink-500`} />
      </svg>
    </div>

    <div>
      <h2 class={tw`font-bold`}>Jotdown</h2>
      <p class={tw`text-xs`}>Simple app for jotting things down.</p>
    </div>
  </div>

  <hr class={tw`my-4`} />

  <div class={tw(groupContainerStyle)}>
    <h3 class={tw(headingStyle)}>Appearance</h3>
    <div>Theme</div>
    <div class={tw`col-span-3`}>
      <ButtonGroup>
        <Button
          fill
          active={theme === 'auto'}
          value="auto"
          on:click={() => handleThemeChange('auto')}>
          Auto</Button>
        <Button
          fill
          active={theme === 'light'}
          value="light"
          on:click={() => handleThemeChange('light')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            ><path
              fill-rule="evenodd"
              fill="currentColor"
              d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8 12a4 4 0 100-8 4 4 0 000 8zM8 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V.75A.75.75 0 018 0zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 13zM2.343 2.343a.75.75 0 011.061 0l1.06 1.061a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zm9.193 9.193a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.061l-1.061-1.06a.75.75 0 010-1.061zM16 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0116 8zM3 8a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h1.5A.75.75 0 013 8zm10.657-5.657a.75.75 0 010 1.061l-1.061 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm-9.193 9.193a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0z" /></svg>
        </Button>
        <Button
          fill
          active={theme === 'dark'}
          value="dark"
          on:click={() => handleThemeChange('dark')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            ><path
              fill-rule="evenodd"
              fill="currentColor"
              d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z" /></svg>
        </Button>
      </ButtonGroup>
    </div>

    <div>Colors</div>
    <div class={tw`col-span-3`}>
      <ButtonGroup>
        <Button
          fill
          active={colorset === 1}
          on:click={() => handleColorsetChange(1)}
          value="1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 17"
            width="20"
            height="17">
            <rect x="0" y="0" width="6" height="8" fill="var(--sheet-blue-label-bg)" />
            <rect x="7" y="0" width="6" height="8" fill="var(--sheet-green-label-bg)" />
            <rect x="14" y="0" width="6" height="8" fill="var(--sheet-purple-label-bg)" />
            <rect x="0" y="9" width="6" height="8" fill="var(--sheet-orange-label-bg)" />
            <rect x="7" y="9" width="6" height="8" fill="var(--sheet-red-label-bg)" />
            <rect x="14" y="9" width="6" height="8" fill="var(--sheet-pink-label-bg)" />
          </svg>
        </Button>
        <Button
          fill
          active={colorset === 0}
          on:click={() => handleColorsetChange(0)}
          value="0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 17"
            width="20"
            height="17">
            <rect x="0" y="0" width="6" height="8" fill="var(--sheet-gray-label-bg)" />
            <rect x="7" y="0" width="6" height="8" fill="var(--sheet-gray-label-bg)" />
            <rect x="14" y="0" width="6" height="8" fill="var(--sheet-gray-label-bg)" />
            <rect x="0" y="9" width="6" height="8" fill="var(--sheet-gray-label-bg)" />
            <rect x="7" y="9" width="6" height="8" fill="var(--sheet-gray-label-bg)" />
            <rect x="14" y="9" width="6" height="8" fill="var(--sheet-gray-label-bg)" />
          </svg>
        </Button>
      </ButtonGroup>
    </div>

    <div>Font</div>
    <div class={tw`col-span-3`}>
      <ButtonGroup>
        <Button
          fill
          on:click={() => handleFontChange('cursive')}
          active={font === 'cursive'}
          ><span class={tw`font-cursive`}>Recursive</span></Button>
        <Button
          fill
          on:click={() => handleFontChange('system')}
          active={font === 'system'}>System</Button>
      </ButtonGroup>
    </div>

    <div>Text</div>
    <div class={tw`col-span-3`}>
      <ButtonGroup>
        <Button fill on:click={() => handleFontSizeChange(1)} active={fontSize === 1}
          >Small</Button>
        <Button fill on:click={() => handleFontSizeChange(2)} active={fontSize === 2}
          >Medium</Button>
      </ButtonGroup>
    </div>
  </div>

  <div class={tw(groupContainerStyle)}>
    <h3 class={tw(headingStyle)}>Keyboard shortcuts</h3>
    <div>Cycle</div>
    <div class={tw`col-span-3 flex flex-row space-x-2`}>
      <kbd class={tw(kbdStyle)}>Tab</kbd> <kbd class={tw(kbdStyle)}>Shift-Tab</kbd>
    </div>
    <div>Zoom</div>
    <div class={tw`col-span-3 flex flex-row space-x-2`}>
      <kbd class={tw(kbdStyle)}>Ctrl-F</kbd>
    </div>
  </div>

  <footer class={tw`mt-auto divide-y dark:(divide-gray-600) space-y-2 text-xs`}>
    <div>
      Made by <Link href="https://twitter.com/kkga_">@kkga</Link>. Source:
      <Link href="https://github.com/kkga/jotdown">on GitHub</Link>.
    </div>

    <div class={tw`flex flex-col space-y-1 pt-2`}>
      <div>
        Bugs? <Link href="https://github.com/kkga/jotdown/issues">Create an issue</Link>.
      </div>
      <div>
        Suggestions? <Link href="https://github.com/kkga/jotdown/discussions"
          >Start a discussion</Link
        >.
      </div>
    </div>
  </footer>
</Sidebar>
