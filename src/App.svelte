<script lang="ts">
  import Pad from './components/Pad.svelte'
  import { sheets } from './stores'
</script>

<Pad bind:sheets={$sheets} />
