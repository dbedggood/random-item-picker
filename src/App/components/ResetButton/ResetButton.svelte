<script>
  export let disabled;
  export let handleResetPickedItems;
</script>

<button {disabled} on:click={handleResetPickedItems}>reset</button> picked options
