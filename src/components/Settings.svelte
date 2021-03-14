<script lang="ts">
  import { fly } from 'svelte/transition';
  import {createEventDispatcher} from "svelte"
  export let show = false;

  const dispatch = createEventDispatcher()

  function onClose() {
    show = false;
    dispatch("close")
  }
</script>

{#if show}
  <div class="backdrop" on:click|self={onClose}>
    <div transition:fly={{ y: -8, duration: 125 }} class="container">
      <div class="row">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 40"
            width="48"
            height="40">
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
          Made by <a href="https://twitter.com/kkga">@kkga</a>. Source:
          <a href="https://github.com/kkga/jotdown">on GitHub</a>.
        </p>

        <hr />

        <div class="row">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
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
    </div>
  </div>
{/if}

<style>
  .backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #00000066;
  }
  .container {
    z-index: 100;
    font-size: 13px;
    font-family: sans-serif;
    position: absolute;
    top: 40px;
    right: 8px;
    padding: var(--spacer-m);
    width: 20rem;
    background-color: white;
    color: var(--gray-900);
    box-shadow: 0 12px 48px #00000066;
  }
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
    background-color: var(--gray-200);
  }
  p {
    margin: 0;
  }

  footer {
    padding: var(--spacer-s);
    font-size: 12px;
    background-color: var(--gray-100);
    border: 1px solid var(--gray-200);
    color: var(--gray-600);
  }
  footer a {
    color: var(--blue-600);
    text-decoration: none;
  }
  footer hr {
    margin: var(--spacer-s) calc(var(--spacer-s) * -1);
  }
</style>
