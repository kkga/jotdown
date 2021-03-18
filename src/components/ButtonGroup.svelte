<div class="border border-gray-300 flex flex-row divide-x divide-gray-300 button-group">
  <slot />
</div>

<style lang="postcss">
  :global(.button-group > button) {
    @apply flex-1;
  }
  /* :global(.button-group > button:not(:first-child)) { */
  /*   margin-left: -1px; */
  /* } */
</style>
