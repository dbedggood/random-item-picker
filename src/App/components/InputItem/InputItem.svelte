<script>
  import { slide } from "svelte/transition";

  export let id;
  export let value;
  export let handleInputChange;
  export let handleAddNewInput;
</script>

<div transition:slide>
  <input
    {id}
    {value}
    autocomplete="off"
    on:input={handleInputChange}
    on:keypress={(event) => {
      if (event.key === "Enter") {
        handleAddNewInput();
      }
    }}
  />
</div>

<style>
  div {
    margin-bottom: 0.5rem;
  }
</style>
