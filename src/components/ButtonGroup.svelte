<script>
  import { tw } from 'twind';
</script>

<div
  class={tw`
     border(& gray-300) flex(& row) divide(x gray-300)
     dark:(border-gray-600 divide-gray-600)
     `}>
  <slot />
</div>
