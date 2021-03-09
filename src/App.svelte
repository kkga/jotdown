<script lang="ts">
  import Pad from "./components/Pad.svelte";
  import Alert from "./components/Alert.svelte";

  import { sheets } from "./stores";
</script>

<!--<Alert /> -->
<Pad bind:sheets={$sheets} />
