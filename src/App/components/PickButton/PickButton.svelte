<script>
  export let disabled;
  export let handlePickItem;
</script>

<button id="pick-button" {disabled} on:click={handlePickItem}> pick </button>
a random option
