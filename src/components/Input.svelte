<script lang="ts">
  type Type = 'button' | 'select';

  export let type: Type;
  export let label: string;
</script>

<div class="container">
  <label for="control">{label}</label>
  {#if type === 'button'}
    <button id="control" />
  {/if}
</div>
