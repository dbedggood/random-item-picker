<script>
  import { onMount, tick } from "svelte";
  import {
    getDefaultSauces,
    getNewInputItem,
    getRandomInt,
    removeItemFromArray,
  } from "./utils";
  import { AddButton, PickButton, InputItem } from "./components";

  let inputItems = getDefaultSauces();
  let pickedItems = [];

  async function focusLastInput() {
    await tick;
    let inputs = document.getElementsByTagName("input");
    inputs[inputs.length - 1].focus();
  }

  $: {
    const hasEmptyInputs = inputItems.some(({ value }) => value === "");
    const firstEmptyInputIndex = inputItems.findIndex(
      ({ value }) => value === ""
    );
    const inputItemsLastIndex = inputItems.length - 1;
    if (hasEmptyInputs && firstEmptyInputIndex !== inputItemsLastIndex) {
      inputItems = removeItemFromArray(inputItems, firstEmptyInputIndex);
      focusLastInput();
    }
  }

  function handleInputChange(event, index) {
    if (inputItems[index].value !== event.target.value) {
      inputItems[index].value = event.target.value;
    }
  }

  function handleAddNewInput() {
    if (inputItems.at(-1).value) {
      inputItems = [...inputItems, getNewInputItem()];
    }
    focusLastInput();
  }

  function handlePickItem() {
    const populatedInputItems = inputItems.filter(({ value }) => value);
    const pickedInputItemIndex = getRandomInt(populatedInputItems.length);
    pickedItems = [...pickedItems, inputItems[pickedInputItemIndex]];
    if (inputItems.length > 1) {
      inputItems = removeItemFromArray(inputItems, pickedInputItemIndex);
      focusLastInput();
    } else {
      inputItems[0] = getNewInputItem();
    }
  }

  onMount(focusLastInput);
</script>

<PickButton {inputItems} {handlePickItem} />

{#each inputItems as { id, value }, index (id)}
  <InputItem
    {id}
    {value}
    {handleAddNewInput}
    handleInputChange={(event) => {
      handleInputChange(event, index);
    }}
  />
{/each}

<AddButton disabled={!inputItems.at(-1).value} {handleAddNewInput} />

<ol>
  {#each pickedItems as { id, value } (id)}
    <li>
      {value}
    </li>
  {/each}
</ol>
