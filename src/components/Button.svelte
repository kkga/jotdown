<script lang="ts">
  export let value: any = undefined;
  export let color = 'gray';
  export let textColor = 'gray';
</script>

<button
  {value}
  class="p-2 h-8 flex justify-center items-center text-{textColor}-500 bg-{color}-50 ring-inset focus:ring-2 hover:bg-{color}-100 active:bg-{color}-200"
  on:click>
  <slot>Button</slot>
</button>
