<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { settings } from '../stores';
  import Sidebar from './Sidebar.svelte';
  import Button from './Button.svelte';
  import ButtonGroup from './ButtonGroup.svelte';
  export let show = false;

  const dispatch = createEventDispatcher();

  function onClose() {
    show = false;
    dispatch('close');
  }

  $: theme = $settings.theme;
  $: colorset = $settings.colorSet;

  function handleThemeChange(theme: string) {
    $settings.theme = theme;
  }

  function handleColorsetChange(colorset: number) {
    $settings.colorSet = colorset;
  }
</script>

<Sidebar {show} on:close={onClose}>
  <div class="row">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 40" width="48" height="40">
        <rect x="0" y="0" width="16" height="20" fill="var(--blue-500)" />
        <rect x="16" y="0" width="16" height="20" fill="var(--green-500)" />
        <rect x="32" y="0" width="16" height="20" fill="var(--purple-500)" />
        <rect x="0" y="20" width="16" height="20" fill="var(--orange-500)" />
        <rect x="16" y="20" width="16" height="20" fill="var(--red-500)" />
        <rect x="32" y="20" width="16" height="20" fill="var(--pink-500)" />
      </svg>
    </div>

    <div>
      <h2>Jotdown</h2>
      <p>Simple app for jotting things down.</p>
    </div>
  </div>

  <hr />

  <div class="settings-container">
    <div>Theme</div>
    <ButtonGroup>
      <Button
        active={theme === 'auto'}
        value="auto"
        on:click={() => handleThemeChange('auto')}>
        Auto</Button>
      <Button
        active={theme === 'light'}
        value="light"
        on:click={() => handleThemeChange('light')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
          ><path
            fill-rule="evenodd"
            fill="currentColor"
            d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8 12a4 4 0 100-8 4 4 0 000 8zM8 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V.75A.75.75 0 018 0zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 13zM2.343 2.343a.75.75 0 011.061 0l1.06 1.061a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zm9.193 9.193a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.061l-1.061-1.06a.75.75 0 010-1.061zM16 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0116 8zM3 8a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h1.5A.75.75 0 013 8zm10.657-5.657a.75.75 0 010 1.061l-1.061 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm-9.193 9.193a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0z" /></svg>
      </Button>
      <Button
        active={theme === 'light'}
        value="dark"
        on:click={() => handleThemeChange('light')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
          ><path
            fill-rule="evenodd"
            fill="currentColor"
            d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z" /></svg>
      </Button>
    </ButtonGroup>
    <div>Colors</div>
    <ButtonGroup>
      <Button active={colorset === 1} on:click={() => handleColorsetChange(1)} value="1">
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
      <Button active={colorset === 0} on:click={() => handleColorsetChange(0)} value="0">
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
    <div>Font</div>
    <ButtonGroup>
      <Button><span style="font-family: var(--font-text)">Recursive</span></Button>
      <Button>System</Button>
    </ButtonGroup>
  </div>

  <hr />
  <h3>Keyboard shortcuts</h3>

  <div class="grid">
    <div>Switch sheets</div>
    <div><kbd>Tab</kbd> / <kbd>Shift-Tab</kbd></div>
    <div>Toggle zoom</div>
    <div><kbd>Ctrl-F</kbd></div>
  </div>

  <hr />
  <footer>
    <p>
      Made by <a href="https://twitter.com/kkga_">@kkga</a>. Source:
      <a href="https://github.com/kkga/jotdown">on GitHub</a>.
    </p>

    <hr />

    <div class="row">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
          ><path
            fill-rule="evenodd"
            fill="currentColor"
            d="M4.72.22a.75.75 0 011.06 0l1 .999a3.492 3.492 0 012.441 0l.999-1a.75.75 0 111.06 1.061l-.775.776c.616.63.995 1.493.995 2.444v.327c0 .1-.009.197-.025.292.408.14.764.392 1.029.722l1.968-.787a.75.75 0 01.556 1.392L13 7.258V9h2.25a.75.75 0 010 1.5H13v.5c0 .409-.049.806-.141 1.186l2.17.868a.75.75 0 01-.557 1.392l-2.184-.873A4.997 4.997 0 018 16a4.997 4.997 0 01-4.288-2.427l-2.183.873a.75.75 0 01-.558-1.392l2.17-.868A5.013 5.013 0 013 11v-.5H.75a.75.75 0 010-1.5H3V7.258L.971 6.446a.75.75 0 01.558-1.392l1.967.787c.265-.33.62-.583 1.03-.722a1.684 1.684 0 01-.026-.292V4.5c0-.951.38-1.814.995-2.444L4.72 1.28a.75.75 0 010-1.06zM6.173 5h3.654A.173.173 0 0010 4.827V4.5a2 2 0 10-4 0v.327c0 .096.077.173.173.173zM5.25 6.5a.75.75 0 00-.75.75V11a3.5 3.5 0 107 0V7.25a.75.75 0 00-.75-.75h-5.5z" /></svg>
      </div>
      <div>
        Bugs? <a href="https://github.com/kkga/jotdown/issues">Create an issue</a>.
      </div>
    </div>
    <div class="row">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
          ><path
            fill-rule="evenodd"
            fill="currentColor"
            d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z" /></svg>
      </div>
      <div>
        Suggestions? <a href="https://github.com/kkga/jotdown/discussions"
          >Start a discussion</a
        >.
      </div>
    </div>
  </footer>
</Sidebar>

<style>
  svg {
    vertical-align: bottom;
  }
  h2 {
    margin: 0;
    font-size: 1.125rem;
    letter-spacing: -0.04em;
  }
  h3 {
    margin: 0 0 var(--spacer-s);
    font-size: inherit;
  }

  .settings-container {
    display: grid;
    grid-template-columns: 64px 1fr;
    gap: var(--spacer-s);
    align-items: center;
  }

  .row {
    display: flex;
    align-items: center;
    gap: var(--spacer-s);
  }
  .row.justify-center {
    justify-content: center;
  }
  .row:not(:first-child):not(:last-child) {
    margin: var(--spacer-s) 0;
  }
  .grid {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: var(--spacer-s);
  }

  hr {
    margin: var(--spacer-m) 0;
    border: none;
    height: 1px;
    background-color: var(--color-bg-tertiary);
  }
  p {
    margin: 0;
  }

  footer {
    margin-top: auto;
    padding: var(--spacer-s);
    font-size: 12px;
    border: 1px solid var(--color-bg-tertiary);
    color: var(--color-text-secondary);
  }
  footer a {
    color: var(--color-text-accent);
    text-decoration: none;
  }
  footer hr {
    margin: var(--spacer-s) calc(var(--spacer-s) * -1);
  }
</style>
