<script>
  import { afterUpdate } from "svelte";
  import {
    getNewInputItem,
    getRandomInt,
    removeItemFromArray,
    getDefaultSauces,
  } from "./utils";

  let inputItems = getDefaultSauces();
  let pickedItems = [];

  $: {
    const hasEmptyInputs = inputItems.some(({ value }) => value === "");
    const firstEmptyInputIndex = inputItems.findIndex(
      ({ value }) => value === ""
    );
    const inputItemsLastIndex = inputItems.length - 1;

    if (hasEmptyInputs && firstEmptyInputIndex !== inputItemsLastIndex) {
      inputItems = removeItemFromArray(inputItems, firstEmptyInputIndex);
    }
  }

  function handleInputChange(event, index) {
    if (inputItems[index].value !== event.target.value) {
      inputItems[index].value = event.target.value;
    }
  }

  function handleAddNewInput() {
    inputItems = [...inputItems, getNewInputItem()];
  }

  function handlePickItem() {
    const populatedInputItems = inputItems.filter(({ value }) => value);
    const pickedInputItemIndex = getRandomInt(populatedInputItems.length);
    pickedItems = [...pickedItems, inputItems[pickedInputItemIndex]];
    if (inputItems.length > 1) {
      inputItems = removeItemFromArray(inputItems, pickedInputItemIndex);
    } else {
      inputItems[0] = getNewInputItem();
    }
  }

  afterUpdate(() => {
    let inputs = document.getElementsByTagName("input");
    inputs[inputs.length - 1].focus();
  });
</script>

<button disabled={!inputItems.at(0).value} on:click={handlePickItem}>
  pick
</button>
an option

{#each inputItems as { id, value }, index (id)}
  <div>
    <input
      {id}
      {value}
      autocomplete="off"
      on:input={(event) => {
        handleInputChange(event, index);
      }}
      on:keypress={(event) => {
        if (event.key === "Enter") {
          handleAddNewInput();
        }
      }}
    />
  </div>
{/each}

<button disabled={!inputItems.at(-1).value} on:click={handleAddNewInput}>
  add
</button>
an option

<ol>
  {#each pickedItems as { id, value } (id)}
    <li>
      {value}
    </li>
  {/each}
</ol>
