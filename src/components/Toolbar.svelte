<script lang="ts">
  import type { SheetType } from '../types/sheet.type';

  export let sheets: SheetType[];
  export let currentSheet: number;
  export let fullscreen: boolean;
  export let isMobile: boolean;

  function isSheetEmpty(sheet_id: number) {
    return sheets[sheet_id - 1].content.trim() === '';
  }

  function getSheetColor(sheet_id: number) {
    return isSheetEmpty(sheet_id) ? 'gray-700' : `${sheets[sheet_id - 1]['color']}-500`;
  }
</script>

<div class="container">
  {#if isMobile}
    <button style="visibility: hidden" />
  {:else}
    <button on:click={() => (fullscreen = !fullscreen)}>
      {#if fullscreen}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
          ><path
            fill-rule="evenodd"
            fill="currentColor"
            d="M5.25 1a.75.75 0 01.75.75v2.5A1.75 1.75 0 014.25 6h-2.5a.75.75 0 010-1.5h2.5a.25.25 0 00.25-.25v-2.5A.75.75 0 015.25 1zm5.5 0a.75.75 0 01.75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 0110 4.25v-2.5a.75.75 0 01.75-.75zM1 10.75a.75.75 0 01.75-.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a.75.75 0 01-1.5 0v-2.5a.25.25 0 00-.25-.25h-2.5a.75.75 0 01-.75-.75zm9 1c0-.966.784-1.75 1.75-1.75h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v2.5a.75.75 0 01-1.5 0v-2.5z"
          /></svg
        >
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
          ><path
            fill-rule="evenodd"
            fill="currentColor"
            d="M2.75 2.5a.25.25 0 00-.25.25v2.5a.75.75 0 01-1.5 0v-2.5C1 1.784 1.784 1 2.75 1h2.5a.75.75 0 010 1.5h-2.5zM10 1.75a.75.75 0 01.75-.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a.75.75 0 01-1.5 0v-2.5a.25.25 0 00-.25-.25h-2.5a.75.75 0 01-.75-.75zM1.75 10a.75.75 0 01.75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 011 13.25v-2.5a.75.75 0 01.75-.75zm12.5 0a.75.75 0 01.75.75v2.5A1.75 1.75 0 0113.25 15h-2.5a.75.75 0 010-1.5h2.5a.25.25 0 00.25-.25v-2.5a.75.75 0 01.75-.75z"
          /></svg
        >
      {/if}
    </button>
  {/if}

  {#if fullscreen}
    <ul class="sheets">
      {#each sheets as sheet (sheet.id)}
        <button
          on:click={() => (currentSheet = sheet.id)}
          value="sheet.id"
          class:selected={currentSheet === sheet.id}
          class="sheets-item"
          style="color: var(--{getSheetColor(sheet.id)})"
        >
          {#if currentSheet !== sheet.id}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              ><path
                fill-rule="evenodd"
                fill="currentColor"
                d="M6 7.75C6 6.784 6.784 6 7.75 6h8.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0116.25 18h-8.5A1.75 1.75 0 016 16.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25h-8.5z"
              /></svg
            >
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              ><path
                fill-rule="evenodd"
                fill="currentColor"
                d="M7.75 6A1.75 1.75 0 006 7.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0018 16.25v-8.5A1.75 1.75 0 0016.25 6h-8.5z"
              /></svg
            >
          {/if}
        </button>
      {/each}
    </ul>
  {:else}
    <div class="jotdown">
      <span style="color: var(--blue-400)">J</span><span style="color: var(--green-400)"
        >o</span
      ><span style="color: var(--purple-400)">t</span><span
        style="color: var(--orange-400)">d</span
      ><span style="color: var(--red-400)">o</span><span style="color: var(--pink-400)"
        >w</span
      ><span style="color: var(--yellow-400)">n</span>
    </div>
  {/if}

  <button style="visibility: hidden; grid-column: -1;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
      ><path
        fill-rule="evenodd"
        fill="currentColor"
        d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
      /></svg
    >
  </button>
</div>

<style>
  .container {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    padding: 0;
    border: 0;
    background-color: transparent;
    color: var(--gray-500);
  }
  button:hover {
    background-color: var(--gray-900);
    color: var(--gray-300);
  }
  button:active {
    background-color: var(--gray-800);
  }
  .sheets {
    display: flex;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 576px) {
    button {
      width: 2rem;
      height: 2rem;
    }
  }
</style>
