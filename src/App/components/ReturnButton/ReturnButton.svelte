<script>
  export let disabled;
  export let handleReturnPickedItems;
</script>

<div>
  <button {disabled} on:click={handleReturnPickedItems}>return</button> picked options
</div>

<style>
  div {
    margin-bottom: 0.5rem;
  }
</style>
