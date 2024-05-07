<script>
  import { slide } from "svelte/transition";
  import { TRANSITION_DURATION } from "../../constants";

  export let id;
  export let value;
  export let index;
  export let handleInputChange;
  export let handleAddNewInput;
</script>

<div transition:slide={{ duration: TRANSITION_DURATION }}>
  <input
    {id}
    {value}
    name={`option-${index}`}
    aria-label={`Option ${index}:`}
    autocomplete="off"
    on:input={handleInputChange}
    on:keypress={(event) => {
      if (event.key === "Enter") {
        handleAddNewInput();
      }
    }}
  />
  <button
    disabled={value === ""}
    on:click={() => {
      // TODO: refactor (it's setting the input to an empty string to delete it)
      const fakeEmptyInputEvent = {
        target: {
          value: "",
        },
      };
      handleInputChange(fakeEmptyInputEvent, index);
    }}>remove</button
  >
</div>

<style>
  div {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  input {
    min-width: 100px;
  }
</style>
