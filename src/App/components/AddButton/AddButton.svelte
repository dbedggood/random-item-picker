<script>
  export let disabled;
  export let handleAddNewInput;
</script>

<div>
  <button {disabled} on:click={handleAddNewInput}>add</button>
  a new option
</div>
