<script lang="ts">
import { tw } from 'twind';
export let value: any = null;
export let bgColor = 'gray';
export let textColor = 'gray';
export let active = false;
export let ghost = false;
export let fill = false;
</script>

<button
    class={tw`
    p-2 h-8 flex justify-center items-center text-${textColor}-600 ring-inset outline-none 
    dark:(text-${textColor}-300)
    focus:(ring-2)
    active:(bg-${bgColor}-200 dark:(bg-gray-900))
    ${fill && `flex-1`}
    ${active && `text-gray-900 bg-gray-200 dark:(text-gray-200 bg-gray-900)`}
    ${ghost && `bg-transparent`}
    `}
    {value}
    on:click>
    <slot>Button</slot>
</button>
