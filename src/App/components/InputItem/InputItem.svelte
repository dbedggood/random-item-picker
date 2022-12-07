<script>
  export let id;
  export let value;
  export let handleInputChange;
  export let handleAddNewInput;
</script>

<div>
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
