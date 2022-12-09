<script>
  export let disabled;
  export let handlePickItem;
</script>

<div>
  <button {disabled} on:click={handlePickItem}> pick </button>
  a random option
</div>

<style>
  div {
    margin-bottom: 0.5rem;
  }
</style>
