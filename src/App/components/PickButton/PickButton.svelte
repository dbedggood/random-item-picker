<script>
  export let inputItems;
  export let handlePickItem;
</script>

<button
  id="pick-button"
  disabled={!inputItems.at(0).value}
  on:click={handlePickItem}
>
  pick
</button>
a random option
