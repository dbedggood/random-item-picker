<script>
  import { afterUpdate } from "svelte";
  import {
    focusLastInput,
    getDefaultSauces,
    getNewInputItem,
    getRandomInt,
    removeItemFromArray,
  } from "./utils";
  import { AddButton, PickButton } from "./components";

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

  afterUpdate(focusLastInput);
</script>

<PickButton {inputItems} {handlePickItem} />

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

<AddButton {inputItems} {handleAddNewInput} />

<ol>
  {#each pickedItems as { id, value } (id)}
    <li>
      {value}
    </li>
  {/each}
</ol>
