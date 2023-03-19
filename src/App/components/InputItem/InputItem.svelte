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
      // TODO: refactor
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
    margin-bottom: 0.5rem;
    gap: 0.5rem;
  }
</style>
