<script>
  export let inputItems;
  export let handleAddNewInput;
</script>

<button disabled={!inputItems.at(-1).value} on:click={handleAddNewInput}>
  add
</button>
an option
