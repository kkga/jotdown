<script lang="ts">
  import { tw } from 'twind';
  export let href = '';
</script>

<a {href} class={tw`underline`}>
  <slot />
</a>
