<div class="button-group">
  <slot />
</div>

<style>
  .button-group {
    display: flex;
  }
  :global(.button-group > *:not(:first-child)) {
    margin-left: -1px;
  }
</style>
