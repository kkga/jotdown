<script>
  import { tw } from 'twind';
</script>

<div
  class={tw`
     border(& gray-300) flex(& row) divide(x gray-300)
     dark:(border-gray-500 divide-gray-500)
     `}>
  <slot />
</div>
