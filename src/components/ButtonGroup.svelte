<div class="flex flex-row button-group">
  <slot />
</div>

<style lang="postcss">
  :global(.button-group > *) {
    @apply flex-1;
  }
</style>
