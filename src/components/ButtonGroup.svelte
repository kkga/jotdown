<div class="flex flex-row button-group">
  <slot />
</div>

<style lang="postcss">
  :global(.button-group > button) {
    @apply flex-1;
  }
  :global(.button-group > button:not(:first-child)) {
    margin-left: -1px;
  }
</style>
