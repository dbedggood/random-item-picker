<script>
  export let disabled;
  export let handleResetPickedItems;
</script>

<div>
  <button {disabled} on:click={handleResetPickedItems}>reset</button> picked options
</div>

<style>
  div {
    margin-bottom: 0.5rem;
  }
</style>
